'use client';

import React from 'react';

const TrustStrip = () => {
  const companies = ['TechCorp', 'DataFlow', 'RetailPro', 'FinServe', 'CloudScale', 'AI Ventures'];

  return (
    <section className="py-8 sm:py-12 border-y border-cyan-500/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      <div className="flex items-center gap-8 sm:gap-16 marquee">
        {[...Array(2)].map((_, idx) => (
          <div key={idx} className="flex items-center gap-8 sm:gap-16 px-4 sm:px-8">
            {companies.map((company, index) => (
              <div key={index} className="text-gray-400 text-lg sm:text-2xl font-semibold whitespace-nowrap">
                {company}
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustStrip;