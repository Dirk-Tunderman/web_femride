import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  console.log('Testing email delivery...');
  console.log('API Key configured:', !!process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: 'FemRide Test <noreply@notifications.femride.de>',
      to: ['team@veloxforce.ai'], // Test external email
      subject: 'Test Email - Please Check Spam Folder',
      html: `
        <h1>Test Email</h1>
        <p>This is a test email to check deliverability.</p>
        <p><strong>Please check your spam/junk folder if you don't see this in your inbox.</strong></p>
        <p>Time sent: ${new Date().toISOString()}</p>
      `,
      text: `
        Test Email

        This is a test email to check deliverability.
        Please check your spam/junk folder if you don't see this in your inbox.

        Time sent: ${new Date().toISOString()}
      `
    });

    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent successfully!');
      console.log('Email ID:', data.id);
      console.log('Check your inbox and spam folder for team@veloxforce.ai');
    }
  } catch (err) {
    console.error('Unexpected error:', err);
  }
}

testEmail();
