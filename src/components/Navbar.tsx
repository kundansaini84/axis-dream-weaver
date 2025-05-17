
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-centralaxis-navy">
              Central<span className="text-centralaxis-blue">Axis</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors">
              Solutions
            </a>
            <a href="#products" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors">
              Products
            </a>
            <a href="#company" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors">
              Company
            </a>
            <a href="#contact" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors">
              Contact
            </a>
            <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white ml-4">
              Request Demo
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-centralaxis-navy"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 bg-white absolute top-full left-0 w-full shadow-md">
            <div className="flex flex-col space-y-4 px-4">
              <a 
                href="#solutions" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="#products" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#company" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Company
              </a>
              <a 
                href="#contact" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white w-full">
                Request Demo
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
