import { useState, useEffect } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { X } from 'lucide-react';
import { loadGoogleAnalytics } from '@/lib/analytics';

/**
 * CookieConsent component displays a consent banner for cookies
 * It supports multiple languages via the LanguageContext
 * Stores user consent in localStorage to remember preference
 * Hides on specific pages as required by Apple's privacy guidelines
 */
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  // Pages where cookie banner should not be shown (Apple requirement)
  const hideCookieBannerPages = [
    '/delete-driver-account',
    '/faq/drivers',
    '/drive'
  ];

  // Check if current page should hide cookie banner
  const shouldHideBanner = () => {
    if (typeof window === 'undefined') return false;
    return hideCookieBannerPages.includes(window.location.pathname);
  };

  // Check if user has already given consent
  useEffect(() => {
    // Don't show banner on specific pages (Apple requirement)
    if (shouldHideBanner()) {
      return;
    }

    const hasConsent = localStorage.getItem('femrideCookieConsent');
    if (!hasConsent) {
      // Only show banner if consent hasn't been given
      setIsVisible(true);
    }

    // If user previously accepted cookies, load analytics
    if (hasConsent === 'true') {
      loadGoogleAnalytics();
    }
  }, []);

  // Handle user accepting cookies
  const acceptCookies = () => {
    localStorage.setItem('femrideCookieConsent', 'true');
    setIsVisible(false);
    // Load Google Analytics after user consent
    loadGoogleAnalytics();
  };

  // Handle user declining cookies
  const declineCookies = () => {
    localStorage.setItem('femrideCookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <div className="max-w-4xl mx-auto bg-gray-900 rounded-xl shadow-xl border border-gray-800 overflow-hidden">
        <div className="relative p-6">
          {/* Close button */}
          <button 
            onClick={declineCookies}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
            aria-label={t('cookieCloseButton')}
          >
            <X size={20} />
          </button>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">
                {t('cookieTitle')}
              </h3>
              <p className="text-gray-300 text-sm md:text-base">
                {t('cookieDescription')}
              </p>
              <div className="mt-1">
                <a 
                  href="/privacy" 
                  className="text-sm text-[#fa9de3] hover:underline inline-flex items-center"
                >
                  {t('cookiePrivacyLink')}
                </a>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-0">
              <button
                onClick={declineCookies}
                className="px-5 py-2.5 rounded-lg border border-gray-600 text-white hover:bg-gray-800 transition-colors"
              >
                {t('cookieDeclineButton')}
              </button>
              <button
                onClick={acceptCookies}
                className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#fa9de3] to-[#a3adf4] text-black font-medium hover:opacity-90 transition-colors"
              >
                {t('cookieAcceptButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent; 