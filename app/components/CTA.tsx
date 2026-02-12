'use client';

import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const CTA = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-600/20"></div>
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent blur-sm transform -rotate-12"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent blur-sm transform rotate-12"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 glow-text">
          Ready to Transform Your
          <br />
          <span className="gradient-text">Business With AI?</span>
        </h2>
        
        <p className="text-lg sm:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
          Join 89+ companies that have revolutionized their operations with our AI solutions
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-primary text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 justify-center"
          >
            Start Your Project <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="btn-secondary text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 justify-center"
          >
            Schedule a Call
          </button>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            Free Consultation
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            No Commitment
          </div>
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
            Custom Solutions
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;