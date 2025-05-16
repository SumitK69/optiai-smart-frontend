
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import TechStackSection from "@/components/TechStackSection";
import ContactSection from "@/components/ContactSection";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

const Index = () => {
  // Animation effect for scroll reveal
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <HeroSection />
        
        <div className="reveal">
          <AboutSection />
        </div>
        
        <div className="reveal">
          <ServicesSection />
        </div>
        
        <div className="reveal">
          <PortfolioSection />
        </div>
        
        <div className="reveal">
          <TestimonialsSection />
        </div>
        
        <div className="reveal">
          <WhyChooseUsSection />
        </div>
        
        <div className="reveal">
          <TechStackSection />
        </div>
        
        <div className="reveal">
          <ContactSection />
        </div>
        
        <CtaBanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
