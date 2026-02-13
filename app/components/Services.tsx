'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Zap, Sparkles, Target, Eye, ChevronRight, X } from 'lucide-react';
import Image from 'next/image';

const Services = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const observerRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  // 🎨 IMAGE CONFIGURATION - SET TO TRUE TO USE YOUR SERVICE IMAGES
  const USE_SERVICE_IMAGES = false; // Change to true when you add images to public/services/

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

  const services = [
    {
      id: 'service-1',
      title: 'AI Automation',
      description: 'Transform repetitive workflows into intelligent systems. We build custom automation solutions that scale with your business, reducing costs by up to 70% while increasing accuracy.',
      icon: <Zap className="w-12 h-12 sm:w-16 sm:h-16" />,
      image: '/services/ai-automation.jpg', // Add your image here
      direction: 'left',
      details: 'Our AI automation solutions include workflow optimization, intelligent data processing, automated reporting, and custom integration with your existing systems. We help you eliminate manual tasks and focus on what matters most.'
    },
    {
      id: 'service-2',
      title: 'Custom AI Solutions',
      description: 'Bespoke AI systems designed for your unique challenges. From machine learning models to neural networks, we engineer solutions that give you a competitive edge.',
      icon: <Sparkles className="w-12 h-12 sm:w-16 sm:h-16" />,
      image: '/services/custom-ai.jpg',
      direction: 'right',
      details: 'We develop custom machine learning models, predictive analytics systems, computer vision solutions, and natural language processing applications tailored to your specific business needs and goals.'
    },
    {
      id: 'service-3',
      title: 'Chatbot Systems',
      description: 'Next-generation conversational AI that understands context and delivers human-like interactions. Boost customer satisfaction while reducing support costs by 60%.',
      icon: <Target className="w-12 h-12 sm:w-16 sm:h-16" />,
      image: '/services/chatbot.jpg',
      direction: 'left',
      details: 'Our chatbot solutions feature multi-language support, sentiment analysis, 24/7 availability, seamless handoff to human agents, and integration with your CRM and ticketing systems for a complete customer service solution.'
    },
    {
      id: 'service-4',
      title: 'Data Intelligence',
      description: 'Turn raw data into strategic insights. Our advanced analytics and predictive models help you make data-driven decisions with confidence.',
      icon: <Eye className="w-12 h-12 sm:w-16 sm:h-16" />,
      image: '/services/data-intelligence.jpg',
      direction: 'right',
      details: 'We provide comprehensive data analytics, business intelligence dashboards, predictive modeling, data visualization, and actionable insights to drive your business forward and stay ahead of the competition.'
    }
  ];

  // ✅ MODAL FUNCTIONS - Opens popup instead of scrolling to CTA
  const openServiceModal = (index: number) => {
    setSelectedService(index);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
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
                      {/* ✅ BUTTON NOW OPENS MODAL INSTEAD OF SCROLLING */}
                      <button 
                        onClick={() => openServiceModal(index)}
                        className="btn-secondary"
                      >
                        Learn More <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* ✅ IMAGE SUPPORT - Shows your image or icon placeholder */}
                    <div 
                      className="relative h-64 sm:h-80 glass-card glow-box overflow-hidden group cursor-pointer"
                      onClick={() => openServiceModal(index)}
                    >
                      {USE_SERVICE_IMAGES ? (
                        <Image 
                          src={service.image} 
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative text-cyan-300 opacity-20">
                              {service.icon}
                              <div className="absolute inset-0 scale-150 opacity-50">{service.icon}</div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-gray-400">
                            Click to learn more
                          </div>
                        </>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div 
                      className="relative h-64 sm:h-80 glass-card glow-box overflow-hidden order-2 md:order-1 group cursor-pointer"
                      onClick={() => openServiceModal(index)}
                    >
                      {USE_SERVICE_IMAGES ? (
                        <Image 
                          src={service.image} 
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-teal-500/10 rounded-3xl"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative text-cyan-300 opacity-20">
                              {service.icon}
                              <div className="absolute inset-0 scale-150 opacity-50">{service.icon}</div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 text-center text-sm text-gray-400">
                            Click to learn more
                          </div>
                        </>
                      )}
                    </div>
                    <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
                      <div className="text-cyan-400">{service.icon}</div>
                      <h3 className="text-2xl sm:text-4xl font-bold">{service.title}</h3>
                      <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                      <button 
                        onClick={() => openServiceModal(index)}
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

      {/* ✅ SERVICE DETAILS MODAL - NEW POPUP INSTEAD OF SCROLLING */}
      {selectedService !== null && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeServiceModal}
        >
          <div 
            className="glass-card glow-border max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <div className="text-cyan-400">
                  {services[selectedService].icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold">
                  {services[selectedService].title}
                </h3>
              </div>
              <button 
                onClick={closeServiceModal}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {USE_SERVICE_IMAGES && (
              <div className="relative h-64 sm:h-80 mb-6 rounded-2xl overflow-hidden">
                <Image 
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            <div className="space-y-4">
              <p className="text-lg text-gray-300 leading-relaxed">
                {services[selectedService].description}
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                {services[selectedService].details}
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  closeServiceModal();
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary justify-center"
              >
                Get Started <ChevronRight className="w-5 h-5" />
              </button>
              <button 
                onClick={closeServiceModal}
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

export default Services;