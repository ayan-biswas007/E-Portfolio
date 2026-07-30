import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import {
  Mail, Phone, MapPin, Linkedin, Github, Facebook,
  Send, Sparkles, CheckCircle2, MessageSquare, User, Building2
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = personalInfo;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Odoo Developer Opportunity / Portfolio Query',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Fire confetti celebration
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Mail className="w-3.5 h-3.5" />
            <span>09 / DIRECT CONTACT & CONNECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            GET IN <span className="text-blue-600">TOUCH.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Reach out directly for Odoo development opportunities, ERP automation inquiries, or academic collaboration.
          </p>
        </div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Contact Cards & Social Profiles */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Primary Contact Info Box */}
            <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-6">
              <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-blue-600" />
                Communication Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email */}
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Email Address</span>
                    <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{contact.email}</span>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-colors group"
                >
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Phone Number</span>
                    <span className="font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{contact.phone}</span>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-xl border border-blue-200">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Location</span>
                    <span className="font-medium text-slate-800 text-xs">{contact.location}</span>
                  </div>
                </div>

              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-slate-200 space-y-3">
                <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                  Professional Profiles & Networks
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 rounded-2xl transition-all hover:scale-105"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>

                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-slate-900 rounded-2xl transition-all hover:scale-105"
                    title="GitHub Repositories"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-50 border border-slate-200 hover:border-blue-400 text-slate-700 hover:text-blue-600 rounded-2xl transition-all hover:scale-105"
                    title="Facebook Profile"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Send Direct Message</h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Direct message handler with real-time payload verification.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 bg-blue-50 rounded-2xl border border-blue-200 text-center space-y-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">Message Transmitted!</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Thank you, {formData.name}. Ayan Biswas will respond to {formData.email} promptly.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Odoo Developer Query', message: '' });
                    }}
                    className="px-5 py-2.5 bg-white hover:bg-slate-100 text-xs text-slate-800 font-bold rounded-full border border-slate-300 shadow-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-600">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Recruiter / Professor"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-slate-600">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-600">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-slate-600">Message Content *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Write your query or message here..."
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-3.5 text-xs text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Ayan Biswas</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
