'use client';

import React from 'react';
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  // 🎨 LOGO CONFIGURATION - SAME AS NAVBAR
  const USE_CUSTOM_LOGO = false; // Set to true when you add your logo
  const LOGO_PATH = '/logo.png'; // Put your logo in public/logo.png

  // 🔗 SOCIAL MEDIA CONFIGURATION
  // Add your actual social media URLs here
  const socialLinks = {
    linkedin: '', // Example: 'https://linkedin.com/company/ma-agency'
    twitter: '',  // Example: 'https://twitter.com/maagency'
    github: '',   // Example: 'https://github.com/ma-agency'
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialClick = (platform: string, url?: string) => {
    if (url && url !== '') {
      window.open(url, '_blank');
    } 
    // else {
    //   alert(`Please add your ${platform} URL in the Footer component.\n\nUpdate the socialLinks object in Footer.tsx`);
    // }
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
              className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {/* ✅ LOGO SUPPORT - Shows your logo or default gradient box */}
              {USE_CUSTOM_LOGO ? (
                <Image 
                  src={LOGO_PATH} 
                  alt="MA Agency Logo" 
                  width={40} 
                  height={40}
                  className="object-contain"
                />
              ) : (
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-teal-500 flex items-center justify-center font-bold text-lg">
                  MA
                </div>
              )}
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
                  Web Development
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
                onClick={() => handleSocialClick('LinkedIn', socialLinks.linkedin)}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('Twitter', socialLinks.twitter)}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleSocialClick('GitHub', socialLinks.github)}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </button>
              <button 
                onClick={handleEmailClick}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:glow-box transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 text-sm text-gray-400 space-y-1">
              <button 
                onClick={handleEmailClick}
                className="hover:text-cyan-400 transition-colors block"
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