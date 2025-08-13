import React from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const JobBanner = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleApplyClick = () => {
    navigate('/drive');
  };

  return (
    <div className="relative -mt-24 z-20">
      <div className="bg-gradient-to-r from-[#fa9de3] to-[#e989cc] py-12 px-6 shadow-2xl border-t-4 border-white/30">
        <div className="container mx-auto text-center">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-3 bg-white/25 backdrop-blur-sm rounded-full px-6 py-3 mb-6 border border-white/20">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="text-white font-bold text-base uppercase tracking-wider">
              {t('jobAdHeader')}
            </span>
          </div>

          {/* Job Header */}
          <div className="mb-8">
            <h3 className={`font-bold text-white leading-tight mb-3 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>
              {t('jobAdTitle')}
            </h3>
            <p className="text-pink-100 font-semibold text-lg mb-2">
              {t('jobAdOnlyWomen')}
            </p>
            <p className={`text-white/90 font-medium ${isMobile ? 'text-lg' : 'text-xl'}`}>
              {t('jobAdLocation')} • {t('jobAdType')} • {t('jobAdRequirement')}
            </p>
          </div>

          {/* Apply Button */}
          <Button
            onClick={handleApplyClick}
            className={`bg-white hover:bg-gray-100 text-[#fa9de3] font-bold rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden group border-2 border-white/50 ${
              isMobile ? 'px-10 py-5 text-lg' : 'px-16 py-6 text-xl'
            }`}
          >
            <span className="absolute inset-0 w-0 bg-gradient-to-r from-[#fa9de3] to-[#e989cc] transition-all duration-500 ease-out group-hover:w-full opacity-10 rounded-2xl"></span>
            <span className="relative flex items-center gap-2">
              {t('jobAdButton')}
              <div className="w-2 h-2 bg-[#fa9de3] rounded-full animate-pulse"></div>
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JobBanner;
