
import React from 'react';
import AnimationObserver from './AnimationObserver';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

const DigitalTwin = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decorator */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-centralaxis-gray/30 clip-path-diagonal"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimationObserver animation="animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-centralaxis-navy">Digital Twin Technology</h2>
              <p className="text-lg text-gray-600">
                Create a virtual replica of your physical data center for enhanced planning, simulation, and optimization. Our digital twin technology allows you to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-centralaxis-blue/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-centralaxis-blue"></div>
                  </div>
                  <span className="text-gray-700">Test changes before physical implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-centralaxis-blue/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-centralaxis-blue"></div>
                  </div>
                  <span className="text-gray-700">Optimize power and cooling efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-centralaxis-blue/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-centralaxis-blue"></div>
                  </div>
                  <span className="text-gray-700">Plan capacity and predict future needs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-3 mt-1 w-5 h-5 rounded-full bg-centralaxis-blue/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-centralaxis-blue"></div>
                  </div>
                  <span className="text-gray-700">Reduce risk with predictive maintenance</span>
                </li>
              </ul>
              <div className="pt-4">
                <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white px-6 py-2 flex items-center gap-2 group">
                  Explore Digital Twin
                  <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
                </Button>
              </div>
            </div>
          </AnimationObserver>
          
          <AnimationObserver animation="animate-slide-in-right">
            <div className="relative h-[500px] rounded-lg shadow-xl overflow-hidden border border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-centralaxis-navy to-centralaxis-blue"></div>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              
              {/* Digital Twin UI Mockup */}
              <div className="absolute inset-0 p-4 flex flex-col">
                <div className="flex items-center justify-between mb-4 bg-white/10 rounded p-2">
                  <div className="text-white font-medium">Data Center Digital Twin</div>
                  <div className="flex space-x-2">
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                      <div className="w-3 h-1.5 bg-white rounded-full"></div>
                    </div>
                    <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 grid grid-cols-12 grid-rows-6 gap-3">
                  {/* Left sidebar */}
                  <div className="col-span-3 row-span-6 bg-white/10 rounded p-2 flex flex-col space-y-2">
                    {Array(6).fill(null).map((_, i) => (
                      <div key={i} className="h-8 bg-white/10 rounded"></div>
                    ))}
                  </div>
                  
                  {/* Main content area */}
                  <div className="col-span-9 row-span-4 bg-white/5 rounded relative overflow-hidden">
                    {/* 3D grid representing server racks */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-1 p-2">
                      {Array(24).fill(null).map((_, i) => (
                        <div key={i} className={`bg-white/10 rounded ${i % 3 === 0 ? 'bg-centralaxis-electric-blue/30' : ''}`}>
                          <div className="h-full p-1">
                            <div className="h-full bg-white/10 rounded flex flex-col justify-between p-1">
                              <div className="flex justify-between">
                                <div className="w-1 h-1 bg-green-300 rounded-full"></div>
                                <div className="w-1 h-1 bg-green-300 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Bottom tools */}
                  <div className="col-span-9 row-span-2 grid grid-cols-3 gap-3">
                    <div className="bg-white/10 rounded p-2">
                      <div className="h-3 w-1/2 bg-white/20 rounded mb-2"></div>
                      <div className="flex items-end h-[80%]">
                        <div className="w-1/5 h-[30%] bg-centralaxis-electric-blue/50 rounded-t mr-2"></div>
                        <div className="w-1/5 h-[60%] bg-centralaxis-electric-blue/50 rounded-t mr-2"></div>
                        <div className="w-1/5 h-[85%] bg-centralaxis-electric-blue/50 rounded-t mr-2"></div>
                        <div className="w-1/5 h-[40%] bg-centralaxis-electric-blue/50 rounded-t"></div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded p-2">
                      <div className="h-3 w-1/2 bg-white/20 rounded mb-2"></div>
                      <div className="h-[80%] rounded bg-white/5 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-centralaxis-electric-blue/30 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-centralaxis-electric-blue/50"></div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white/10 rounded p-2">
                      <div className="h-3 w-1/2 bg-white/20 rounded mb-2"></div>
                      <div className="h-[80%] flex flex-col justify-between">
                        <div className="h-3 bg-white/20 rounded"></div>
                        <div className="h-3 bg-centralaxis-electric-blue/40 rounded"></div>
                        <div className="h-3 bg-white/20 rounded"></div>
                        <div className="h-3 bg-white/20 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimationObserver>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
