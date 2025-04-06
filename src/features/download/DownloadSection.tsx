
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { AppWindow, Smartphone, Download } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Enhanced DownloadSection component with modern design elements
 * and improved visual hierarchy based on Refactoring UI principles
 */
const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

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

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-black text-white relative overflow-hidden" 
      id="download"
    >
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-10 w-64 h-64 bg-[#fa9de3]/10 rounded-full filter blur-[80px] animate-blob"></div>
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#a3adf4]/10 rounded-full filter blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-400">
            Laden Sie unsere App herunter
          </h2>
          <p className="text-lg text-gray-300 inline-block relative">
            Bald im Google Play & App Store verfügbar
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] rounded-full transform scale-x-0 transition-transform duration-700 ease-out" style={{
              transform: isVisible ? 'scaleX(1)' : 'scaleX(0)'
            }}></span>
          </p>
        </div>

        {/* App showcase card with dark border */}
        <div className={`relative max-w-4xl mx-auto rounded-3xl border border-gray-800 bg-black/60 backdrop-blur-sm overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="py-16 px-8 md:px-12">
            {/* Card Content */}
            <div className="flex flex-col items-center text-center">
              {/* Title and subtitle */}
              <h3 className="text-4xl font-bold mb-2">
                Laden Sie unsere App herunter
              </h3>
              <div className="w-64 h-1 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] rounded-full mb-6"></div>
              <p className="text-sm text-gray-400 mb-10">
                Bald im Google Play & App Store verfügbar
              </p>
              
              {/* Main content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center w-full">
                {/* Left side - App Logo */}
                <div className="flex justify-center">
                  <div className="relative w-52 h-52 transition-all duration-700 transform hover:scale-105">
                    <img 
                      src="/lovable-uploads/39f89848-f068-477a-a4d4-127257806949.png" 
                      alt="FemRide App Logo" 
                      className="w-full h-full object-contain drop-shadow-[0_0_30px_rgba(250,157,227,0.3)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#fa9de3]/10 to-[#a3adf4]/10 rounded-full filter blur-[20px] -z-10"></div>
                  </div>
                </div>
                
                {/* Right side - Content */}
                <div className="text-center md:text-left space-y-6">
                  <h4 className="text-2xl md:text-3xl font-bold">
                    Die schnelle, kostengünstige Art zu fahren.
                  </h4>
                  
                  <p className="text-gray-300">
                    Verfügbar für iOS und Android Geräte.
                  </p>
                  
                  {/* App Store buttons */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-8">
                    <div className="relative group">
                      <Button 
                        className="bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium px-6 py-5 text-sm group-hover:shadow-[0_0_25px_rgba(250,157,227,0.3)] transition-all duration-300 flex items-center gap-3 border border-gray-700 opacity-90 pointer-events-none"
                      >
                        <AppWindow size={20} />
                        <span className="flex flex-col items-start">
                          <span className="text-xs opacity-80">Laden im</span>
                          <span className="font-bold">App Store</span>
                        </span>
                      </Button>
                      <div className="absolute -top-2 -right-2 bg-[#fa9de3] text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                        Bald
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <Button 
                        className="bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-medium px-6 py-5 text-sm group-hover:shadow-[0_0_25px_rgba(163,173,244,0.3)] transition-all duration-300 flex items-center gap-3 border border-gray-700 opacity-90 pointer-events-none"
                      >
                        <Smartphone size={20} />
                        <span className="flex flex-col items-start">
                          <span className="text-xs opacity-80">Jetzt bei</span>
                          <span className="font-bold">Google Play</span>
                        </span>
                      </Button>
                      <div className="absolute -top-2 -right-2 bg-[#a3adf4] text-black text-xs font-bold px-2 py-0.5 rounded-full shadow-lg">
                        Bald
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Notification feature callout */}
              <div className="mt-10 bg-black/40 backdrop-blur-sm rounded-xl p-4 border border-gray-800 flex items-center gap-3 max-w-md mx-auto">
                <Download size={18} className="text-[#fa9de3]" />
                <p className="text-sm text-gray-300">
                  Lassen Sie sich benachrichtigen, wenn unsere App zum Download verfügbar ist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
