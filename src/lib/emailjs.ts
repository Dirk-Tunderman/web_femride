import emailjs from '@emailjs/browser';

// Initialize EmailJS at the application level
export const initEmailJS = () => {
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  
  if (!publicKey) {
    console.error('EmailJS public key is missing. Email functionality will not work.');
    return false;
  }
  
  try {
    emailjs.init({ publicKey });
    console.log('EmailJS initialized successfully');
    return true;
  } catch (error) {
    console.error('Failed to initialize EmailJS:', error);
    return false;
  }
};

// Helper function to send emails
export const sendEmail = async (
  serviceId: string,
  templateId: string,
  templateParams: Record<string, unknown>
) => {
  if (!serviceId || !templateId) {
    throw new Error('EmailJS service ID or template ID is missing');
  }
  
  try {
    return await emailjs.send(serviceId, templateId, templateParams);
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};
