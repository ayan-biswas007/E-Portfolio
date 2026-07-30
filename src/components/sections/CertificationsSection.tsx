import React from 'react';
import { motion } from 'motion/react';
import { Award, BookOpen, Trophy, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import { certificationsData } from '../../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Online Course': return BookOpen;
      case 'Competition': return Trophy;
      case 'Scholarship': return Award;
      case 'Workshop': return Sparkles;
      default: return Award;
    }
  };

  return (
    <section id="certifications" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>06 / HONORS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            HONORS & <span className="text-blue-600">ACCREDITATIONS.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Verified certifications, technical workshops, competition awards, and academic scholarships.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, idx) => {
            const Icon = getTypeIcon(cert.type);
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-slate-200/90 p-6 rounded-[2rem] shadow-lg shadow-slate-200/50 hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-bold bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 rounded-full">
                      {cert.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center justify-between mt-1 text-xs text-slate-500 font-mono">
                      <span>{cert.issuer}</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-blue-600" />
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-[11px] text-blue-600 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Accreditation</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
