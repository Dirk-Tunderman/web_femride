import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/LanguageContext";
import { useNavigate } from "react-router-dom";

/**
 * LatestFeaturesSection component highlighting driver and fleet partner opportunities
 * Enhanced with animations and scroll-triggered effects
 */
const LatestFeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const navigate = useNavigate();

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
    <section id="features" ref={sectionRef} className="py-20 relative overflow-hidden bg-[#a3adf4]/20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-[#a3adf4]/20 -z-10"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#a3adf4]/10 filter blur-[60px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#fa9de3]/10 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header with consistent styling */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#a3adf4] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            {t('joinUsSectionHeader')}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#a3adf4]"></span>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#222] mb-8">
            {t('joinUsSectionTitle')}
          </h2>
          <div className="w-24 h-1 bg-[#a3adf4] mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-4">
            {t('joinUsSectionSubtitle')}
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('joinUsSectionDescription')}
          </p>
        </div>
        
        <div 
          className={`mb-16 text-center transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <div className="bg-black rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.01] hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="p-8">
              <h3 className="text-white text-2xl font-bold mb-4">{t('latestFeaturesSectionTitle')}</h3>
              <p className="text-white/80 max-w-3xl mx-auto mb-6">
                {t('latestFeaturesSectionText')}
              </p>
            </div>
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
              <img 
                src="/lovable-uploads/a7d735bf-4c68-4fc9-8947-390ccc1051ee.png"
                alt="Woman booking a ride in advance on laptop"
                className="w-full max-h-[500px] object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
        
        {/* Two columns section with consistent card styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* For Drivers */}
          <div 
            className={`bg-white/50 backdrop-blur-sm p-8 rounded-3xl text-left shadow-lg border border-[#a3adf4]/20 transition-all duration-700 delay-400 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            } hover:shadow-xl hover:bg-white/60`}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#222]">{t('forFemaleDrivers')}</h3>
            <p className="text-lg mb-6 text-gray-700">
              {t('forFemaleDriversDesc')}
            </p>
            <Button 
              className="bg-[#a3adf4] hover:bg-[#8a93d6] text-black font-medium px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group rounded-3xl"
              onClick={() => navigate('/drive')}
            >
              <span className="relative z-10">{t('forFemaleDriversButton')}</span>
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20 rounded-3xl"></span>
            </Button>
          </div>
          
          {/* For Fleet Partners */}
          <div 
            className={`bg-white/50 backdrop-blur-sm p-8 rounded-3xl text-left shadow-lg border border-[#a3adf4]/20 transition-all duration-700 delay-600 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            } hover:shadow-xl hover:bg-white/60`}
          >
            <h3 className="text-2xl font-bold mb-4 text-[#222]">{t('forFleetOperators')}</h3>
            <p className="text-lg mb-6 text-gray-700">
              {t('forFleetOperatorsDesc')}
            </p>
            <Button 
              className="bg-[#a3adf4] hover:bg-[#8a93d6] text-black font-medium px-6 py-4 shadow-md hover:shadow-lg transition-all duration-300 hover:translate-y-[-2px] group rounded-3xl"
              onClick={() => navigate('/fleet')}
            >
              <span className="relative z-10">{t('forFleetOperatorsButton')}</span>
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20 rounded-3xl"></span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestFeaturesSection;
