'use client';

import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import TrustStrip from './TrustStrip';
import Services from './Services';
import About from './About';
import Process from './Process';
import Portfolio from './Portfolio';
import Testimonials from './Testimonials';
import CTA from './CTA';
import Footer from './Footer';

const MAAgencyWebsite = () => {
  return (
    <div className="relative bg-[#0a0118] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <About />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default MAAgencyWebsite;