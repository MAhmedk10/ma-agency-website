'use client';

import React from 'react';
import { Target, Rocket, CheckCircle, TrendingUp } from 'lucide-react';

const Process = () => {
  const processSteps = [
    { icon: <Target className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Strategy', description: 'Deep dive into your goals' },
    { icon: <Rocket className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Build', description: 'Engineer your solution' },
    { icon: <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Deploy', description: 'Launch with precision' },
    { icon: <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />, title: 'Scale', description: 'Optimize and grow' }
  ];

  return (
    <section className="py-16 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            How We <span className="gradient-text">Work</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400">Our proven methodology for delivering AI excellence</p>
        </div>

        <div className="relative">
          {/* Progress Line - Desktop Only */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-teal-500 to-cyan-600 transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-card p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:glow-box transition-all transform hover:-translate-y-2">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center mx-auto text-white">
                    {step.icon}
                  </div>
                  <div className="text-xs sm:text-sm text-cyan-300 font-semibold">Step {index + 1}</div>
                  <h3 className="text-xl sm:text-2xl font-bold">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;