
import Navbar from "@/shared/Navbar";
import HeroSection from "@/features/hero/HeroSection";
import ServicesSection from "@/features/services/ServicesSection";
import CitiesSection from "@/features/cities/CitiesSection";
import AboutSection from "@/features/about/AboutSection";
import EarnSection from "@/features/earn/EarnSection";

/**
 * Main landing page of the application
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <CitiesSection />
      <AboutSection />
      <EarnSection />
    </div>
  );
};

export default Index;
