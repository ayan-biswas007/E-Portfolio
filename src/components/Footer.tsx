import React from 'react';
import { ArrowUp, Sparkles, Heart, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-900 border-t border-slate-800 pt-16 pb-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-600 p-0.5 shadow-lg shadow-blue-600/20">
                <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center font-bold font-mono text-white">
                  AB
                </div>
              </div>
              <div>
                <span className="font-bold text-base text-white block">{personalInfo.fullName}</span>
                <span className="text-[11px] text-blue-400 font-mono">CSE Graduate & Odoo Developer</span>
              </div>
            </div>

            <p className="text-slate-400 text-xs max-w-md leading-relaxed">
              3D Interactive E-Portfolio built for academic evaluation (10 Marks Rubric) and professional career placement at Sysnova Information Systems Limited.
            </p>

            <div className="p-4 bg-slate-800/60 rounded-2xl border border-slate-700/60 text-[11px] space-y-1 max-w-md">
              <span className="text-blue-400 font-mono font-bold block">
                Academic Integrity & Course Evaluation:
              </span>
              <p className="text-slate-300">
                Course Project: Business Communication E-Portfolio (10 Marks). Faculty of Science & Technology, AIUB.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block">
              Quick Navigation
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">01. Home & Profile</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">02. Executive Bio</a></li>
              <li><a href="#education" className="hover:text-blue-400 transition-colors">03. Education & AIUB</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition-colors">04. Technical Skills</a></li>
              <li><a href="#experience" className="hover:text-blue-400 transition-colors">05. Capstone Experience</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block">
              Deliverables
            </span>
            <ul className="space-y-2 text-xs">
              <li><a href="#projects" className="hover:text-blue-400 transition-colors">06. Featured Projects</a></li>
              <li><a href="#certifications" className="hover:text-blue-400 transition-colors">07. Honors & Certifications</a></li>
              <li><a href="#video" className="hover:text-blue-400 transition-colors">08. 2-Min Pitch Video</a></li>
              <li><a href="#resume" className="hover:text-blue-400 transition-colors">09. CV & Cover Letter</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">10. Contact & Connect</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-[11px] font-mono">
          <div className="flex items-center gap-1 text-slate-400">
            <span>© 2026 Ayan Biswas. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-slate-800 border border-slate-700 hover:border-blue-400 text-slate-300 hover:text-white rounded-full transition-all flex items-center gap-1.5"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
