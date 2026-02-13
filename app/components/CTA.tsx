'use client';

import React, { useState } from 'react';
import { ArrowRight, CheckCircle, X, Calendar, Mail, Phone, User, Building } from 'lucide-react';

const CTA = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    service: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // 📧 EMAIL CONFIGURATION - HOW TO GET NOTIFIED WHEN USERS CONTACT YOU
  
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwvnlzye'; // ← REPLACE WITH YOUR FORM ID
  
  // "Schedule a Call" button

  const CALENDLY_URL = 'https://calendly.com/astrik410/30min'; // ← REPLACE WITH YOUR LINK
  

  const openCalendly = () => {
      window.open(CALENDLY_URL, '_blank');
  };

  const openContactForm = () => {
    setShowContactForm(true);
    document.body.style.overflow = 'hidden';
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    document.body.style.overflow = 'auto';
    setSubmitStatus('idle');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try 
    {
        // ✅ Using FormSpree - You'll get emails when users submit
        const response = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
      if (response.ok) {
        setSubmitStatus('success');
        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: '',
            service: 'general'
          });
          closeContactForm();
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="py-16 sm:py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-teal-500/20 to-cyan-600/20"></div>
          <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent blur-sm transform -rotate-12"></div>
          <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-teal-500/50 to-transparent blur-sm transform rotate-12"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 glow-text">
            Ready to Transform Your
            <br />
            <span className="gradient-text">Business With AI?</span>
          </h2>
          
          <p className="text-lg sm:text-2xl text-gray-300 mb-8 sm:mb-12 leading-relaxed">
            Join 89+ companies that have revolutionized their operations with our AI solutions
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            {/* ✅ START YOUR PROJECT - Opens contact form */}
            <button 
              onClick={openContactForm}
              className="btn-primary text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 justify-center"
            >
              Start Your Project <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            {/* ✅ SCHEDULE A CALL - Opens Calendly or form */}
            <button 
              onClick={openCalendly}
              className="btn-secondary text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 justify-center"
            >
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
              Schedule a Call
            </button>
          </div>

          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              Free Consultation
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              No Commitment
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
              Custom Solutions
            </div>
          </div>
        </div>
      </section>

      {/* ✅ CONTACT FORM MODAL - YOU GET NOTIFIED VIA EMAIL */}
      {showContactForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeContactForm}
        >
          <div 
            className="glass-card glow-border max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                  Start Your AI Journey
                </h3>
                <p className="text-gray-400">Tell us about your project and we'll get back to you within 24 hours</p>
              </div>
              <button 
                onClick={closeContactForm}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h4 className="text-2xl font-bold text-green-400 mb-2">Thank You!</h4>
                <p className="text-gray-300">We've received your message and will get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Building className="w-4 h-4 inline mr-2" />
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="ai-automation">AI Automation</option>
                    <option value="custom-ai">Custom AI Solutions</option>
                    <option value="chatbot">Chatbot Systems</option>
                    <option value="data-intelligence">Data Intelligence</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Tell us about your project *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-cyan-500/30 focus:border-cyan-500 focus:outline-none text-white resize-none"
                    placeholder="Describe your project, goals, and challenges..."
                  />
                </div>

                {submitStatus === 'error' && (
                  <div className="text-red-400 text-sm">
                    ⚠️ Something went wrong. Please check your FormSpree configuration or try again later.
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary justify-center flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    type="button"
                    onClick={closeContactForm}
                    className="btn-secondary justify-center"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CTA;