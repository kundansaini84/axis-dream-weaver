
import React from 'react';
import { Button } from './ui/button';
import AnimationObserver from './AnimationObserver';
import { Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactCTA = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <AnimationObserver animation="animate-fade-in-up">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-centralaxis-navy">Get In Touch</h2>
              <p className="text-lg text-gray-600">
                Ready to transform your data center operations? Our team is here to help you get started with DataNexus.
              </p>
              
              <div className="bg-centralaxis-gray p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-centralaxis-navy mb-4">Company Information</h3>
                <div className="space-y-3">
                  <p className="text-gray-700"><strong>Address:</strong> 123 Tech Plaza, Suite 500<br />San Francisco, CA 94105</p>
                  <p className="text-gray-700"><strong>Phone:</strong> (555) 123-4567</p>
                  <p className="text-gray-700"><strong>Support:</strong> support@datanexus.com</p>
                  <p className="text-gray-700"><strong>Sales:</strong> sales@datanexus.com</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold text-centralaxis-navy mb-3">Frequently Asked Questions</h3>
                
                <div className="space-y-4">
                  <div className="transform transition-all duration-300 hover:translate-x-2">
                    <h4 className="font-medium text-centralaxis-navy">How quickly can I deploy DataNexus?</h4>
                    <p className="text-gray-600 mt-1">Most customers are up and running within 2-4 weeks, depending on the complexity of your environment.</p>
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:translate-x-2">
                    <h4 className="font-medium text-centralaxis-navy">Is training included?</h4>
                    <p className="text-gray-600 mt-1">Yes, all plans include comprehensive training for your team.</p>
                  </div>
                  
                  <div className="transform transition-all duration-300 hover:translate-x-2">
                    <h4 className="font-medium text-centralaxis-navy">Can DataNexus integrate with our existing tools?</h4>
                    <p className="text-gray-600 mt-1">Absolutely! We offer robust APIs and pre-built integrations with major IT and data center tools.</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimationObserver>
          
          <AnimationObserver animation="animate-slide-in-right">
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-centralaxis-blue/10 flex items-center justify-center mr-4 group-hover:bg-centralaxis-blue/30 transition-colors">
                  <Mail className="text-centralaxis-blue" size={20} />
                </div>
                <h3 className="text-xl font-semibold text-centralaxis-navy">Request a Demo</h3>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent transition-all duration-300 hover:border-centralaxis-blue"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent transition-all duration-300 hover:border-centralaxis-blue"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent transition-all duration-300 hover:border-centralaxis-blue"
                    placeholder="john.doe@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent transition-all duration-300 hover:border-centralaxis-blue"
                    placeholder="Acme Inc."
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent transition-all duration-300 hover:border-centralaxis-blue"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">How can we help?</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent transition-all duration-300 hover:border-centralaxis-blue"
                    placeholder="Tell us about your needs..."
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <Button className="w-full bg-centralaxis-blue hover:bg-centralaxis-navy text-white py-2 group relative overflow-hidden">
                    <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:gap-2">
                      Request Demo
                      <ArrowRight className="opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                    </span>
                    <span className="absolute inset-0 bg-centralaxis-electric-blue transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-300"></span>
                  </Button>
                </div>
              </form>
            </div>
          </AnimationObserver>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
