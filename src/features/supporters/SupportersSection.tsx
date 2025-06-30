import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

/**
 * SupportersSection component showcasing FemRide's partners and supporters
 * Designed to blend seamlessly with FemRide's design aesthetic
 */
const SupportersSection = () => {
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

  const baseSupporters = [
    {
      name: 'Veloxforce',
      logo: '/supporters/veloxforce-logo-text (1).svg',
      url: 'https://www.veloxforce.ai/',
      description: 'AI Automation Partner'
    },
    {
      name: 'JAM FM',
      logo: '/supporters/jam-fm-logo.svg',
      url: 'https://www.jam.fm/',
      description: 'Radio Partner'
    },
    {
      name: 'VALI ESMT',
      logo: '/supporters/vali-logo.png',
      url: 'https://esmt.berlin/faculty-research/ifee/vali-berlin',
      description: 'Innovation Partner'
    },
    {
      name: 'Space Shack',
      logo: '/supporters/space-shack-logo.png',
      url: 'https://www.space-shack.com/',
      description: 'Office Space Partner'
    },
    {
      name: 'Berlin Partner',
      logo: '/supporters/berlin-partner-logo.svg',
      url: 'https://www.berlin-partner.de/',
      description: 'Business Development Partner'
    },
    {
      name: 'IHK Berlin',
      logo: '/supporters/ihk-logo.svg',
      url: 'https://www.ihk.de/berlin/',
      description: 'Chamber of Commerce'
    },
    {
      name: 'EIT Urban Mobility',
      logo: '/supporters/eid.svg',
      url: 'https://www.eiturbanmobility.eu/',
      description: 'Mobility Innovation Partner'
    }
  ];

  // Create a long list by repeating the supporters 4 times
  const supporters = [
    ...baseSupporters,
    ...baseSupporters,
    ...baseSupporters,
    ...baseSupporters
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-12 md:py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
      id="supporters"
    >
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#fa9de3]/10 filter blur-[30px] animate-blob"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-[#a3adf4]/10 filter blur-[40px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-sm relative inline-block mb-3">
            {t('supportersTitle')}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-[#fa9de3]"></span>
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#222] mb-4">
            {t('supportersSubtitle')}
          </h2>
        </div>
        
        {/* Simple infinite carousel */}
        <div className={`relative overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="flex animate-scroll-simple">
            {/* Render the long supporters list (24 logos total) */}
            {supporters.map((supporter, index) => (
              <div
                key={`${supporter.name}-${index}`}
                className="flex-shrink-0 mx-4 md:mx-8"
              >
                <a
                  href={supporter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 md:p-8 rounded-xl md:rounded-2xl bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:border-[#fa9de3]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#fa9de3]/20 hover:scale-105 group"
                  title={`${supporter.name} - ${supporter.description}`}
                >
                  <div className="flex items-center justify-center h-16 w-24 md:h-24 md:w-40">
                    <img
                      src={supporter.logo}
                      alt={`${supporter.name} logo`}
                      className={`${
                        supporter.name === 'Veloxforce'
                          ? 'max-h-20 md:max-h-32'
                          : supporter.name === 'VALI ESMT'
                            ? 'max-h-14 md:max-h-24'
                            : 'max-h-12 md:max-h-20'
                      } max-w-full object-contain transition-all duration-300 group-hover:scale-110`}
                      loading="lazy"
                    />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;
