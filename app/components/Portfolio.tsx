'use client';

import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';

const Portfolio = () => {
  const [selectedCase, setSelectedCase] = useState<number | null>(null);

  const caseStudies = [
    {
      company: 'FinTech Solutions',
      industry: 'Financial Services',
      problem: 'Manual data processing taking 40+ hours weekly',
      solution: 'Custom AI automation pipeline',
      result: '95% time reduction, $180K annual savings',
      details: {
        challenge: 'FinTech Solutions was spending over 40 hours per week manually processing financial data from multiple sources. This led to delays, human errors, and prevented the team from focusing on strategic tasks.',
        approach: 'We developed a custom AI automation pipeline that integrated with their existing systems, using machine learning to validate and process data automatically.',
        outcome: 'The solution reduced processing time from 40+ hours to just 2 hours per week, saving the company $180,000 annually and improving data accuracy to 99.8%.',
        metrics: [
          { label: 'Time Saved', value: '95%' },
          { label: 'Annual Savings', value: '$180K' },
          { label: 'Accuracy', value: '99.8%' },
          { label: 'ROI', value: '12 months' }
        ]
      }
    },
    {
      company: 'E-Commerce Platform',
      industry: 'Retail',
      problem: 'Low customer engagement, 23% cart abandonment',
      solution: 'AI-powered chatbot with predictive recommendations',
      result: '67% increase in conversions, 8% cart abandonment',
      details: {
        challenge: 'The e-commerce platform struggled with high cart abandonment rates and low customer engagement. Customers were leaving without making purchases due to lack of personalized assistance.',
        approach: 'We implemented an AI-powered chatbot that provides personalized product recommendations, answers questions in real-time, and uses predictive analytics to identify at-risk customers.',
        outcome: 'Cart abandonment dropped from 23% to just 8%, and overall conversions increased by 67%. Customer satisfaction scores improved by 42%.',
        metrics: [
          { label: 'Conversion Increase', value: '+67%' },
          { label: 'Cart Abandonment', value: '8%' },
          { label: 'Customer Satisfaction', value: '+42%' },
          { label: 'Revenue Impact', value: '+$2.3M' }
        ]
      }
    },
    {
      company: 'Healthcare Provider',
      industry: 'Healthcare',
      problem: 'Inefficient patient scheduling and data management',
      solution: 'Intelligent scheduling system with data analytics',
      result: '40% more patients served, 99.2% accuracy',
      details: {
        challenge: 'The healthcare provider faced scheduling conflicts, long wait times, and data management issues that prevented them from serving more patients efficiently.',
        approach: 'We built an intelligent scheduling system powered by AI that optimizes appointment slots, predicts no-shows, and streamlines patient data management.',
        outcome: 'The provider now serves 40% more patients with the same resources, reduced wait times by 60%, and achieved 99.2% scheduling accuracy.',
        metrics: [
          { label: 'Patient Capacity', value: '+40%' },
          { label: 'Wait Time Reduction', value: '60%' },
          { label: 'Scheduling Accuracy', value: '99.2%' },
          { label: 'Staff Efficiency', value: '+35%' }
        ]
      }
    }
  ];

  // ✅ MODAL FUNCTIONS - Opens popup instead of scrolling to CTA
  const openCaseModal = (index: number) => {
    setSelectedCase(index);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseModal = () => {
    setSelectedCase(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
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
                <div className="space-y-1">
                  <div className="text-sm text-cyan-300 font-semibold">{study.company}</div>
                  <div className="text-xs text-gray-500">{study.industry}</div>
                </div>
                
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
                  {/* ✅ BUTTON NOW OPENS MODAL INSTEAD OF SCROLLING */}
                  <button 
                    onClick={() => openCaseModal(index)}
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

      {/* ✅ CASE STUDY MODAL - NEW POPUP INSTEAD OF SCROLLING */}
      {selectedCase !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeCaseModal}
        >
          <div 
            className="glass-card glow-border max-w-4xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  {caseStudies[selectedCase].company}
                </h3>
                <div className="text-sm text-cyan-400">{caseStudies[selectedCase].industry}</div>
              </div>
              <button 
                onClick={closeCaseModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">The Challenge</h4>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudies[selectedCase].details.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">Our Approach</h4>
                <p className="text-gray-300 leading-relaxed">
                  {caseStudies[selectedCase].details.approach}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan-300 mb-2">The Outcome</h4>
                <p className="text-gray-300 leading-relaxed mb-4">
                  {caseStudies[selectedCase].details.outcome}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {caseStudies[selectedCase].details.metrics.map((metric, idx) => (
                    <div key={idx} className="glass-card p-4 text-center">
                      <div className="text-2xl font-bold gradient-text mb-1">{metric.value}</div>
                      <div className="text-xs text-gray-400">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  closeCaseModal();
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary justify-center"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={closeCaseModal}
                className="btn-secondary justify-center"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;