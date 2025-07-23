import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, MapPin, Mail, Globe } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useLanguage } from '@/lib/LanguageContext';

export const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const isGerman = language === 'de';
  
  return (
    <footer className="bg-[#1A1F2C] text-white text-left">
      <div className="container mx-auto px-4 py-16">
        {/* Main navigation links */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/1c4c3713-8362-4f14-b80e-d0163d28bb8f.png" 
              alt="FemRide Logo" 
              className="h-12"
            />
          </div>
          
          <div className="flex flex-wrap justify-start gap-6 md:gap-10">
            <Link to="/terms-conditions" className="text-gray-300 hover:text-[#fa9de3] transition-colors">
              {t('footerTerms')}
            </Link>
            <Link to="/privacy-policy" className="text-gray-300 hover:text-[#fa9de3] transition-colors">
              {t('footerPrivacy')}
            </Link>
            <Link to="/impressum" className="text-gray-300 hover:text-[#fa9de3] transition-colors">
              {t('footerImpressum')}
            </Link>
          </div>
        </div>
        
        <Separator className="bg-gray-800" />
        
        {/* Three-column content section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
          {/* Company info column */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-6">{isGerman ? 'Unternehmen' : 'Company'}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#fa9de3] mt-1" />
                <p className="text-gray-300">Waldstraße 222A, 12527 Berlin</p>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#fa9de3] mt-1" />
                <a href="mailto:info@femride.de" className="text-[#fa9de3] hover:underline">
                  info@femride.de
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Globe size={18} className="text-[#fa9de3] mt-1" />
                <a href="https://www.femride.de" target="_blank" rel="noopener noreferrer" className="text-[#fa9de3] hover:underline">
                  www.femride.de
                </a>
              </div>
            </div>
          </div>
          
          {/* Connect column with social icons - Removed Facebook and Twitter */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-6">{isGerman ? 'Verbinden' : 'Connect'}</h3>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://www.instagram.com/femride_de" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="bg-gray-800 hover:bg-[#fa9de3] transition-colors rounded-full p-3"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a 
                href="https://www.linkedin.com/company/femridedeutschland/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn" 
                className="bg-gray-800 hover:bg-[#fa9de3] transition-colors rounded-full p-3"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>
          
          {/* Legal info column */}
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-6">{isGerman ? 'Rechtliches' : 'Legal'}</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-white mb-1">Impressum</h4>
                <p className="text-gray-300 mb-1">{t('footerCEO')}</p>
                <p className="text-gray-300">{t('footerCEOName')}</p>
              </div>
              <div>
                <h4 className="font-medium text-white mb-1">{t('footerRegistry')}</h4>
                <p className="text-gray-300">{t('footerRegistryCourt')}</p>
                <p className="text-gray-300">{t('footerHRB')}</p>
              </div>
              <div>
                <p className="text-gray-300 text-sm">{t('footerResponsible')} {t('footerResponsiblePerson')}</p>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="bg-gray-800" />
        
        {/* Copyright section */}
        <div className="pt-8 pb-4 text-left">
          <p className="text-gray-400">© {currentYear} FemRide. {t('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};
