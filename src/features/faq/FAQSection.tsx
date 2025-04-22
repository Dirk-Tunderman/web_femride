import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from "@/lib/LanguageContext";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

/**
 * FAQ section with categories for different user types
 * Modified to ensure consistent text alignment for answers (left-aligned)
 */
const FAQSection = () => {
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

  const faqCategories = [
    {
      id: "passengers",
      title: t('faqCategoryPassengers'),
      description: t('faqPassengerA1'),
      path: "/faq/passengers",
      image: "/lovable-uploads/577109eb-1080-4502-98b2-23f2f98dc25f.png"
    },
    {
      id: "drivers",
      title: t('faqCategoryDrivers'),
      description: t('faqDriverA1'),
      path: "/faq/drivers",
      image: "/lovable-uploads/1115ff08-742b-47e1-a06b-be2290d5abb9.png"
    },
    {
      id: "fleet",
      title: t('faqCategoryFleet'),
      description: t('faqFleetA1'),
      path: "/faq/fleet",
      image: "/lovable-uploads/522eabb7-70e9-4879-a6c3-9d8dcbfb2471.png"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      id="faq" 
      className="py-20 bg-gradient-to-b from-white via-[#fa9de3]/10 to-[#a3adf4]/20"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('faqMainTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('faqMainDesc')}
          </p>
        </div>

        {/* FAQ Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {faqCategories.map((category, index) => (
            <div
              key={category.id}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div 
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer group"
                onClick={() => navigate(category.path)}
              >
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <div className="flex items-center text-[#fa9de3] font-semibold group-hover:text-[#e989cc]">
                    <span>{t('viewAllFAQs')}</span>
                    <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
