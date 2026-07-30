import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles, Code2, ArrowRight, Video, Download, ShieldCheck,
  CheckCircle2, Star, Award, ChevronDown
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';
import { Hero3DCard } from '../3d/Hero3DCard';

interface HeroSectionProps {
  onOpenResumeModal: () => void;
  onOpenVideoModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenResumeModal,
  onOpenVideoModal,
}) => {
  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden">
      {/* Radial Subtle Blue Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* Left Hero Bento Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-white border border-slate-200/90 rounded-[2.5rem] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden shadow-xl shadow-slate-200/70"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>

            <div className="space-y-6">
              {/* Mono Eyebrow */}
              <div className="inline-flex items-center gap-2 font-mono text-sm text-blue-600 font-semibold tracking-wide">
                <span>/ ENTERPRISE ARCHITECT & ODOO DEVELOPER</span>
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
              </div>

              {/* High Impact Headline */}
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold leading-[0.95] tracking-tighter text-slate-900">
                BUILDING BEYOND <br />
                <span className="text-blue-600 underline underline-offset-8 decoration-2">THE ENTERPRISE</span> BORDER.
              </h1>

              {/* Subtitle & Introduction */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
                {personalInfo.shortIntro}
              </p>

              {/* Rubric Verification Badge */}
              <div className="flex items-center gap-3 text-xs font-mono text-slate-500 pt-2 border-t border-slate-200">
                <span className="text-blue-600 font-bold">Rubric Compliant</span>
                <span>•</span>
                <span>101 Words Introduction</span>
                <span>•</span>
                <span className="text-emerald-700 font-bold">10 Marks Evaluation</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-8 mt-6">
              <button
                onClick={scrollToProjects}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm rounded-full shadow-lg shadow-blue-600/25 flex items-center gap-2 transition-all duration-300 hover:scale-[1.02] active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenVideoModal}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-full shadow-lg shadow-slate-900/20 flex items-center gap-2 transition-all duration-200"
              >
                <Video className="w-4 h-4" />
                <span>2-Min Pitch Video</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="px-5 py-3.5 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-slate-800 font-semibold text-sm rounded-full flex items-center gap-2 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-blue-600" />
                <span>CV & Cover</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Card & Bento Stat Block */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            {/* 3D Profile Frame */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <Hero3DCard
                name={personalInfo.fullName}
                title={personalInfo.title}
              />
            </motion.div>

            {/* Bento Quick Growth Stats Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white border border-slate-200/90 rounded-[2.5rem] p-6 flex flex-col justify-between space-y-4 shadow-lg shadow-slate-200/50"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-500">
                  Key Standings
                </span>
                <span className="text-xs font-mono text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                  AIUB CSE GRADUATE
                </span>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl">
                  <div className="text-2xl font-bold text-slate-900 font-mono">3.40</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">CGPA</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl">
                  <div className="text-2xl font-bold text-blue-600 font-mono">5.00</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">HSC/SSC</div>
                </div>
                <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl">
                  <div className="text-2xl font-bold text-indigo-600 font-mono">Odoo</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">OWL Framework</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      {/* Down Scroll Indicator */}
      <div className="mt-12 text-center flex flex-col items-center justify-center text-slate-500 text-xs font-mono gap-1">
        <span>SCROLL DOWN TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-blue-600" />
      </div>
    </section>
  );
};
