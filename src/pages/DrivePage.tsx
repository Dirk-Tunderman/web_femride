import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/shared/Navbar";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface DriverApplication {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const DrivePage = () => {
  useScrollTop();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<DriverApplication>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const sendDriverEmail = async (data: DriverApplication) => {
    try {
      // Determine the correct API endpoint based on environment
      const getApiUrl = () => {
        const currentHost = window.location.host;

        if (currentHost.includes('femride.de')) {
          // Production domain - use Vercel API route
          return '/api/send-driver-application';
        } else if (currentHost.includes('localhost')) {
          // Local development - use Express server on port 3001
          return 'http://localhost:3001/api/send-driver-application';
        } else {
          // Default fallback - try Vercel API route first
          return '/api/send-driver-application';
        }
      };

      const apiUrl = getApiUrl();
      console.log('🌐 Using API URL:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
          language: language
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('❌ API error:', response.status, errorText);

        // If API route fails, fallback to EmailJS
        console.log('🔄 Falling back to EmailJS...');
        return await sendDriverEmailViaEmailJS(data);
      }

      const result = await response.json();
      console.log('✅ Driver application sent successfully via Resend:', result);
      return true;
    } catch (error) {
      console.error("❌ Resend API failed, falling back to EmailJS:", error);
      // Fallback to EmailJS if Resend fails
      return await sendDriverEmailViaEmailJS(data);
    }
  };

  // Fallback function using EmailJS (same as before)
  const sendDriverEmailViaEmailJS = async (data: DriverApplication) => {
    try {
      const { sendEmail } = await import("@/lib/emailjs");

      const templateParams = {
        to_email: "info@femride.de",
        from_name: data.name,
        from_email: data.email,
        subject: t('driverApplicationEmailSubject'),
        message: `
Driver Application Details:

Personal Information:
- Name: ${data.name}
- Email: ${data.email}
- Phone: ${data.phone}

Message:
${data.message}

This application was submitted through the FemRide Driver Application Form.
Date: ${new Date().toLocaleDateString(language === "de" ? "de-DE" : "en-US")}
        `.trim(),
      };

      await sendEmail(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      console.log('✅ Driver application sent successfully via EmailJS fallback');
      return true;
    } catch (error) {
      console.error("❌ EmailJS fallback also failed:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendDriverEmail(formData);
      if (success) {
        toast({
          title: t('driverApplicationSuccessTitle'),
          description: t('driverApplicationSuccessDesc'),
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast({
          title: t('driverApplicationErrorTitle'),
          description: t('driverApplicationErrorDesc'),
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission failed:", error);
      toast({
        title: t('driverApplicationErrorTitle'),
        description: t('driverApplicationErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fa9de3]/10 to-[#a3adf4]/20">
      <Navbar />

      {/* Back button */}
      <div className="container mx-auto px-4 py-6">
        <Button
          onClick={() => navigate('/')}
          variant="outline"
          className="flex items-center gap-2 text-gray-600 hover:text-[#fa9de3] transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          {t('backToHome')}
        </Button>
      </div>

      {/* Header Section */}
      <div className="pt-6 pb-10 text-center">
        <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
          {t('forDrivers')}
          <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
        </p>
        <h1 className="text-4xl md:text-5xl font-bold text-[#222] mb-6">
          {t('becomeDriver')}
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg px-4">
          {t('drivePageDesc')}
        </p>
      </div>

      {/* Application Form */}
      <div className="max-w-2xl mx-auto px-4 pb-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                {t('driverFormNameLabel')}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t('driverFormNamePlaceholder')}
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                {t('driverFormEmailLabel')}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('driverFormEmailPlaceholder')}
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                {t('driverFormPhoneLabel')}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t('driverFormPhonePlaceholder')}
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                {t('driverFormMessageLabel')}
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder={t('driverFormMessagePlaceholder')}
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black font-semibold py-4 h-auto"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('driverFormSubmitting') : t('driverFormSubmit')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DrivePage;