import { Resend } from 'resend';

// Initialize Resend with the same setup as verification emails
const resendApiKey = process.env.RESEND_API_KEY ||
                     process.env.NEXT_PUBLIC_RESEND_API_KEY ||
                     're_WUtCevt1_DdSDgS6bJYb11M9AAAksbKvj';

let resend = null;
if (resendApiKey) {
  resend = new Resend(resendApiKey);
}

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('🚗 Driver application email request received');

    if (!resendApiKey || !resend) {
      console.error('❌ RESEND_API_KEY not found in environment variables');
      return res.status(500).json({
        error: 'Email service not configured',
        details: 'RESEND_API_KEY environment variable is missing'
      });
    }

    const { name, email, phone, message, language = 'de' } = req.body;

    console.log('📧 Driver application details:', { name, email, phone, hasMessage: !!message, language });

    if (!name || !email || !phone || !message) {
      console.error('❌ Missing required fields:', { name: !!name, email: !!email, phone: !!phone, message: !!message });
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const formattedDate = new Date().toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });

    const { data, error } = await resend.emails.send({
      from: 'FemRide <noreply@notifications.femride.de>', // Using your verified domain
      to: ['info@femride.de'], // Always send to info@femride.de
      subject: language === 'de' ? 'Neue Fahrerbewerbung - FemRide' : 'New Driver Application - FemRide',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>FemRide Driver Application</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #fa9de3 0%, #a3adf4 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🚗 ${language === 'de' ? 'Neue Fahrerbewerbung' : 'New Driver Application'}</h1>
            <p style="color: white; margin: 10px 0 0 0; font-size: 16px;">FemRide - Sicher unterwegs</p>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">${language === 'de' ? 'Bewerbungsdetails' : 'Application Details'}</h2>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #333; margin-top: 0; font-size: 16px;">${language === 'de' ? 'Persönliche Informationen' : 'Personal Information'}</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666; width: 30%;">${language === 'de' ? 'Name:' : 'Name:'}</td>
                  <td style="padding: 8px 0; color: #333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">${language === 'de' ? 'E-Mail:' : 'Email:'}</td>
                  <td style="padding: 8px 0; color: #333;"><a href="mailto:${email}" style="color: #fa9de3; text-decoration: none;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #666;">${language === 'de' ? 'Telefon:' : 'Phone:'}</td>
                  <td style="padding: 8px 0; color: #333;"><a href="tel:${phone}" style="color: #fa9de3; text-decoration: none;">${phone}</a></td>
                </tr>
              </table>
            </div>

            <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #fa9de3;">
              <h3 style="color: #333; margin-top: 0; font-size: 16px;">${language === 'de' ? 'Nachricht' : 'Message'}</h3>
              <p style="color: #333; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>

            <div style="background: #fff3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border: 1px solid #ffeaa7;">
              <h3 style="color: #856404; margin-top: 0; font-size: 14px;">${language === 'de' ? '📋 Nächste Schritte' : '📋 Next Steps'}</h3>
              <ul style="margin: 10px 0; padding-left: 20px; color: #856404; font-size: 14px;">
                <li>${language === 'de' ? 'Bewerbung prüfen und bewerten' : 'Review and evaluate application'}</li>
                <li>${language === 'de' ? 'Kontakt mit Bewerberin aufnehmen' : 'Contact the applicant'}</li>
                <li>${language === 'de' ? 'Interview vereinbaren (falls geeignet)' : 'Schedule interview (if suitable)'}</li>
                <li>${language === 'de' ? 'Führerschein und Dokumente prüfen' : 'Verify license and documents'}</li>
              </ul>
            </div>
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            
            <p style="color: #666; font-size: 14px;">
              <strong>${language === 'de' ? 'Eingereicht am:' : 'Submitted on:'}</strong> ${formattedDate}<br>
              <strong>${language === 'de' ? 'Quelle:' : 'Source:'}</strong> FemRide Website - ${language === 'de' ? 'Fahrerbewerbungsformular' : 'Driver Application Form'}
            </p>
            
            <p style="color: #999; font-size: 12px; text-align: center; margin-top: 30px;">
              ${language === 'de' ? 'Diese E-Mail wurde automatisch über das FemRide-Bewerbungsformular gesendet.' : 'This email was automatically sent via the FemRide application form.'}
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
FemRide Driver Application

Personal Information:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}

Message:
${message}

Next Steps:
- Review and evaluate application
- Contact the applicant
- Schedule interview (if suitable)
- Verify license and documents

Submitted on: ${formattedDate}
Source: FemRide Website - Driver Application Form

This email was automatically sent via the FemRide application form.
      `
    });

    if (error) {
      console.error('❌ Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email', details: error });
    }

    console.log('✅ Driver application email sent successfully to info@femride.de with ID:', data?.id);
    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('❌ Server error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}
