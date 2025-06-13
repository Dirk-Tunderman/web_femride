import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, UserCircle, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Enhanced contact section with improved design principles and email functionality
 */
const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare email data
      const emailData = {
        to: "info@femride.de",
        subject: `FemRide ${t('contactFormSubject')} ${formData.name}`,
        message: `
${t('contactFormName')}: ${formData.name}
${t('contactFormEmail')}: ${formData.email}
${t('contactFormPhone')}: ${formData.phone || t('contactFormPhoneNotSpecified')}

${t('contactFormMessageLabel')}:
${formData.message}
        `,
      };
      
      console.log('Sending email with data:', emailData);
      
      // This is a client-side only app, so we'll use mailto protocol to open the user's email client
      // In a real application with a backend, you would send this data to a server
      const mailtoLink = `mailto:${emailData.to}?subject=${encodeURIComponent(emailData.subject)}&body=${encodeURIComponent(emailData.message)}`;
      
      // Open the mailto link in a new window
      window.open(mailtoLink);
      
      // Show success message
      toast({
        title: t('contactSuccessTitle'),
        description: t('contactSuccessDesc'),
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('contactErrorTitle'),
        description: t('contactErrorDesc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
      id="contact"
    >
      {/* Background with gradients and decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#a3adf4]/90 via-[#a3adf4] to-[#a3adf4]/80 -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-white/10 filter blur-[50px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-white/5 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with animations */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-black font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            {t('contactHeader')}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
            {t('contactTitle')}
          </h2>
          <div className="w-24 h-1 bg-[#fa9de3] mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg text-black">
              {t('contactText1')}<br />
              {t('contactText2')}<br />
              {t('contactText3')}<br />
              {t('contactText4')}<br />
              {t('contactText5')}
            </p>
          </div>
        </div>

        {/* Contact form with animation - Updated with more rounded corners */}
        <div 
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/30 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-black/5"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <UserCircle className="text-black/70" size={18} />
                    <Label htmlFor="name" className="text-black font-medium">{t('contactNameLabel')}</Label>
                  </div>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/30 border-white/30 text-black placeholder:text-black/50 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 h-12 rounded-2xl"
                    placeholder={t('contactNamePlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="text-black/70" size={18} />
                    <Label htmlFor="email" className="text-black font-medium">{t('contactEmailLabel')}</Label>
                  </div>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/30 border-white/30 text-black placeholder:text-black/50 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 h-12 rounded-2xl"
                    placeholder={t('contactEmailPlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="text-black/70" size={18} />
                    <Label htmlFor="phone" className="text-black font-medium">{t('contactPhoneLabel')}</Label>
                  </div>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/30 border-white/30 text-black placeholder:text-black/50 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 h-12 rounded-2xl"
                    placeholder={t('contactPhonePlaceholder')}
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-black/70" size={18} />
                    <Label htmlFor="message" className="text-black font-medium">{t('contactMessageLabel')}</Label>
                  </div>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/30 border-white/30 text-black placeholder:text-black/50 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 resize-none rounded-2xl"
                    placeholder={t('contactMessagePlaceholder')}
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black py-6 rounded-3xl font-medium text-base shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? t('contactSubmitting') : t('contactSubmitButton')}
                    <Send size={18} className={`transition-transform ${isSubmitting ? 'translate-x-2' : ''}`} />
                  </span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
