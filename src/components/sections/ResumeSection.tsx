import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, Eye, Building2, CheckCircle2, Sparkles } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResumeModal }) => {
  return (
    <section id="resume" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <FileText className="w-3.5 h-3.5" />
            <span>08 / CURRICULUM VITAE & COVER LETTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            DOCUMENTATION & <span className="text-blue-600">RESUME.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Official Curriculum Vitae (CV) and Application Cover Letter tailored for Sysnova Information Systems Limited.
          </p>
        </div>

        {/* Two-Column Card Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Left Card: CV Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200/90 p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-6 flex flex-col justify-between hover:border-blue-400 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">
                  PDF Format Ready
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Official Curriculum Vitae
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Ayan Biswas • Software Engineer & Odoo Developer
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Education:</span>
                  <span className="font-bold text-slate-900">AIUB B.Sc. CSE (3.40 CGPA)</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-500">Specialization:</span>
                  <span className="font-bold text-blue-600">Odoo / Python / XML / QWeb</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Academic Honors:</span>
                  <span className="font-bold text-amber-600">Golden GPA 5.00 HSC & SSC</span>
                </div>
              </div>
            </div>

            <button
              onClick={onOpenResumeModal}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-full shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
              <span>View & Print Full CV</span>
            </button>
          </motion.div>

          {/* Right Card: Sysnova Cover Letter */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white border border-slate-200/90 p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-6 flex flex-col justify-between hover:border-blue-400 transition-all duration-300 group"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">
                  Sysnova Application
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Application Cover Letter
                </h3>
                <p className="text-xs text-slate-500 font-mono mt-0.5">
                  Target Role: Odoo Developer at Sysnova Information Systems Ltd.
                </p>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 italic text-xs text-slate-700 leading-relaxed space-y-2">
                <p className="line-clamp-4">
                  "{personalInfo.coverLetter.paragraphs[1]}"
                </p>
                <span className="text-[10px] text-blue-600 font-mono block not-italic">
                  Subject: {personalInfo.coverLetter.subject}
                </span>
              </div>
            </div>

            <button
              onClick={onOpenResumeModal}
              className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-full border border-slate-200 flex items-center justify-center gap-2 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
              <span>Read Cover Letter</span>
            </button>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
