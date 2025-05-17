
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.classList.add('animate-fade-in-up');
    }
    setTimeout(() => {
      if (subtitleRef.current) {
        subtitleRef.current.classList.add('animate-fade-in-up');
      }
    }, 200);
    setTimeout(() => {
      if (buttonRef.current) {
        buttonRef.current.classList.add('animate-fade-in-up');
      }
    }, 400);
    setTimeout(() => {
      if (imageRef.current) {
        imageRef.current.classList.add('animate-fade-in');
      }
    }, 600);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-centralaxis-gray overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute right-0 top-1/4 w-64 h-64 bg-centralaxis-blue rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute left-20 bottom-1/4 w-80 h-80 bg-centralaxis-electric-blue rounded-full filter blur-[120px] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 pt-12 lg:pt-0">
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-centralaxis-navy opacity-0"
              style={{ transitionDelay: '0.2s' }}
            >
              Modern Data Center <br />
              <span className="text-centralaxis-blue">Infrastructure Management</span>
            </h1>
            <p 
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-600 max-w-lg opacity-0"
              style={{ transitionDelay: '0.4s' }}
            >
              Streamline operations, improve efficiency, and ensure compliance with our comprehensive DCIM platform.
            </p>
            <div 
              ref={buttonRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
              style={{ transitionDelay: '0.6s' }}
            >
              <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white px-8 py-6 text-lg flex items-center gap-2 transition-all duration-300 hover:gap-4 group">
                Get Started 
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
              </Button>
              <Button variant="outline" className="border-centralaxis-navy text-centralaxis-navy hover:bg-centralaxis-navy hover:text-white px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className="relative h-[400px] md:h-[500px] opacity-0"
            style={{ transitionDelay: '0.8s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-centralaxis-blue to-centralaxis-electric-blue rounded-lg shadow-2xl overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMjAgMCBMIDAgMCAwIDIwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utb3BhY2l0eT0iMC4xIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md mx-auto">
                  <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 text-white/80 text-sm">CentralAxis Dashboard</div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-12 bg-white/5 rounded"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-white/5 h-32 rounded"></div>
                        <div className="bg-white/5 h-32 rounded"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-white/5 h-24 rounded"></div>
                        <div className="bg-white/5 h-24 rounded"></div>
                        <div className="bg-white/5 h-24 rounded"></div>
                      </div>
                      <div className="h-12 bg-white/5 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
