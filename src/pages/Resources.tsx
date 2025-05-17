
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import AnimationObserver from '../components/AnimationObserver';
import { Book, Video, FileText, Download } from 'lucide-react';

const resourceCategories = [
  {
    title: "White Papers",
    icon: FileText,
    resources: [
      { title: "The Future of Data Center Automation", date: "May 15, 2025" },
      { title: "Energy Efficiency in Modern Data Centers", date: "April 22, 2025" },
      { title: "Security Challenges in Data Center Management", date: "March 10, 2025" }
    ]
  },
  {
    title: "Video Tutorials",
    icon: Video,
    resources: [
      { title: "Getting Started with DataNexus", date: "May 12, 2025" },
      { title: "Advanced Monitoring Configuration", date: "April 18, 2025" },
      { title: "Digital Twin Implementation Guide", date: "March 5, 2025" }
    ]
  },
  {
    title: "Case Studies",
    icon: Book,
    resources: [
      { title: "How CloudServe Reduced Power Costs by 30%", date: "May 8, 2025" },
      { title: "TechGlobal's Migration Success Story", date: "April 10, 2025" },
      { title: "Financial Sector Compliance Made Easy", date: "February 22, 2025" }
    ]
  },
  {
    title: "Technical Documentation",
    icon: Download,
    resources: [
      { title: "API Documentation and Examples", date: "May 10, 2025" },
      { title: "Integration Guide for Legacy Systems", date: "April 5, 2025" },
      { title: "Custom Reporting Module Documentation", date: "March 15, 2025" }
    ]
  }
];

const Resources = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <section className="py-20 bg-gradient-to-b from-white to-centralaxis-gray">
          <div className="container mx-auto px-4 md:px-6">
            <AnimationObserver animation="animate-fade-in-up">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-bold text-centralaxis-navy mb-4">
                  Knowledge Resources
                </h1>
                <p className="text-lg text-gray-600">
                  Explore our comprehensive collection of resources to help you maximize the value of your DataNexus platform and stay updated on industry best practices.
                </p>
              </div>
            </AnimationObserver>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {resourceCategories.map((category, index) => (
                <AnimationObserver 
                  key={category.title} 
                  animation="animate-fade-in-up" 
                  delay={index * 100}
                  className="h-full"
                >
                  <div className="bg-white rounded-lg shadow-md p-6 h-full">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-centralaxis-blue/10 flex items-center justify-center mr-4">
                        <category.icon className="text-centralaxis-blue" size={24} />
                      </div>
                      <h2 className="text-xl font-semibold text-centralaxis-navy">{category.title}</h2>
                    </div>
                    <div className="space-y-4 mt-6">
                      {category.resources.map((resource) => (
                        <div key={resource.title} className="border-b border-gray-100 pb-4">
                          <a href="#" className="text-centralaxis-navy hover:text-centralaxis-blue font-medium block transition-colors">
                            {resource.title}
                          </a>
                          <p className="text-sm text-gray-500 mt-1">{resource.date}</p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-6 border-centralaxis-blue text-centralaxis-blue hover:bg-centralaxis-blue hover:text-white">
                      View All {category.title}
                    </Button>
                  </div>
                </AnimationObserver>
              ))}
            </div>
            
            <AnimationObserver animation="animate-fade-in-up">
              <div className="bg-centralaxis-blue/10 rounded-lg p-8 text-center">
                <h3 className="text-xl font-semibold text-centralaxis-navy mb-4">Need personalized assistance?</h3>
                <p className="text-gray-600 mb-6">
                  Our team of experts is ready to help you with any questions or challenges you may have.
                </p>
                <Button className="bg-centralaxis-blue hover:bg-centralaxis-navy text-white">
                  Contact Support Team
                </Button>
              </div>
            </AnimationObserver>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
