
import React from 'react';
import { Monitor, HardDrive, Network, Shield, Layers } from 'lucide-react';
import AnimationObserver from './AnimationObserver';

const solutionsData = [
  {
    title: "Real-time Monitoring",
    icon: Monitor,
    description: "Advanced monitoring with predictive analytics for temperature, power consumption, and security metrics across your entire data center."
  },
  {
    title: "Smart Asset Management",
    icon: HardDrive,
    description: "AI-powered asset tracking system with automated lifecycle management and predictive maintenance schedules."
  },
  {
    title: "Intelligent Networking",
    icon: Network,
    description: "Self-optimizing network solutions that identify and resolve bottlenecks before they impact performance or reliability."
  },
  {
    title: "Enterprise Compliance",
    icon: Shield,
    description: "Automated compliance reporting with real-time alerts for potential compliance issues across multiple regulatory frameworks."
  },
  {
    title: "Interactive Digital Twin",
    icon: Layers,
    description: "Create fully interactive 3D models of your data center for scenario planning, capacity management, and thermal optimization."
  }
];

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationObserver animation="animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-centralaxis-navy mb-4">
              Intelligent Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform leverages AI and machine learning to deliver smart solutions that evolve with your data center needs.
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
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100 h-full hover:shadow-xl transition-all transform hover:-translate-y-1 group hover:border-centralaxis-blue">
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
