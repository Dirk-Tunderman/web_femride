import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email, verificationToken, baseUrl } = req.body;

    if (!email || !verificationToken || !baseUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const verificationLink = `${baseUrl}/verify-email?email=${encodeURIComponent(email)}&token=${verificationToken}`;
    
    const { data, error } = await resend.emails.send({
      from: 'FemRide <onboarding@resend.dev>', // Using Resend's default domain since you don't have a custom domain yet
      to: [email],
      subject: 'Verify your FemRide waitlist registration',
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
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to FemRide!</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">Sicher unterwegs - Von Frauen für Frauen</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Verify your email address</h2>
            
            <p>Thank you for joining the FemRide waitlist! To confirm your registration and secure your spot, please verify your email address by clicking the button below:</p>
            
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
                <li>Your position in the waitlist will be confirmed</li>
                <li>If you used a referral code, the referrer will move up 10 places</li>
                <li>You'll receive updates about our launch</li>
                <li>You'll be among the first to access FemRide when we go live</li>
              </ul>
            </div>
            
            <p style="color: #666; font-size: 14px; margin-top: 30px;">
              <strong>Important:</strong> This verification link will expire in 24 hours for security reasons.
            </p>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            
            <p style="color: #999; font-size: 12px; text-align: center;">
              This email was sent to ${email} because you signed up for the FemRide waitlist.<br>
              If you didn't sign up, you can safely ignore this email.
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
Welcome to FemRide!

Thank you for joining our waitlist. To confirm your registration and secure your spot, please verify your email address by visiting this link:

${verificationLink}

What happens next?
- Your position in the waitlist will be confirmed
- If you used a referral code, the referrer will move up based on your type
- You'll receive updates about our launch
- You'll be among the first to access FemRide when we go live

Important: This verification link will expire in 24 hours for security reasons.

If you didn't sign up for FemRide, you can safely ignore this email.

Best regards,
The FemRide Team
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    console.log('Email sent successfully:', data);
    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
