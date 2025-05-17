
import React from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';
import Footer from '../components/Footer';
import AnimationObserver from '../components/AnimationObserver';

const FreeTrialPage = () => {
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
                    Start Your <span className="text-centralaxis-blue">Free Trial</span> Today
                  </h1>
                  <p className="text-lg text-gray-600 max-w-lg">
                    Experience the power of DataNexus with our 14-day free trial. No credit card required. Full access to all enterprise features.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Check className="text-centralaxis-blue mt-1 shrink-0" />
                      <p className="text-gray-700">Instant access to all platform features</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-centralaxis-blue mt-1 shrink-0" />
                      <p className="text-gray-700">Personalized onboarding support</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-centralaxis-blue mt-1 shrink-0" />
                      <p className="text-gray-700">Access to dedicated support team</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="text-centralaxis-blue mt-1 shrink-0" />
                      <p className="text-gray-700">Sample data to explore platform capabilities</p>
                    </div>
                  </div>
                </div>
              </AnimationObserver>

              <AnimationObserver animation="animate-slide-in-right">
                <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
                  <h2 className="text-2xl font-bold text-centralaxis-navy mb-6">Create Your Free Account</h2>
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
                      <label htmlFor="workEmail" className="block text-sm font-medium text-gray-700 mb-1">Work Email</label>
                      <input
                        type="email"
                        id="workEmail"
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
                      <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">Job Title</label>
                      <input
                        type="text"
                        id="jobTitle"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-centralaxis-blue focus:border-transparent"
                        placeholder="IT Manager"
                      />
                    </div>
                    
                    <div className="pt-2">
                      <Button className="w-full bg-centralaxis-blue hover:bg-centralaxis-navy text-white py-6 text-lg group relative overflow-hidden">
                        <span className="relative z-10 flex items-center transition-all duration-300 group-hover:gap-2">
                          Start Free Trial
                          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                        <span className="absolute inset-0 bg-centralaxis-electric-blue transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
                      </Button>
                      <p className="text-xs text-gray-500 text-center mt-2">
                        No credit card required. Free for 14 days.
                      </p>
                    </div>
                  </form>
                </div>
              </AnimationObserver>
            </div>

            <AnimationObserver animation="animate-fade-in" className="mt-20">
              <div className="bg-centralaxis-gray rounded-lg p-8">
                <h2 className="text-2xl font-bold text-centralaxis-navy mb-6 text-center">Frequently Asked Questions</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-centralaxis-navy mb-2">What's included in the free trial?</h3>
                    <p className="text-gray-600">Full access to all DataNexus features including monitoring, asset management, and the digital twin platform.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-centralaxis-navy mb-2">Do I need to provide payment information?</h3>
                    <p className="text-gray-600">No, you can start your 14-day trial without entering any payment details.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-centralaxis-navy mb-2">What happens after the trial ends?</h3>
                    <p className="text-gray-600">You can choose to upgrade to one of our paid plans or your account will be automatically downgraded to our limited free tier.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-centralaxis-navy mb-2">Can I get help setting up my account?</h3>
                    <p className="text-gray-600">Yes, all trial users get access to our dedicated onboarding specialists who will help you set up your account.</p>
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

export default FreeTrialPage;
