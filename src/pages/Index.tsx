
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
    // Add custom CSS for the diagonal clip path and animations
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
      
      .animate-fade-in-up {
        animation: fadeInUp 0.6s ease-out forwards;
      }
      
      .animate-fade-in {
        animation: fadeIn 0.8s ease-out forwards;
      }

      .animate-pulse-glow {
        animation: pulseGlow 2s infinite;
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      @keyframes pulseGlow {
        0% {
          box-shadow: 0 0 0 0 rgba(0, 119, 182, 0.4);
        }
        70% {
          box-shadow: 0 0 0 10px rgba(0, 119, 182, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(0, 119, 182, 0);
        }
      }

      /* Enhanced button hover effects */
      .btn-hover-slide-right {
        position: relative;
        overflow: hidden;
        z-index: 1;
        transition: all 0.3s ease;
      }

      .btn-hover-slide-right::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: all 0.6s ease;
      }

      .btn-hover-slide-right:hover::before {
        left: 100%;
      }

      /* Card shine effect */
      .card-shine {
        position: relative;
        overflow: hidden;
      }

      .card-shine::after {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
          to bottom right,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 0.1) 50%,
          rgba(255, 255, 255, 0) 100%
        );
        transform: rotate(30deg);
        opacity: 0;
        transition: opacity 0.6s;
      }

      .card-shine:hover::after {
        opacity: 1;
        animation: shine 1.5s forwards;
      }

      @keyframes shine {
        0% { transform: rotate(30deg) translateY(-100%); }
        100% { transform: rotate(30deg) translateY(100%); }
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
