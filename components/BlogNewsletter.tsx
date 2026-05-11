'use client';

import React, { useState } from 'react';

export default function BlogNewsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // In real app: send to API
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="bg-white border-y border-[#E8D5B7] py-14">
      <div className="max-w-md mx-auto px-6 text-center">
        <h3 className="font-semibold text-2xl">Stay inspired with gentle parenting &amp; mindfulness tips</h3>
        <p className="text-sm mt-2 text-[#1F2E2A]/70">Monthly emails with practical ideas for home and classroom. No spam, ever.</p>
        
        {subscribed ? (
          <div className="mt-6 p-4 bg-[#A7C4A0]/20 rounded-2xl text-[#2D5A4A] font-semibold">
            Thank you! You are now subscribed (demo).
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 border border-[#E8D5B7] rounded-2xl px-5 py-3 text-sm focus:outline-none focus:border-[#2D5A4A]" 
            />
            <button type="submit" className="px-8 py-3 bg-[#2D5A4A] text-white font-semibold rounded-2xl text-sm whitespace-nowrap">Subscribe</button>
          </form>
        )}
      </div>
    </section>
  );
}