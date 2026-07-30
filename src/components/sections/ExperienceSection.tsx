import React from 'react';
import { motion } from 'motion/react';
import { Layers, Briefcase, Calendar, MapPin, CheckCircle2, Code2, Users } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Layers className="w-3.5 h-3.5" />
            <span>04 / PROFESSIONAL ROLES & CAPSTONE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            RELEVANT <span className="text-blue-600">EXPERIENCE.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Software capstone leadership, open-source Odoo development, extracurricular organization, and industry experience.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-8 lg:before:left-1/2 before:w-0.5 before:bg-slate-200">
          {experienceData.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node Badge */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-blue-600 text-blue-600 flex items-center justify-center z-10 shadow-md shadow-blue-500/20">
                  <Briefcase className="w-5 h-5" />
                </div>

                {/* Content Box */}
                <div className="w-full lg:w-1/2 pl-16 lg:pl-0 lg:pr-12">
                  <div className="bg-white border border-slate-200/90 p-6 sm:p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 hover:border-blue-400 transition-all duration-300 space-y-4">
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full font-mono font-bold">
                        {exp.roleType}
                      </span>
                      <div className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <p className="text-sm text-blue-600 font-medium pt-0.5 font-mono">{exp.organization}</p>
                      <span className="text-xs text-slate-500 flex items-center gap-1 mt-1 font-mono">
                        <MapPin className="w-3 h-3 text-blue-600" /> {exp.location}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-2 pt-1">
                      <h4 className="text-xs font-semibold text-slate-500 font-mono uppercase tracking-wider">
                        Key Responsibilities & Outcomes:
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3 flex flex-wrap gap-1.5 border-t border-slate-200">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-3 py-1 rounded-full font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>

                {/* Empty space for grid symmetry */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
