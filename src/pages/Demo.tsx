
import React from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import AnimationObserver from '../components/AnimationObserver';

const DemoPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-centralaxis-gray overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <AnimationObserver animation="animate-fade-in-up">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-centralaxis-navy mb-4">
                  See DataNexus <span className="text-centralaxis-blue">In Action</span>
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Watch how our platform transforms data center management with advanced monitoring, analytics, and digital twin technology.
                </p>
              </div>
            </AnimationObserver>

            <AnimationObserver animation="animate-scale-in" className="mb-16">
              <div className="relative h-0 pb-[56.25%] rounded-xl overflow-hidden bg-black shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center bg-centralaxis-navy bg-opacity-80">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Product Demo Video</h3>
                    <p className="text-white/80 mb-6">Click to watch our comprehensive platform walkthrough</p>
                    <Button className="bg-centralaxis-electric-blue hover:bg-white hover:text-centralaxis-blue text-white group relative overflow-hidden">
                      <span className="relative z-10 flex items-center gap-2">
                        <Play className="transition-transform duration-300 group-hover:scale-110" />
                        Watch Demo
                      </span>
                      <span className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimationObserver>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <AnimationObserver animation="animate-fade-in-up" delay={0}>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:border-centralaxis-blue transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-centralaxis-navy mb-4">Core Platform Overview</h3>
                  <p className="text-gray-600 mb-4">Discover the intuitive interface and powerful features of our data center management dashboard.</p>
                  <Button variant="outline" className="w-full border-centralaxis-blue text-centralaxis-blue hover:bg-centralaxis-blue hover:text-white group">
                    <span className="flex items-center justify-center gap-1 transition-all duration-300 group-hover:gap-3">
                      Watch Segment 
                      <ArrowRight className="transition-all duration-300" />
                    </span>
                  </Button>
                </div>
              </AnimationObserver>

              <AnimationObserver animation="animate-fade-in-up" delay={100}>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:border-centralaxis-blue transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-centralaxis-navy mb-4">Digital Twin Technology</h3>
                  <p className="text-gray-600 mb-4">See how our 3D modeling and simulation capabilities help optimize your data center layout.</p>
                  <Button variant="outline" className="w-full border-centralaxis-blue text-centralaxis-blue hover:bg-centralaxis-blue hover:text-white group">
                    <span className="flex items-center justify-center gap-1 transition-all duration-300 group-hover:gap-3">
                      Watch Segment 
                      <ArrowRight className="transition-all duration-300" />
                    </span>
                  </Button>
                </div>
              </AnimationObserver>

              <AnimationObserver animation="animate-fade-in-up" delay={200}>
                <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:border-centralaxis-blue transition-all hover:shadow-lg">
                  <h3 className="text-xl font-semibold text-centralaxis-navy mb-4">Analytics & Reporting</h3>
                  <p className="text-gray-600 mb-4">Learn how advanced analytics provide actionable insights and automated reporting.</p>
                  <Button variant="outline" className="w-full border-centralaxis-blue text-centralaxis-blue hover:bg-centralaxis-blue hover:text-white group">
                    <span className="flex items-center justify-center gap-1 transition-all duration-300 group-hover:gap-3">
                      Watch Segment 
                      <ArrowRight className="transition-all duration-300" />
                    </span>
                  </Button>
                </div>
              </AnimationObserver>
            </div>

            <AnimationObserver animation="animate-fade-in" className="text-center">
              <div className="bg-white rounded-lg p-8 shadow-md border border-gray-200">
                <h2 className="text-2xl font-bold text-centralaxis-navy mb-4">Ready to see more?</h2>
                <p className="text-gray-600 mb-6">Schedule a personalized demo with our product experts tailored to your specific needs.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white px-8 py-6 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center transition-all duration-300 group-hover:gap-2">
                      Request Custom Demo
                      <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-centralaxis-electric-blue transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                  </Button>
                  <Button variant="outline" className="border-centralaxis-navy text-centralaxis-navy hover:bg-centralaxis-navy hover:text-white px-8 py-6">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </AnimationObserver>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DemoPage;
