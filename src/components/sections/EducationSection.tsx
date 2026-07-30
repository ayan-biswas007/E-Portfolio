import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, MapPin, Star } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02 / ACADEMIC DEGREES & GPA</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            EDUCATIONAL <span className="text-blue-600">EXCELLENCE.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Formal computer science degree, institutional standings, CGPA achievements, and secondary education.
          </p>
        </div>

        {/* Timeline / Cards Grid */}
        <div className="space-y-8">
          {educationData.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-slate-200/90 p-8 rounded-[2.5rem] shadow-lg shadow-slate-200/50 relative overflow-hidden transition-all duration-300 hover:border-blue-400 group"
            >
              {edu.type === 'university' && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[11px] font-bold px-5 py-1.5 rounded-bl-2xl uppercase tracking-widest font-mono">
                  Primary B.Sc. Degree
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                
                {/* Score & Icon Column */}
                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs text-blue-600 font-mono font-semibold uppercase block">
                        {edu.type === 'university' ? 'B.Sc. Degree' : 'Secondary Education'}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{edu.degree}</h3>
                    </div>
                  </div>

                  {/* Score Counter */}
                  <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200 px-4 py-2.5 rounded-2xl">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <div>
                      <span className="text-[10px] text-slate-500 block font-mono uppercase tracking-wider">Score / Standing</span>
                      <span className="text-xl font-extrabold text-slate-900">
                        {edu.cgpaOrGpa} <span className="text-xs text-slate-500 font-normal">/ {edu.maxScore}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-slate-600 font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-600" />
                      {edu.completionYear}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      {edu.location}
                    </span>
                  </div>
                </div>

                {/* Details Column */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {edu.institution}
                    </h4>
                    {edu.major && (
                      <p className="text-sm text-blue-600 font-medium pt-1 font-mono">
                        Major: {edu.major}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2 pt-2">
                    <h5 className="text-xs font-semibold uppercase text-slate-500 font-mono tracking-wider">
                      Academic Highlights & Curricula:
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {edu.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 bg-slate-50 p-3 rounded-2xl border border-slate-200/80">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
