
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="container flex justify-between items-center">
        <a href="#" className="flex items-center">
          <div className="text-optiblue-600 font-bold text-2xl">
            <span>Opti</span>
            <span className="text-optiblue-800">AI</span>
          </div>
        </a>

        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#" className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Home</a>
          <a href="#about" className="text-foreground hover:text-optiblue-600 font-medium transition-colors">About</a>
          <a href="#services" className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Services</a>
          <a href="#portfolio" className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Portfolio</a>
          <a href="#testimonials" className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Testimonials</a>
          <a href="#contact" className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Contact</a>
          <Button variant="default" className="bg-optiblue-500 hover:bg-optiblue-600">Book a Demo</Button>
        </nav>

        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 absolute w-full">
          <nav className="flex flex-col space-y-3 container">
            <a href="#" onClick={toggleMobileMenu} className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Home</a>
            <a href="#about" onClick={toggleMobileMenu} className="text-foreground hover:text-optiblue-600 font-medium transition-colors">About</a>
            <a href="#services" onClick={toggleMobileMenu} className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Services</a>
            <a href="#portfolio" onClick={toggleMobileMenu} className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Portfolio</a>
            <a href="#testimonials" onClick={toggleMobileMenu} className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Testimonials</a>
            <a href="#contact" onClick={toggleMobileMenu} className="text-foreground hover:text-optiblue-600 font-medium transition-colors">Contact</a>
            <Button variant="default" className="bg-optiblue-500 hover:bg-optiblue-600 w-full mt-4">Book a Demo</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
