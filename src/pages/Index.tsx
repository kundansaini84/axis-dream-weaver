
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Solutions from '../components/Solutions';
import ProductFeatures from '../components/ProductFeatures';
import DigitalTwin from '../components/DigitalTwin';
import Compliance from '../components/Compliance';
import ContactCTA from '../components/ContactCTA';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Add custom CSS for the diagonal clip path
    const style = document.createElement('style');
    style.textContent = `
      .clip-path-diagonal {
        clip-path: polygon(100% 0, 100% 100%, 0 100%, 20% 0);
      }
      
      .bg-grid-pattern {
        background-image: 
          linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
        background-size: 20px 20px;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <ProductFeatures />
        <DigitalTwin />
        <Compliance />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
