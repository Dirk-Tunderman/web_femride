import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import emailjs from '@emailjs/browser';
import Navbar from "@/shared/Navbar";
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useScrollTop } from "@/hooks/use-scroll-top";

interface FleetApplication {
  contactPerson: string;
  companyName: string;
  email: string;
  phone: string;
  fleetSize: string;
  message: string;
}

const FleetPage = () => {
  useScrollTop();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FleetApplication>({
    contactPerson: "",
    companyName: "",
    email: "",
    phone: "",
    fleetSize: "",
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

  const sendEmail = async (data: FleetApplication) => {
    const templateParams = {
      to_email: import.meta.env.VITE_ADMIN_EMAIL || "info@femride.de",
      from_name: data.contactPerson,
      from_email: data.email,
      subject: t('fleetApplicationEmailSubject'),
      message: `
Fleet Partnership Application Details:

Company Information:
- Contact Person: ${data.contactPerson}
- Company Name: ${data.companyName}
- Business Email: ${data.email}
- Contact Phone: ${data.phone}

Fleet Details:
- Current Fleet Size: ${data.fleetSize}
- Additional Information: ${data.message}

This application was submitted through the FemRide Fleet Partnership Application Form.
Date: ${new Date().toLocaleDateString(language === "de" ? "de-DE" : "en-US")}
      `.trim(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      return true;
    } catch (error) {
      console.error("Email sending failed:", error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await sendEmail(formData);
      if (success) {
        toast({
          title: t('fleetFormSuccessTitle'),
          description: t('fleetFormSuccessMessage'),
        });
        setFormData({
          contactPerson: "",
          companyName: "",
          email: "",
          phone: "",
          fleetSize: "",
          message: "",
        });
      } else {
        throw new Error("Email sending failed");
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: t('fleetFormErrorTitle'),
        description: t('fleetFormErrorMessage'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />
      <div className="container mx-auto px-4 pb-20">
        <Button
          variant="ghost"
          className="mb-8 flex items-center gap-2"
          onClick={() => navigate(-1)}
        >
          <ChevronLeft className="h-4 w-4" />
          {t('backButton')}
        </Button>

        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            {t('fleetFormTitle')}
          </h1>
          <p className="mb-8 text-lg text-gray-600">{t('fleetFormDesc')}</p>

          <div className="rounded-lg bg-white/80 p-8 shadow-lg backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information Section */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  {t('fleetFormContactPersonLabel')}
                </h2>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="contactPerson" className="text-sm font-medium text-gray-900">
                      {t('fleetFormContactPersonLabel')}
                    </label>
                    <Input
                      id="contactPerson"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleInputChange}
                      placeholder={t('fleetFormContactPersonPlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="companyName" className="text-sm font-medium text-gray-900">
                      {t('fleetFormCompanyLabel')}
                    </label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      placeholder={t('fleetFormCompanyPlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      {t('fleetFormBusinessEmailLabel')}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder={t('fleetFormBusinessEmailPlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                      {t('fleetFormPhoneLabel')}
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t('fleetFormPhonePlaceholder')}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Fleet Details Section */}
              <div>
                <h2 className="mb-4 text-xl font-semibold text-gray-900">
                  {t('fleetFormFleetSizeLabel')}
                </h2>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="fleetSize" className="text-sm font-medium text-gray-900">
                      {t('fleetFormFleetSizeLabel')}
                    </label>
                    <Input
                      id="fleetSize"
                      name="fleetSize"
                      value={formData.fleetSize}
                      onChange={handleInputChange}
                      placeholder={t('fleetFormFleetSizePlaceholder')}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-gray-900">
                      {t('fleetFormMessageLabel')}
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder={t('fleetFormMessagePlaceholder')}
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full transition-transform hover:scale-[1.02]"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('fleetFormSubmitting') : t('fleetFormSubmitButton')}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FleetPage;