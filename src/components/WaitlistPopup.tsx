import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '@/lib/LanguageContext';
import WaitingListForm from './WaitingListForm';

interface WaitlistPopupProps {
  referralCode?: string;
}

const WaitlistPopup: React.FC<WaitlistPopupProps> = ({ referralCode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  // Check if the user is on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Handle exit intent for desktop
  useEffect(() => {
    if (hasShown || isMobile) return;

    const handleExitIntent = (e: MouseEvent) => {
      // Only trigger if the mouse is leaving from the top of the page
      if (e.clientY <= 5 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add a delay before enabling exit intent detection (4 seconds)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleExitIntent);
    }, 4000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [hasShown, isMobile]);

  // Handle scroll for mobile
  useEffect(() => {
    if (hasShown || !isMobile) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.scrollHeight;
      const viewportHeight = window.innerHeight;

      // Show popup when user has scrolled 50% of the page
      const scrollPercentage = (scrollPosition / (pageHeight - viewportHeight)) * 100;

      if (scrollPercentage >= 50 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    // Add a delay before enabling scroll detection (4 seconds)
    const timer = setTimeout(() => {
      window.addEventListener('scroll', handleScroll);
    }, 4000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown, isMobile]);

  // Close popup when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible]);

  // Store in session storage that the popup has been shown
  useEffect(() => {
    if (hasShown) {
      sessionStorage.setItem('waitlistPopupShown', 'true');
    }
  }, [hasShown]);

  // Check session storage and signup status on mount
  useEffect(() => {
    const hasPopupShown = sessionStorage.getItem('waitlistPopupShown') === 'true';
    const hasSignedUp = localStorage.getItem('femrideSignedUp') === 'true';

    if (hasPopupShown || hasSignedUp) {
      setHasShown(true);
    }
  }, []);

  // Listen for localStorage changes (signup in other tabs)
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'femrideSignedUp' && e.newValue === 'true') {
        setHasShown(true);
        setIsVisible(false);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div
        ref={popupRef}
        className="bg-white rounded-xl shadow-lg max-w-md w-full relative animate-fadeIn"
      >
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2 text-[#222]">
              {t('waitingListExitTitle')}
            </h2>
            <p className="text-gray-600">
              {t('waitingListExitDescription')}
            </p>
          </div>

          <div className="bg-[#fa9de3]/10 p-4 rounded-lg mb-6">
            <div className="flex items-center">
              <div className="bg-[#fa9de3]/20 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#fa9de3]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="text-sm font-medium">
                {t('waitingListTrustSafetyDesc')}
              </p>
            </div>
          </div>

          <WaitingListForm
            className="w-full"
            referralCode={referralCode}
            simplified={true}
            onSignupSuccess={() => setIsVisible(false)}
          />

          <p className="text-xs text-gray-500 text-center mt-4">
            {t('waitingListExitDisclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WaitlistPopup;
