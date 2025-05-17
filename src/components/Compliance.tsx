
import React from 'react';
import AnimationObserver from './AnimationObserver';

const certifications = [
  { name: "ISO 27001", logo: "ISO" },
  { name: "GDPR Compliant", logo: "GDPR" },
  { name: "HIPAA", logo: "HIPAA" },
  { name: "PCI DSS", logo: "PCI" },
  { name: "SOC 2", logo: "SOC2" },
  { name: "ENERGY STAR", logo: "ENERGY" }
];

const Compliance = () => {
  return (
    <section className="py-16 bg-centralaxis-gray/50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationObserver animation="animate-fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-centralaxis-navy mb-4">
              Compliance Made Simple
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform helps you maintain compliance with key industry standards and regulations.
            </p>
          </div>
        </AnimationObserver>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <AnimationObserver 
                key={cert.name} 
                animation="animate-scale-in" 
                delay={index * 100}
              >
                <div className="bg-white rounded-lg p-6 h-32 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="text-xl font-bold text-centralaxis-navy mb-2">{cert.logo}</div>
                  <p className="text-sm text-gray-600 text-center">{cert.name}</p>
                </div>
              </AnimationObserver>
            ))}
          </div>
        </div>

        <AnimationObserver animation="animate-fade-in" className="mt-12 text-center">
          <p className="text-centralaxis-blue font-medium">
            Ensuring your data center meets all regulatory requirements
          </p>
        </AnimationObserver>
      </div>
    </section>
  );
};

export default Compliance;
