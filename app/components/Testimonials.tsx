'use client';

import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "MA Agency transformed our operations. The AI automation they built saved us 6 figures in the first year alone.",
      name: "Sarah Chen",
      company: "VP of Operations, TechCorp",
      avatar: "SC"
    },
    {
      quote: "Their chatbot system feels genuinely intelligent. Our customer satisfaction scores jumped 42% in three months.",
      name: "Marcus Rodriguez",
      company: "CEO, RetailPro",
      avatar: "MR"
    },
    {
      quote: "Working with MA Agency was seamless. They delivered a solution that exceeded our expectations in every way.",
      name: "Emily Watkins",
      company: "CTO, DataFlow Inc",
      avatar: "EW"
    }
  ];

  return (
    <section className="py-16 sm:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Client <span className="gradient-text">Testimonials</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-400">Don't just take our word for it</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-6 sm:p-8 space-y-4 sm:space-y-6 hover:glow-box transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base">{testimonial.name}</div>
                  <div className="text-xs sm:text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
              
              <p className="text-sm sm:text-base text-gray-300 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400">★</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;