
import React, { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-2xl font-bold text-centralaxis-navy">
              Data<span className="text-centralaxis-blue">Nexus</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="/#solutions" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors relative group">
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-centralaxis-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#products" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors relative group">
              Products
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-centralaxis-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link to="/resources" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors relative group">
              Resources
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-centralaxis-blue transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="/#contact" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium transition-colors relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-centralaxis-blue transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link to="/consultation">
              <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white ml-4 relative overflow-hidden group">
                <span className="relative z-10">Free Consultation</span>
                <span className="absolute inset-0 bg-centralaxis-electric-blue transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
              </Button>
            </Link>
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
                href="/#solutions" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Solutions
              </a>
              <a 
                href="/#products" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Products
              </a>
              <Link 
                to="/resources" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <a 
                href="/#contact" 
                className="text-centralaxis-navy hover:text-centralaxis-blue font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Link to="/consultation" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white w-full group relative overflow-hidden">
                  <span className="relative z-10">Free Consultation</span>
                  <span className="absolute inset-0 bg-centralaxis-electric-blue transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
