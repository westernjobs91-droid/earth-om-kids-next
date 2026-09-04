'use server';

import { Resend } from 'resend';
import React from 'react';
import { render } from '@react-email/render';
import ContactEmail from '../emails/ContactEmail';
import AutoReplyEmail from '../emails/AutoReplyEmail';

const resend = new Resend(process.env.RESEND_API_KEY!);

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  org: string;
  message: string;
  interests: string[];
  honeypot?: string;
}

export async function sendContactForm(formData: ContactFormData) {
  // Honeypot spam protection - if filled, silently ignore (don't send email)
  if (formData.honeypot && formData.honeypot.trim() !== '') {
    console.warn('Honeypot spam protection triggered');
    return { success: true }; // Pretend success so bots don't know they were blocked
  }

  // Re-validate on server
  if (!formData.name.trim()) {
    return { success: false, error: 'Name is required.' };
  }
  if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
    return { success: false, error: 'Valid email is required.' };
  }
  if (!formData.message.trim()) {
    return { success: false, error: 'Message is required.' };
  }

  // Render the nice React Email template
  const emailHtml = await render(
    React.createElement(ContactEmail, { formData })
  );

  // Render auto-reply email
  const autoReplyHtml = await render(
    React.createElement(AutoReplyEmail, { name: formData.name })
  );

  try {
    const { error } = await resend.emails.send({
      from: 'Earth & OM Kids <hello@earthandom.ca>',
      to: ['earthandomkids@gmail.com'],
      replyTo: formData.email,
      subject: `New Inquiry from ${formData.name} | Earth & OM Kids`,
      html: emailHtml,
    });

    if (error) {
      console.error('Resend error:', error);
      return { 
        success: false, 
        error: 'We couldn\'t send your message right now. Please try again or email us directly at earthandomkids@gmail.com.' 
      };
    }

    // Send auto-reply confirmation to the person who submitted the form
    await resend.emails.send({
      from: 'Earth & OM Kids <hello@earthandom.ca>',
      to: [formData.email],
      subject: 'We received your message | Earth & OM Kids',
      html: autoReplyHtml,
    });

    return { success: true };
  } catch (err) {
    console.error('Failed to send contact form email:', err);
    return { 
      success: false, 
      error: 'Something went wrong. Please try again later or contact us directly.' 
    };
  }
}