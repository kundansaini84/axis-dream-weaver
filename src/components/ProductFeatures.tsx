
import React from 'react';
import AnimationObserver from './AnimationObserver';
import { Star } from 'lucide-react';

const features = [
  {
    title: "Scalable Architecture",
    description: "Designed to grow with your business from a single rack to multiple data centers."
  },
  {
    title: "Intuitive Interface",
    description: "User-friendly dashboards and controls make management straightforward."
  },
  {
    title: "Robust Security",
    description: "Enterprise-grade security controls and access management."
  },
  {
    title: "Advanced Analytics",
    description: "Gain actionable insights through comprehensive data analysis."
  },
  {
    title: "Multi-site Management",
    description: "Manage multiple locations from a single unified interface."
  },
  {
    title: "Custom Reporting",
    description: "Generate tailored reports for different stakeholders and requirements."
  }
];

const ProductFeatures = () => {
  return (
    <section id="products" className="py-20 bg-centralaxis-gray">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationObserver animation="animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-centralaxis-navy mb-4">
              Product Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Designed with your needs in mind, our platform offers innovative features to enhance efficiency.
            </p>
          </div>
        </AnimationObserver>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <AnimationObserver 
              key={feature.title} 
              animation="animate-fade-in-up" 
              delay={index * 100}
              className="h-full"
            >
              <div className="bg-white rounded-lg p-6 border border-gray-100 h-full hover:shadow-md transition-all hover:translate-y-[-5px]">
                <div className="flex items-center mb-4">
                  <Star className="text-centralaxis-blue mr-2" size={20} />
                  <h3 className="text-xl font-semibold text-centralaxis-navy">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </AnimationObserver>
          ))}
        </div>

        <AnimationObserver animation="animate-fade-in" className="mt-12 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-centralaxis-blue hover:bg-centralaxis-navy text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            Request a Full Feature Demo
          </a>
        </AnimationObserver>
      </div>
    </section>
  );
};

export default ProductFeatures;
