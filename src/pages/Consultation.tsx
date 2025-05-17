
import React from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, ArrowRight, Check, Eye } from 'lucide-react';
import Footer from '../components/Footer';
import AnimationObserver from '../components/AnimationObserver';

const ConsultationPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-16 md:py-24 bg-gradient-to-br from-white to-centralaxis-gray overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimationObserver animation="animate-fade-in-up">
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl font-bold text-centralaxis-navy">
                    Free <span className="text-centralaxis-blue">Consultation</span>
                  </h1>
                  <p className="text-lg text-gray-600 max-w-lg">
                    Schedule a no-obligation consultation with our data center experts to discover how DataNexus can transform your infrastructure management.
                  </p>
                  
                  <div className="space-y-6 mt-8">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-centralaxis-blue/10 flex items-center justify-center shrink-0">
                        <Eye className="text-centralaxis-blue" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-centralaxis-navy mb-1">Personalized Assessment</h3>
                        <p className="text-gray-600">Get an expert evaluation of your current data center infrastructure and management practices.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-centralaxis-blue/10 flex items-center justify-center shrink-0">
                        <Calendar className="text-centralaxis-blue" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-centralaxis-navy mb-1">Flexible Scheduling</h3>
                        <p className="text-gray-600">Choose a time that works for you with our easy online booking system.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-centralaxis-blue/10 flex items-center justify-center shrink-0">
                        <Mail className="text-centralaxis-blue" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-centralaxis-navy mb-1">Custom Roadmap</h3>
                        <p className="text-gray-600">Receive a tailored implementation plan based on your specific needs and objectives.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimationObserver>

              <AnimationObserver animation="animate-slide-in-right">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-centralaxis-navy mb-6">Schedule Your Consultation</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent"
                        placeholder="john.doe@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent"
                        placeholder="Acme Inc."
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dataCenter" className="block text-sm font-medium text-gray-700 mb-1">Data Center Size</label>
                      <select
                        id="dataCenter"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent"
                      >
                        <option value="">Select size...</option>
                        <option value="small">Small (1-10 racks)</option>
                        <option value="medium">Medium (11-50 racks)</option>
                        <option value="large">Large (51-100 racks)</option>
                        <option value="enterprise">Enterprise (100+ racks)</option>
                      </select>
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full bg-centralaxis-blue hover:bg-centralaxis-navy text-white py-6 group relative overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center transition-all duration-300 group-hover:gap-2">
                          Schedule Consultation
                          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-centralaxis-electric-blue transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      </Button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        A team member will contact you within 24 hours to confirm.
                      </p>
                    </div>
                  </form>
                </div>
              </AnimationObserver>
            </div>

            <AnimationObserver animation="animate-fade-in" className="mt-20">
              <div className="bg-centralaxis-navy/5 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-centralaxis-navy mb-8 text-center">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-centralaxis-blue/20 rounded-full flex items-center justify-center text-centralaxis-navy font-bold text-xl">
                        JS
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-centralaxis-navy">James Smith</h4>
                        <p className="text-sm text-gray-500">CTO, Enterprise Solutions</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"The consultation process was incredibly thorough. They understood our complex needs and provided solutions we hadn't even considered."</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-centralaxis-blue/20 rounded-full flex items-center justify-center text-centralaxis-navy font-bold text-xl">
                        AL
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-centralaxis-navy">Amanda Lee</h4>
                        <p className="text-sm text-gray-500">Data Center Manager, TechCorp</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"The free consultation alone saved us thousands in potential mistakes. Their expertise was evident from the first call."</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-centralaxis-blue/20 rounded-full flex items-center justify-center text-centralaxis-navy font-bold text-xl">
                        MR
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-centralaxis-navy">Michael Rodriguez</h4>
                        <p className="text-sm text-gray-500">IT Director, Global Logistics</p>
                      </div>
                    </div>
                    <p className="text-gray-600 italic">"What impressed me most was how they tailored their approach to our specific industry challenges. Truly consultative."</p>
                  </div>
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

export default ConsultationPage;
