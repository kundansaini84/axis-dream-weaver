
import React from 'react';
import AnimationObserver from './AnimationObserver';
import { Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  {
    title: "Enterprise Scalability",
    description: "Seamlessly scale from a single rack to multi-site global deployments with our distributed architecture."
  },
  {
    title: "Intelligent UI/UX",
    description: "AI-powered interface that adapts to your usage patterns for maximum workflow efficiency."
  },
  {
    title: "Military-grade Security",
    description: "End-to-end encryption and granular access controls with anomaly detection and breach prevention."
  },
  {
    title: "Predictive Analytics",
    description: "Machine learning models that forecast capacity needs, predict failures, and optimize resource allocation."
  },
  {
    title: "Cross-platform Management",
    description: "Control all environments from a single unified dashboard with seamless integration capabilities."
  },
  {
    title: "Executive Reporting",
    description: "Automated executive reports with custom KPIs and business intelligence visualizations."
  }
];

const ProductFeatures = () => {
  return (
    <section id="products" className="py-20 bg-centralaxis-gray">
      <div className="container mx-auto px-4 md:px-6">
        <AnimationObserver animation="animate-fade-in-up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-centralaxis-navy mb-4">
              Enterprise Features
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform delivers advanced capabilities designed for the most demanding enterprise environments.
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
              <div className="bg-white rounded-lg p-6 border border-gray-100 h-full group hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] hover:border-centralaxis-blue relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-centralaxis-blue/5 to-centralaxis-electric-blue/5 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <Star className="text-centralaxis-blue mr-2 group-hover:scale-110 transition-transform duration-300" size={20} />
                    <h3 className="text-xl font-semibold text-centralaxis-navy group-hover:text-centralaxis-blue transition-colors duration-300">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </AnimationObserver>
          ))}
        </div>

        <AnimationObserver animation="animate-fade-in" className="mt-12 text-center">
          <Link to="/demo">
            <button 
              className="inline-flex items-center bg-centralaxis-blue hover:bg-centralaxis-navy text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:px-10 group"
            >
              <span className="flex items-center gap-2">
                Schedule a Personalized Demo
                <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </Link>
        </AnimationObserver>
      </div>
    </section>
  );
};

export default ProductFeatures;
