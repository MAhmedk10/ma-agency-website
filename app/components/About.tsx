'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Users, Globe, Zap, TrendingUp } from 'lucide-react';

const About = () => {
  const [counts, setCounts] = useState({ projects: 0, clients: 0, success: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targets = { projects: 247, clients: 89, success: 98 };
      let step = 0;

      const timer = setInterval(() => {
        step++;
        setCounts({
          projects: Math.floor((targets.projects / steps) * step),
          clients: Math.floor((targets.clients / steps) * step),
          success: Math.floor((targets.success / steps) * step),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" className="py-16 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center mb-12 sm:mb-20">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
              About <span className="gradient-text">MA Agency</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              We're not just another AI agency. We're a team of visionaries, engineers, and strategists who believe in the transformative power of artificial intelligence.
            </p>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
              Our mission is to democratize AI technology, making it accessible and impactful for businesses of all sizes. We combine cutting-edge research with practical implementation to deliver solutions that actually work.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="glass-card p-4 sm:p-6 space-y-2 hover:glow-box transition-all cursor-pointer">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              <div className="text-xs sm:text-sm text-gray-400">Expert Team</div>
              <div className="text-lg sm:text-2xl font-bold">25+ Specialists</div>
            </div>
            <div className="glass-card p-4 sm:p-6 space-y-2 hover:glow-box transition-all cursor-pointer">
              <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
              <div className="text-xs sm:text-sm text-gray-400">Global Reach</div>
              <div className="text-lg sm:text-2xl font-bold">12 Countries</div>
            </div>
            <div className="glass-card p-4 sm:p-6 space-y-2 hover:glow-box transition-all cursor-pointer">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-cyan-400" />
              <div className="text-xs sm:text-sm text-gray-400">Innovation</div>
              <div className="text-lg sm:text-2xl font-bold">AI-First</div>
            </div>
            <div className="glass-card p-4 sm:p-6 space-y-2 hover:glow-box transition-all cursor-pointer">
              <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-teal-400" />
              <div className="text-xs sm:text-sm text-gray-400">Growth</div>
              <div className="text-lg sm:text-2xl font-bold">300% YoY</div>
            </div>
          </div>
        </div>

        {/* Stats with Animated Counters */}
        <div
          ref={statsRef}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8"
        >
          <div className="glass-card stat-card p-6 sm:p-10 text-center space-y-3 sm:space-y-4 glow-border">
            <div className="text-4xl sm:text-6xl font-bold gradient-text">{counts.projects}+</div>
            <div className="text-lg sm:text-xl text-gray-300">Projects Completed</div>
            <p className="text-xs sm:text-sm text-gray-500">Delivering excellence across industries</p>
          </div>
          <div className="glass-card stat-card p-6 sm:p-10 text-center space-y-3 sm:space-y-4 glow-border">
            <div className="text-4xl sm:text-6xl font-bold gradient-text">{counts.clients}+</div>
            <div className="text-lg sm:text-xl text-gray-300">Clients Served</div>
            <p className="text-xs sm:text-sm text-gray-500">From startups to enterprises</p>
          </div>
          <div className="glass-card stat-card p-6 sm:p-10 text-center space-y-3 sm:space-y-4 glow-border sm:col-span-2 md:col-span-1">
            <div className="text-4xl sm:text-6xl font-bold gradient-text">{counts.success}%</div>
            <div className="text-lg sm:text-xl text-gray-300">Success Rate</div>
            <p className="text-xs sm:text-sm text-gray-500">Measured by client satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;