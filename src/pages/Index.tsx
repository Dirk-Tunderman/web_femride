
import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import HeroSection from '../features/hero/HeroSection';
import ServicesSection from '../features/services/ServicesSection';
import AboutSection from '../features/about/AboutSection';
import LatestFeaturesSection from '../features/latestFeatures/LatestFeaturesSection';
import FAQSection from '../features/faq/FAQSection';
import ContactSection from '../features/contact/ContactSection';

import WaitingListSection from '../features/waitinglist/WaitingListSection';
import WaitlistPopup from '../components/WaitlistPopup';
import { Footer } from '../shared/Footer';
import { ChevronUp } from 'lucide-react';
import { getReferralCode } from '../lib/referralUtils';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [referralCode, setReferralCode] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for referral code using utility function
  useEffect(() => {
    const ref = getReferralCode();
    if (ref) {
      setReferralCode(ref);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <LatestFeaturesSection />
        <FAQSection />
        <ContactSection />
        <WaitingListSection />
      </main>
      <Footer />

      {/* Scroll to top button - updated to rounded-full */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-[#fa9de3] hover:bg-[#e989cc] text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 z-50 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <ChevronUp size={24} />
      </button>

      {/* Waitlist Popup */}
      <WaitlistPopup referralCode={referralCode || undefined} />
    </div>
  );
};

export default Index;
