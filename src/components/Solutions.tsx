
import React from 'react';
import { Monitor, HardDrive, Network, Shield, Layers } from 'lucide-react';
import AnimationObserver from './AnimationObserver';

const solutionsData = [
  {
    title: "Monitoring",
    icon: Monitor,
    description: "Real-time insights and alerts for your data center environment including temperature, power, and security."
  },
  {
    title: "Asset Management",
    icon: HardDrive,
    description: "Track and manage all your data center assets from acquisition to retirement with comprehensive lifecycle management."
  },
  {
    title: "Network Tools",
    icon: Network,
    description: "Monitor network performance, identify bottlenecks, and optimize connectivity across your infrastructure."
  },
  {
    title: "Compliance Automation",
    icon: Shield,
    description: "Automate compliance reporting and ensure adherence to industry regulations and standards."
  },
  {
    title: "Digital Twin",
    icon: Layers,
    description: "Create virtual replicas of your physical data center for better planning, simulation, and optimization."
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationObserver animation="animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-centralaxis-navy mb-4">
              Comprehensive Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform offers a complete suite of tools designed to streamline your data center operations.
            </p>
          </div>
        </AnimationObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsData.map((solution, index) => (
            <AnimationObserver 
              key={solution.title} 
              animation="animate-scale-in" 
              delay={index * 100}
              className="h-full"
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 h-full hover:shadow-xl transition-shadow group hover:border-centralaxis-blue">
                <div className="w-16 h-16 rounded-full bg-centralaxis-blue/10 flex items-center justify-center mb-6 group-hover:bg-centralaxis-blue/20 transition-colors">
                  <solution.icon size={32} className="text-centralaxis-blue" />
                </div>
                <h3 className="text-xl font-semibold text-centralaxis-navy mb-4">{solution.title}</h3>
                <p className="text-gray-600">{solution.description}</p>
              </div>
            </AnimationObserver>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
