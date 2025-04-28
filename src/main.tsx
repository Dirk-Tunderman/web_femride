import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './lib/emailjs'

// Initialize EmailJS at application startup
initEmailJS();

// Log environment variables for debugging
console.log('Environment variables at application startup:');
console.log('Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
console.log('Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
console.log('Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);

createRoot(document.getElementById("root")!).render(<App />);
