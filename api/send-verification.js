import { Resend } from 'resend';

// Initialize Resend only if API key is available
// Try multiple possible environment variable names
const resendApiKey = process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY || process.env.NEXT_PUBLIC_RESEND_API_KEY;
let resend = null;
if (resendApiKey) {
  resend = new Resend(resendApiKey);
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🚀 Vercel function called with:', {
      method: req.method,
      hasBody: !!req.body,
      env: {
        hasResendKey: !!resendApiKey,
        resendKeyLength: resendApiKey?.length || 0,
        allEnvVars: Object.keys(process.env).filter(key => key.includes('RESEND') || key.includes('API'))
      }
    });

    const { email, verificationToken, baseUrl, userType = 'passenger' } = req.body;

    console.log('📧 Email request details:', { email, userType, baseUrl, hasToken: !!verificationToken });

    if (!email || !verificationToken || !baseUrl) {
      console.error('❌ Missing required fields:', { email: !!email, verificationToken: !!verificationToken, baseUrl: !!baseUrl });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!resendApiKey || !resend) {
      console.error('❌ RESEND_API_KEY not found in environment variables');
      console.error('❌ Available environment variables:', Object.keys(process.env).filter(key => key.includes('RESEND') || key.includes('API')));
      return res.status(500).json({
        error: 'Email service not configured',
        details: 'RESEND_API_KEY environment variable is missing',
        availableEnvVars: Object.keys(process.env).filter(key => key.includes('RESEND') || key.includes('API')),
        checkedVars: ['RESEND_API_KEY', 'VITE_RESEND_API_KEY', 'NEXT_PUBLIC_RESEND_API_KEY']
      });
    }

    const typeParam = userType === 'driver' ? '&type=driver' : '';
    const verificationLink = `${baseUrl}/verify-email?email=${encodeURIComponent(email)}&token=${verificationToken}${typeParam}`;

    // Different content based on user type
    const isDriver = userType === 'driver';
    const userTypeText = isDriver ? 'driver' : 'passenger';
    const referralBonus = isDriver ? '5' : '10';
    const welcomeText = isDriver ? 'Welcome to the FemRide Driver Program!' : 'Welcome to FemRide!';
    const subjectText = isDriver ? 'Verify your FemRide driver registration' : 'Verify your FemRide waitlist registration';

    const { data, error } = await resend.emails.send({
      from: 'FemRide <noreply@notifications.femride.de>', // Using your verified domain
      to: [email], // Send to actual email address
      subject: subjectText,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify your FemRide registration</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #fa9de3 0%, #a3adf4 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">${welcomeText}</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Sicher unterwegs - Von Frauen für Frauen</p>
          </div>

          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Verify your email address</h2>

            <p>Thank you for joining the FemRide ${userTypeText} waitlist! To confirm your registration and secure your spot, please verify your email address by clicking the button below:</p>

            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationLink}"
                 style="background: #fa9de3; color: black; padding: 15px 30px; text-decoration: none; border-radius: 25px; font-weight: bold; font-size: 16px; display: inline-block; transition: background 0.3s;">
                Verify Email Address
              </a>
            </div>

            <p style="color: #666; font-size: 14px;">If the button doesn't work, you can also copy and paste this link into your browser:</p>
            <p style="word-break: break-all; color: #fa9de3; font-size: 14px;">${verificationLink}</p>

            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0; font-size: 16px;">What happens next?</h3>
              <ul style="margin: 10px 0; padding-left: 20px; color: #666;">
                <li>Your position in the ${userTypeText} waitlist will be confirmed</li>
                <li>If you used a referral code, the referrer will move up ${referralBonus} places</li>
                <li>You'll receive updates about our launch</li>
                <li>You'll be among the first to access FemRide when we go live</li>
                ${isDriver ? '<li>You can start earning by driving for FemRide once we launch</li>' : ''}
              </ul>
            </div>

            <div style="background: linear-gradient(135deg, #fa9de3 0%, #a3adf4 100%); padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center;">
              <h3 style="color: white; margin-top: 0; font-size: 16px;">🎁 Share & Earn Bonus Places!</h3>
              <p style="color: white; margin: 10px 0; font-size: 14px;">
                You'll receive your personal referral code after verification. Share it with friends to move up ${referralBonus} places for each verified referral!
              </p>
            </div>

            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              <strong>Important:</strong> This verification link will expire in 24 hours for security reasons.
            </p>

            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">

            <p style="color: #999; font-size: 12px; text-align: center;">
              This email was sent to ${email} because you signed up for the FemRide ${userTypeText} waitlist.<br>
              If you didn't sign up, you can safely ignore this email.
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
${welcomeText}

Thank you for joining our ${userTypeText} waitlist. To confirm your registration and secure your spot, please verify your email address by visiting this link:

${verificationLink}

What happens next?
- Your position in the ${userTypeText} waitlist will be confirmed
- If you used a referral code, the referrer will move up ${referralBonus} places
- You'll receive updates about our launch
- You'll be among the first to access FemRide when we go live${isDriver ? '\n- You can start earning by driving for FemRide once we launch' : ''}

🎁 Share & Earn Bonus Places!
You'll receive your personal referral code after verification. Share it with friends to move up ${referralBonus} places for each verified referral!

Important: This verification link will expire in 24 hours for security reasons.

If you didn't sign up for FemRide, you can safely ignore this email.

Best regards,
The FemRide Team
      `
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    console.log('✅ Email sent successfully to:', email, 'with ID:', data?.id);
    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('❌ Server error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
