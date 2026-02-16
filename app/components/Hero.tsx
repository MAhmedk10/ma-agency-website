'use client';

import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Slightly longer delay for smooth initial render without loading screen
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 150);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="neural-network" style={{ top: '10%', right: '-10%' }}></div>
      <div className="neural-network" style={{ bottom: '-20%', left: '-15%', animationDuration: '25s' }}></div>
      
      {/* Floating Light Beams */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-96 bg-gradient-to-b from-cyan-500/30 to-transparent blur-sm transform -rotate-12 float-animation"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-64 bg-gradient-to-b from-teal-500/30 to-transparent blur-sm transform rotate-12 float-animation" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <div className="accent-line absolute left-0 top-0 h-full hidden md:block"></div>
          
          {/* ✨ ANIMATED CONTENT - Smooth timing without loading screen */}
          <div className="space-y-4 md:ml-8">
            <div className={`inline-block px-4 py-2 rounded-full glass-card text-sm font-medium ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.1s' }}>
              <span className="gradient-text">🚀 AI-Powered Excellence</span>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              Transform Your
              <br />
              <span className="gradient-text glow-text">Business</span>
              <br />
              With AI
            </h1>
            
            <p className={`text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
              We build intelligent automation systems, custom AI solutions, and cutting-edge chatbots that scale your operations and maximize efficiency.
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
              <button 
                onClick={() => scrollToSection('contact')}
                className="btn-primary text-base sm:text-lg justify-center sm:justify-start"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="btn-secondary text-base sm:text-lg justify-center sm:justify-start"
              >
                See Our Work
              </button>
            </div>
            
            <div className={`grid grid-cols-3 gap-4 sm:gap-8 pt-6 text-sm ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
              <div>
                <div className="text-xl sm:text-2xl font-bold gradient-text">247+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Projects Delivered</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold gradient-text">89+</div>
                <div className="text-gray-400 text-xs sm:text-sm">Happy Clients</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold gradient-text">98%</div>
                <div className="text-gray-400 text-xs sm:text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual Experience */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px]">
          {/* Floating Glass Panels */}
          <div className={`absolute top-0 right-0 w-64 sm:w-80 h-48 sm:h-64 glass-card glow-box p-4 sm:p-6 transform rotate-3 float-animation ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="text-xs sm:text-sm text-cyan-300 mb-2">AI Performance</div>
            <div className="text-2xl sm:text-4xl font-bold mb-4">+127%</div>
            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-cyan-500 to-teal-500 w-4/5 rounded-full"></div>
            </div>
          </div>
          
          <div className={`absolute bottom-20 left-0 w-56 sm:w-72 h-44 sm:h-56 glass-card glow-box p-4 sm:p-6 transform -rotate-2 float-animation ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="text-xs sm:text-sm text-teal-300 mb-2">Automation Status</div>
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Data Processing</span>
                <span className="text-green-400 text-xs">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">Model Training</span>
                <span className="text-green-400 text-xs">Running</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm">API Integration</span>
                <span className="text-green-400 text-xs">Live</span>
              </div>
            </div>
          </div>
          
          {/* Gradient Orb */}
          <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 rounded-full pulse-glow ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}
               style={{
                 background: 'radial-gradient(circle, rgba(14, 165, 233, 0.4) 0%, rgba(6, 182, 212, 0.3) 50%, transparent 70%)',
                 filter: 'blur(40px)',
                 animationDelay: '0.1s'
               }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;