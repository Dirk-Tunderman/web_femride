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

interface DriverApplication {
  name: string;
  age: string;
  email: string;
  phone: string;
  experience: string;
  reason: string;
}

const DrivePage = () => {
  useScrollTop();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<DriverApplication>({
    name: "",
    age: "",
    email: "",
    phone: "",
    experience: "",
    reason: "",
  });

  const sendEmail = async (data: DriverApplication) => {
    const formattedDate = new Date().toLocaleDateString(language === 'de' ? 'de-DE' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    const templateParams = {
      to_email: "info@femride.de",
      from_name: data.name,
      from_email: data.email,
      subject: `${t('driverApplicationEmailSubject')} - ${data.name}`,
      message: `
=== FEMRIDE DRIVER APPLICATION ===
${formattedDate}

Personal Information:
-------------------
Name: ${data.name}
Age: ${data.age}
Email: ${data.email}
Phone: ${data.phone}

Professional Experience:
---------------------
${data.experience}

Motivation to Join FemRide:
------------------------
${data.reason}

-------------------
This is a DRIVER APPLICATION submitted through the FemRide Driver Application Form.

Action Required:
- Review driver qualifications
- Verify age requirement (21+)
- Check driving experience
- Schedule initial interview

Contact Details for Follow-up:
- Email: ${data.email}
- Phone: ${data.phone}
      `,
    };

    return emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail(formData);

      toast({
        title: t('driverApplicationSuccessTitle'),
        description: t('driverApplicationSuccessDesc'),
      });

      // Reset form
      setFormData({
        name: "",
        age: "",
        email: "",
        phone: "",
        experience: "",
        reason: "",
      });
    } catch (error) {
      console.error('Email sending failed:', error);
      toast({
        title: t('driverApplicationErrorTitle'),
        description: t('driverApplicationErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#fa9de3]/10 to-[#a3adf4]/20">
      <Navbar />

      {/* Back button - positioned and styled */}
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
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('driverFormNameLabel')}
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder={t('driverFormNamePlaceholder')}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                {t('driverFormAgeLabel')}
              </label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder={t('driverFormAgePlaceholder')}
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('driverFormEmailLabel')}
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder={t('driverFormEmailPlaceholder')}
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                {t('driverFormPhoneLabel')}
              </label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                placeholder={t('driverFormPhonePlaceholder')}
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                {t('driverFormExperienceLabel')}
              </label>
              <Textarea
                id="experience"
                name="experience"
                placeholder={t('driverFormExperiencePlaceholder')}
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                required
                rows={4}
              />
            </div>

            <div>
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                {t('driverFormReasonLabel')}
              </label>
              <Textarea
                id="reason"
                name="reason"
                placeholder={t('driverFormReasonPlaceholder')}
                value={formData.reason}
                onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                required
                rows={4}
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