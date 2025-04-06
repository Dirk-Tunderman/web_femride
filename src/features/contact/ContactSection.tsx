
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Send, UserCircle, Mail, Phone, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

/**
 * Enhanced contact section with improved design principles and email functionality
 */
const ContactSection = () => {
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
        subject: `FemRide Kontaktanfrage von ${formData.name}`,
        message: `
Name: ${formData.name}
Email: ${formData.email}
Telefon: ${formData.phone || 'Nicht angegeben'}

Nachricht:
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
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns umgehend bei Ihnen melden.",
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
        title: "Fehler beim Senden",
        description: "Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es später erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden bg-[#a3adf4]/20" 
      id="contact-section"
    >
      {/* Background with gradients and decorations - changed to blue like JOIN US section */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#a3adf4]/20 -z-10"></div>
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#a3adf4]/10 filter blur-[60px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#fa9de3]/10 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with animations */}
        <div className={`text-center mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            KONTAKT
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#222] mb-6">
            Interessiert an einer Zusammenarbeit mit FemRide?
          </h2>
          <div className="w-24 h-1 bg-[#fa9de3] mx-auto mb-8"></div>
          <div className="max-w-3xl mx-auto text-center mb-8">
            <p className="text-lg text-gray-700">
              Sie sind Flottenunternehmer und möchten Ihre Fahrzeuge über FemRide einsetzen?<br />
              Sie sind Fahrerin und möchten Teil unserer Plattform werden?<br />
              Oder Sie möchten mit uns kooperieren, weil Sie unsere Vision teilen?<br />
              Dann kontaktieren Sie uns über das Formular – wir melden uns umgehend bei Ihnen!<br />
              Wir freuen uns darauf, gemeinsam Mobilität sicherer und fairer zu gestalten.
            </p>
          </div>
        </div>

        {/* Contact form with animation - Updated with darker form background */}
        <div 
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-black/10 relative overflow-hidden">
            {/* Subtle pattern overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-y-0 left-0 w-1/2 bg-black/5"></div>
            </div>
            
            <form onSubmit={handleSubmit} className="relative z-10">
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <UserCircle className="text-gray-700" size={18} />
                    <Label htmlFor="name" className="text-gray-700 font-medium">Name</Label>
                  </div>
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/70 border-black/10 text-gray-800 placeholder:text-gray-500 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 h-12 rounded-2xl"
                    placeholder="Ihr vollständiger Name"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="text-gray-700" size={18} />
                    <Label htmlFor="email" className="text-gray-700 font-medium">Email</Label>
                  </div>
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/70 border-black/10 text-gray-800 placeholder:text-gray-500 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 h-12 rounded-2xl"
                    placeholder="Ihre Email-Adresse"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Phone className="text-gray-700" size={18} />
                    <Label htmlFor="phone" className="text-gray-700 font-medium">Phone</Label>
                  </div>
                  <Input 
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/70 border-black/10 text-gray-800 placeholder:text-gray-500 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 h-12 rounded-2xl"
                    placeholder="Ihre Telefonnummer (optional)"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="text-gray-700" size={18} />
                    <Label htmlFor="message" className="text-gray-700 font-medium">Message</Label>
                  </div>
                  <Textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/70 border-black/10 text-gray-800 placeholder:text-gray-500 focus:border-[#fa9de3] focus:ring-[#fa9de3]/20 resize-none rounded-2xl"
                    placeholder="Ihre Nachricht an uns..."
                  />
                </div>

                <Button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#fa9de3] hover:bg-[#e989cc] text-black py-6 rounded-3xl font-medium text-base shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02] relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20"></span>
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? 'Wird gesendet...' : 'Absenden'}
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
