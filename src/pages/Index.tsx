
import Navbar from "@/shared/Navbar";
import HeroSection from "@/features/hero/HeroSection";
import ServicesSection from "@/features/services/ServicesSection";

/**
 * Main landing page of the application
 */
const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ServicesSection />
    </div>
  );
};

export default Index;
