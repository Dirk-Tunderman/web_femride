import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Users, Heart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Team section showcasing FemRide's team members and mission
 * Includes mission statement, team member profiles, and join us section
 */
const TeamSection = () => {
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

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Aykut Atli",
      title: t('teamAykutTitle'),
      description: t('teamAykutDesc'),
      funFact: t('teamAykutFun'),
      image: "/lovable-uploads/aykut_teamsec_2.png",
      alt: "Aykut Atli - Founder & CEO"
    },
    {
      id: 2,
      name: "Dr. Kerstin Wendt",
      title: t('teamKerstinTitle'),
      description: t('teamKerstinDesc'),
      funFact: t('teamKerstinFun'),
      image: "/lovable-uploads/kerstin_teamsec.jpg",
      alt: "Dr. Kerstin Wendt - Co-Founder & COO"
    },
    {
      id: 3,
      name: "David Eberle",
      title: t('teamDavidTitle'),
      description: t('teamDavidDesc'),
      funFact: t('teamDavidFun'),
      image: "/lovable-uploads/david_teamsec.jpg",
      alt: "David Eberle - Operations Manager"
    }
  ];

  return (
    <section 
      ref={sectionRef} 
      className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#f9f9fa]"
      id="team"
    >
      {/* Decorative background elements */}
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-[#fa9de3]/5 filter blur-[60px] animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-[#a3adf4]/5 filter blur-[70px] animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-[#fa9de3] font-medium tracking-wide uppercase text-base relative inline-block mb-3">
            {t('sectionOurTeam')}
            <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-[#fa9de3]"></span>
          </p>
          <h2 className="text-4xl md:text-6xl font-bold text-[#222] mb-8">
            {t('teamMainTitle')}
          </h2>
          <div className="w-24 h-1 bg-[#fa9de3] mx-auto mb-8"></div>
        </div>

        {/* Mission statement */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-[#fa9de3]/20 shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-[#fa9de3] flex items-center justify-center flex-shrink-0">
                <Heart size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#222] mb-4">{t('teamMissionTitle')}</h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  {t('teamMissionText1')}
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('teamMissionText2')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team members grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-700 transform flex flex-col h-full ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-20'
              } hover:-translate-y-2`}
              style={{ transitionDelay: `${400 + (200 * index)}ms` }}
            >
              {/* Member photo */}
              <div className="relative h-80 overflow-hidden flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.alt}
                  className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${
                    member.name === 'Aykut Atli' ? 'object-[center_30%]' : 'object-top'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Member info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#222] mb-2">{member.name}</h3>
                <p className="text-[#fa9de3] font-semibold mb-4">{member.title}</p>
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  {member.description}
                </p>
                <div className="bg-[#fa9de3]/10 rounded-2xl p-4 mt-auto">
                  <p className="text-xs font-semibold text-[#fa9de3] mb-2">Fun Fact:</p>
                  <p className="text-sm text-gray-700 italic">
                    {member.funFact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join our team section */}
        <div className={`transition-all duration-700 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-[#fa9de3]/20 to-[#a3adf4]/20 rounded-3xl border border-[#fa9de3]/30 shadow-lg p-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-[#fa9de3] flex items-center justify-center">
                <Users size={32} className="text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-[#222] mb-4">{t('teamJoinTitle')}</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              {t('teamJoinDesc1')}
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              {t('teamJoinDesc2')}
            </p>
            <Button
              className={`px-8 py-6 ${isMobile ? 'text-sm' : 'text-lg'} bg-[#fa9de3] hover:bg-[#e989cc] text-black rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group`}
              onClick={() => {
                // Navigate to support section and update hash
                window.location.hash = 'support';
                const supportSection = document.getElementById('support');
                if (supportSection) {
                  supportSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full opacity-20 rounded-3xl"></span>
              <span className="relative flex items-center gap-2">
                <Mail size={20} />
                {t('teamJoinButton')}
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
