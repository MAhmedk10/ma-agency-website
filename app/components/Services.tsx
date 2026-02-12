'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Zap, Sparkles, Target, Eye, ChevronRight } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    Object.values(observerRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const services = [
    {
      id: 'service-1',
      title: 'AI Automation',
      description: 'Transform repetitive workflows into intelligent systems. We build custom automation solutions that scale with your business, reducing costs by up to 70% while increasing accuracy.',
      icon: <Zap className="w-12 h-12 sm:w-16 sm:h-16" />,
      direction: 'left'
    },
    {
      id: 'service-2',
      title: 'Custom AI Solutions',
      description: 'Bespoke AI systems designed for your unique challenges. From machine learning models to neural networks, we engineer solutions that give you a competitive edge.',
      icon: <Sparkles className="w-12 h-12 sm:w-16 sm:h-16" />,
      direction: 'right'
    },
    {
      id: 'service-3',
      title: 'Chatbot Systems',
      description: 'Next-generation conversational AI that understands context and delivers human-like interactions. Boost customer satisfaction while reducing support costs by 60%.',
      icon: <Target className="w-12 h-12 sm:w-16 sm:h-16" />,
      direction: 'left'
    },
    {
      id: 'service-4',
      title: 'Data Intelligence',
      description: 'Turn raw data into strategic insights. Our advanced analytics and predictive models help you make data-driven decisions with confidence.',
      icon: <Eye className="w-12 h-12 sm:w-16 sm:h-16" />,
      direction: 'right'
    }
  ];

  return (
    <section id="services" className="py-16 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Cutting-edge AI solutions tailored to transform your business operations
          </p>
        </div>

        <div className="space-y-16 sm:space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              id={service.id}
              ref={(el) => {observerRefs.current[service.id] = el}}
              className={`grid md:grid-cols-2 gap-8 sm:gap-12 items-center ${
                isVisible[service.id] 
                  ? service.direction === 'left' ? 'slide-in-left' : 'slide-in-right'
                  : 'opacity-0'
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="text-cyan-400">{service.icon}</div>
                    <h3 className="text-2xl sm:text-4xl font-bold">{service.title}</h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="btn-secondary"
                    >
                      Learn More <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="relative h-64 sm:h-80 glass-card glow-box p-6 sm:p-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl"></div>
                    <div className="relative text-cyan-300 opacity-20">
                      {service.icon}
                      <div className="absolute inset-0 scale-150 opacity-50">{service.icon}</div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative h-64 sm:h-80 glass-card glow-box p-6 sm:p-8 flex items-center justify-center order-2 md:order-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl"></div>
                    <div className="relative text-cyan-300 opacity-20">
                      {service.icon}
                      <div className="absolute inset-0 scale-150 opacity-50">{service.icon}</div>
                    </div>
                  </div>
                  <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                    <div className="text-cyan-400">{service.icon}</div>
                    <h3 className="text-2xl sm:text-4xl font-bold">{service.title}</h3>
                    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                    <button 
                      onClick={() => scrollToSection('contact')}
                      className="btn-secondary"
                    >
                      Learn More <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;