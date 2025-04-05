
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

/**
 * Enhanced Hero section component for the landing page
 * With animations and improved visual hierarchy
 */
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <main className="container mx-auto px-4 flex flex-col items-center justify-center mt-32 md:mt-40 min-h-[80vh] relative">
      {/* Background gradient */}
      <div className="absolute -z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] rounded-full bg-gradient-to-r from-[#fa9de3]/20 to-[#a3adf4]/20 filter blur-[80px]" />
      
      {/* Brand tag */}
      <div 
        className={`bg-white/70 backdrop-blur-sm border border-pink-200 rounded-full px-6 py-2 shadow-md transform transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
      >
        <p className="text-[#fa9de3] font-bold text-lg">{t('heroTagline')}</p>
      </div>
      
      {/* Headline with staggered animation */}
      <h1 
        className={`text-5xl md:text-7xl font-bold text-center text-[#222] mt-8 max-w-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <span className="block relative overflow-hidden">
          <span className="block transform transition-transform duration-1000 delay-100 ease-out" style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
          }}>
            {t('heroTitle1')}
          </span>
        </span>
        <span className="block relative overflow-hidden mt-2">
          <span className="block transform transition-transform duration-1000 delay-300 ease-out" style={{
            transform: isVisible ? 'translateY(0)' : 'translateY(100%)'
          }}>
            {t('heroTitle2')}
          </span>
        </span>
      </h1>
      
      {/* Subheadline */}
      <p 
        className={`text-xl md:text-2xl text-gray-600 mt-12 text-center max-w-2xl transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        {t('heroSubtitle')}
      </p>
      
      {/* Call to action */}
      <div 
        className={`flex flex-col items-center mt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      >
        <Button 
          className="px-8 py-6 text-lg bg-[#fa9de3] hover:bg-[#e989cc] text-black rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
        >
          <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20"></span>
          <span className="relative">{t('heroButton')}</span>
        </Button>
        <p className="text-lg text-[#fa9de3] font-medium mt-3 animate-pulse">
          {t('heroComingSoon')}
        </p>
      </div>
      
      {/* Optional decorative elements */}
      <div className="absolute bottom-10 left-5 md:left-20 w-20 h-20 rounded-full bg-[#a3adf4]/20 filter blur-lg animate-blob"></div>
      <div className="absolute top-20 right-5 md:right-20 w-32 h-32 rounded-full bg-[#fa9de3]/20 filter blur-lg animate-blob animation-delay-2000"></div>
    </main>
  );
};

export default HeroSection;
