'use client';

import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string) => {
    // In a real application, these would link to actual social media profiles
    console.log(`Opening ${platform} profile`);
    alert(`This would open the ${platform} profile in a real application`);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@maagency.ai';
  };

  return (
    <footer className="relative border-t border-cyan-500/20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          <div className="space-y-4">
            <button
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center font-bold text-lg">
                MA
              </div>
              <span className="text-xl font-bold">MA Agency</span>
            </button>
            <p className="text-gray-400 text-sm">
              Transforming businesses with cutting-edge AI solutions since 2020.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  AI Automation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Custom AI Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Chatbot Systems
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Data Intelligence
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Careers
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3 sm:mb-4">Connect</h4>
            <div className="flex gap-4">
              <button 
                onClick={() => handleSocialClick('LinkedIn')}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Twitter')}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('GitHub')}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
              >
                <Github className="w-5 h-5" />
              </button>
              <button 
                onClick={handleEmailClick}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-400">
              <button 
                onClick={handleEmailClick}
                className="hover:text-cyan-400 transition-colors block mb-1"
              >
                contact@maagency.ai
              </button>
              <div>+1 (555) 123-4567</div>
            </div>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-cyan-500/20 text-center text-xs sm:text-sm text-gray-500">
          <p>© 2026 MA Agency. All rights reserved. Built with AI, powered by innovation.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;