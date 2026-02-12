'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const caseStudies = [
    {
      company: 'FinTech Solutions',
      problem: 'Manual data processing taking 40+ hours weekly',
      solution: 'Custom AI automation pipeline',
      result: '95% time reduction, $180K annual savings'
    },
    {
      company: 'E-Commerce Platform',
      problem: 'Low customer engagement, 23% cart abandonment',
      solution: 'AI-powered chatbot with predictive recommendations',
      result: '67% increase in conversions, 8% cart abandonment'
    },
    {
      company: 'Healthcare Provider',
      problem: 'Inefficient patient scheduling and data management',
      solution: 'Intelligent scheduling system with data analytics',
      result: '40% more patients served, 99.2% accuracy'
    }
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400">Real results for real businesses</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="glass-card glow-border p-6 sm:p-8 space-y-4 sm:space-y-6 hover:scale-105 transition-transform cursor-pointer group"
            >
              <div className="text-sm text-cyan-300 font-semibold">{study.company}</div>
              
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-500 mb-1">PROBLEM</div>
                  <div className="text-sm text-gray-300 leading-relaxed">{study.problem}</div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 mb-1">SOLUTION</div>
                  <div className="text-sm text-gray-300 leading-relaxed">{study.solution}</div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-500 mb-1">RESULT</div>
                  <div className="text-base sm:text-lg font-bold gradient-text">{study.result}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-cyan-500/20">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-cyan-400 text-sm flex items-center gap-2 group-hover:gap-4 transition-all"
                >
                  View Case Study <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;