'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { sendContactForm } from '@/app/actions';

interface FormData {
  name: string;
  email: string;
  phone: string;
  org: string;
  message: string;
  interests: string[];
  honeypot: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    org: '',
    message: '',
    interests: [],
    honeypot: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name as keyof Omit<FormData, 'interests'>]: value,
    }));
    if (submitError) setSubmitError(null);
  };

  const handleCheckbox = (value: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(value)
        ? prev.interests.filter(i => i !== value)
        : [...prev.interests, value]
    }));
    if (submitError) setSubmitError(null);
  };

  const validateForm = (): string | null => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.email.trim()) return 'Please enter your email address.';
    if (!/\S+@\S+\.\S+/.test(formData.email)) return 'Please enter a valid email address.';
    if (!formData.message.trim()) return 'Please tell us a bit about what you\'re looking for.';
    return null;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    const error = validateForm();
    if (error) {
      setSubmitError(error);
      return;
    }

    setIsLoading(true);

    const result = await sendContactForm(formData);

    setIsLoading(false);

    if (result.success) {
      setIsSubmitted(true);
    } else {
      setSubmitError(result.error || 'Something went wrong. Please try again.');
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setSubmitError(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      org: '',
      message: '',
      interests: [],
      honeypot: '',
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mx-auto w-20 h-20 bg-[#A7C4A0]/20 rounded-full flex items-center justify-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
              >
                <i className="fa-solid fa-check-circle text-6xl text-[#2D5A4A]"></i>
              </motion.div>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold heading-serif tracking-tight mb-4">Thank you!</h1>
            <p className="text-xl text-[#1F2E2A]/70 mb-3">Your message has been received.</p>
            <p className="text-lg text-[#1F2E2A]/70 mb-10">Taran will personally review your request and get back to you within 1–2 business days.</p>
            
            <button
              onClick={resetForm}
              className="group inline-flex items-center gap-x-3 px-8 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] active:bg-[#16221F] transition-all text-white font-semibold rounded-2xl text-lg"
            >
              Send another message
              <i className="fa-solid fa-arrow-right group-hover:translate-x-0.5 transition"></i>
            </button>
            
            <p className="mt-8 text-xs text-[#2D5A4A]/50">We’re excited to connect with you.</p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="text-center mb-10">
              <div className="inline px-4 py-1 bg-[#A7C4A0]/20 text-[#2D5A4A] text-xs font-semibold tracking-[1.5px] rounded-full mb-3">LET&apos;S CONNECT</div>
              <h1 className="text-5xl tracking-tighter font-semibold heading-serif">We&apos;d love to hear from you</h1>
              <p className="mt-4 text-xl text-[#1F2E2A]/70">Whether you&apos;re a school, centre, or family looking to bring calm and joy through yoga — we&apos;re here to help.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-10 border border-[#E8D5B7] soft-shadow space-y-6">
              {/* Honeypot field for basic spam protection - hidden from real users, bots often fill it */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              {submitError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-2xl text-red-700 text-sm flex items-start gap-x-3">
                  <i className="fa-solid fa-exclamation-circle mt-0.5"></i>
                  <span>{submitError}</span>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Your Name <span className="text-[#E07A5F]">*</span></label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    className="w-full border border-[#E8D5B7] rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#2D5A4A] transition-colors placeholder:text-[#1F2E2A]/40" 
                    placeholder="Alex Rivera"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Email Address <span className="text-[#E07A5F]">*</span></label>
                  <input 
                    type="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange} 
                    className="w-full border border-[#E8D5B7] rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#2D5A4A] transition-colors placeholder:text-[#1F2E2A]/40" 
                    placeholder="you@school.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange} 
                    className="w-full border border-[#E8D5B7] rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#2D5A4A] transition-colors placeholder:text-[#1F2E2A]/40" 
                    placeholder="(416) 555-0123"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-1.5">Organization / School (if applicable)</label>
                  <input 
                    type="text" 
                    name="org" 
                    value={formData.org} 
                    onChange={handleChange} 
                    className="w-full border border-[#E8D5B7] rounded-2xl px-5 py-3.5 focus:outline-none focus:border-[#2D5A4A] transition-colors placeholder:text-[#1F2E2A]/40" 
                    placeholder="Sunshine Montessori"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-3">I&apos;m interested in... <span className="text-[#1F2E2A]/50 font-normal">(select all that apply)</span></label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['School Program', 'After-School', 'Workshop', 'Family Session'].map((item) => {
                    const isChecked = formData.interests.includes(item);
                    return (
                      <label 
                        key={item} 
                        className={`flex items-center gap-x-3 bg-[#F8F1E9] px-5 py-3.5 rounded-2xl cursor-pointer transition-all text-sm border ${isChecked ? 'border-[#2D5A4A] bg-[#A7C4A0]/10' : 'border-transparent hover:bg-[#E8D5B7]/40'}`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckbox(item)}
                          className="accent-[#2D5A4A] w-4 h-4"
                        />
                        <span className={isChecked ? 'font-medium text-[#2D5A4A]' : ''}>{item}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-1.5">Tell us more about what you&apos;re looking for <span className="text-[#E07A5F]">*</span></label>
                <textarea 
                  name="message" 
                  required 
                  rows={5} 
                  value={formData.message} 
                  onChange={handleChange} 
                  placeholder="E.g. We’re a Montessori school looking for an 8-week series for our 3–5 year olds..." 
                  className="w-full border border-[#E8D5B7] rounded-3xl px-5 py-4 focus:outline-none focus:border-[#2D5A4A] transition-colors placeholder:text-[#1F2E2A]/40 resize-y min-h-[120px]"
                />
                <p className="mt-1.5 text-xs text-[#2D5A4A]/50">The more details you share, the better we can tailor a proposal.</p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full sm:w-auto px-10 py-4 bg-[#2D5A4A] hover:bg-[#1F2E2A] disabled:bg-[#2D5A4A]/70 disabled:cursor-not-allowed transition-all text-white font-semibold rounded-2xl text-lg flex items-center justify-center gap-x-2 active:scale-[0.985]"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <i className="fa-solid fa-paper-plane"></i>
                    </>
                  )}
                </button>
                <p className="text-xs text-[#2D5A4A]/60 text-center sm:text-left">We typically respond within 1–2 business days.</p>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}