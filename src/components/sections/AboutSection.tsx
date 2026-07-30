import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Compass, ShieldCheck, Target, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const AboutSection: React.FC = () => {
  const { aboutMe } = personalInfo;

  return (
    <section id="about" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01 / ABOUT AYAN BISWAS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ENGINEERING PURPOSE & <span className="text-blue-600">EXPERTISE.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detailed personal background, career objectives, core technical competencies, and professional strengths.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Column: Personal Intro & Career Objective */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {/* Personal Introduction Card */}
            <div className="bg-white border border-slate-200/90 p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-4 relative overflow-hidden group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Personal Background</h3>
                    <span className="text-xs text-slate-500 font-mono">AIUB Graduate & Odoo Developer</span>
                  </div>
                </div>
                <span className="text-xl font-mono text-blue-600 font-bold">01</span>
              </div>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed pt-2">
                {aboutMe.personalIntroduction}
              </p>
            </div>

            {/* Career Objective Card */}
            <div className="bg-white border border-slate-200/90 p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Career Objective</h3>
                    <span className="text-xs text-blue-600 font-mono">Target: Sysnova Information Systems Ltd.</span>
                  </div>
                </div>
                <span className="text-xl font-mono text-blue-600 font-bold">02</span>
              </div>
              <p className="text-slate-800 text-sm sm:text-base leading-relaxed bg-slate-50 p-5 rounded-2xl border border-slate-200">
                "{aboutMe.careerObjectives}"
              </p>
            </div>
          </motion.div>

          {/* Right Column: Career Interests & Professional Strengths */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6 flex flex-col justify-between"
          >
            {/* Career Interests Card */}
            <div className="bg-white border border-slate-200/90 p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Specialized Domains</h3>
                    <span className="text-xs text-slate-500 font-mono">Core Focus Areas</span>
                  </div>
                </div>
                <span className="text-xl font-mono text-blue-600 font-bold">03</span>
              </div>
              <ul className="space-y-3 pt-2">
                {aboutMe.careerInterests.map((interest, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-700 group">
                    <span className="p-1 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                    <span className="group-hover:text-slate-900 transition-colors">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Professional Strengths Card */}
            <div className="bg-white border border-slate-200/90 p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">Professional Strengths</h3>
                    <span className="text-xs text-slate-500 font-mono">Technical & Tactical Superiority</span>
                  </div>
                </div>
                <span className="text-xl font-mono text-blue-600 font-bold">04</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {aboutMe.professionalStrengths.map((strength, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-xs text-slate-800 flex items-center gap-2 hover:border-blue-300 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
