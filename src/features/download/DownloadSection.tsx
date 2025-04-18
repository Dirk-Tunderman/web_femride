
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { Badge } from "@/components/ui/badge";
import { Bell } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const DownloadSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  const isMobile = useIsMobile();

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
      className="py-20 bg-black relative" 
      id="download"
    >
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Enhanced header with larger title */}
        <div className={`text-center transition-all duration-700 mb-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            {t('downloadSectionTitle')}
          </h2>
          
          {/* Larger gradient accent line */}
          <div className="w-28 h-2 bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] mx-auto mt-4 mb-8"></div>
          
          {/* More prominent Coming Soon Announcement */}
          <div className="bg-gray-900 rounded-xl py-5 px-6 max-w-md mx-auto mb-10 shadow-lg border border-gray-800">
            <div className="flex items-center justify-center">
              <Bell size={22} className="text-[#fa9de3] mr-3" />
              <p className="text-xl font-medium text-white">{t('downloadSectionSoon')}</p>
            </div>
            <p className="mt-3 text-gray-300">{t('downloadSectionNotify')}</p>
          </div>
        </div>

        {/* Enlarged app store buttons with clearer "coming soon" badges */}
        <div className={`flex justify-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-6 max-w-lg mx-auto`}>
            <div className="relative">
              <div className={`border border-gray-700 rounded-2xl px-6 ${isMobile ? 'py-4' : 'py-6'} flex items-center gap-3 bg-gray-900 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all`}>
                <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "30"} height={isMobile ? "24" : "30"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#fa9de3]">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-[#fa9de3] font-medium`}>{t('downloadOn')}</span>
                  <span className={`font-semibold ${isMobile ? 'text-base' : 'text-lg'} text-white`}>App Store</span>
                </div>
              </div>
              <Badge className={`absolute -top-3 -right-3 bg-[#fa9de3] hover:bg-[#fa9de3] font-bold text-black ${isMobile ? 'text-xs px-3 py-1' : 'text-sm px-4 py-1.5'} shadow-xl`}>
                {t('downloadSectionSoon')}
              </Badge>
            </div>
            
            <div className="relative">
              <div className={`border border-gray-700 rounded-2xl px-6 ${isMobile ? 'py-4' : 'py-6'} flex items-center gap-3 bg-gray-900 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all`}>
                <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} flex items-center justify-center`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "24" : "30"} height={isMobile ? "24" : "30"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#a3adf4]">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                  </svg>
                </div>
                <div className="flex flex-col items-start">
                  <span className={`${isMobile ? 'text-xs' : 'text-sm'} text-[#a3adf4] font-medium`}>{t('getItOn')}</span>
                  <span className={`font-semibold ${isMobile ? 'text-base' : 'text-lg'} text-white`}>Google Play</span>
                </div>
              </div>
              <Badge className={`absolute -top-3 -right-3 bg-[#a3adf4] hover:bg-[#a3adf4] font-bold text-black ${isMobile ? 'text-xs px-3 py-1' : 'text-sm px-4 py-1.5'} shadow-xl`}>
                {t('downloadSectionSoon')}
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
