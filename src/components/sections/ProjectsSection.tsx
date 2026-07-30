import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, ArrowRight, ExternalLink, Github, Code2, Sparkles, CheckCircle2 } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';
import { ProjectItem } from '../../types';
import { ProjectModal } from '../ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>05 / FEATURED CAPSTONE & ODOO PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            INNOVATIVE <span className="text-blue-600">SYSTEMS.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detailed case studies with explicit objectives, technical roles, applied frameworks, and measured outcomes.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white border border-slate-200/90 rounded-[2.5rem] p-7 shadow-lg shadow-slate-200/50 flex flex-col justify-between hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-blue-700 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">0{idx + 1}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-mono mt-0.5">
                    {project.subtitle}
                  </p>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {project.briefDescription}
                </p>

                {/* Rubric Points Snapshot */}
                <div className="space-y-2 pt-2 border-t border-slate-200 text-xs">
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <span className="font-semibold text-blue-600 font-mono flex-shrink-0">Role:</span>
                    <span className="text-slate-800 line-clamp-1">{project.role}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <span className="font-semibold text-indigo-600 font-mono flex-shrink-0">Objective:</span>
                    <span className="text-slate-600 line-clamp-1">{project.objective}</span>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.skillsApplied.slice(0, 4).map((skill, i) => (
                    <span key={i} className="text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-2.5 py-1 rounded-full font-mono">
                      {skill}
                    </span>
                  ))}
                  {project.skillsApplied.length > 4 && (
                    <span className="text-[10px] bg-blue-50 text-blue-600 border border-blue-200 px-2 py-1 rounded-full font-mono">
                      +{project.skillsApplied.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-slate-200 flex items-center gap-2 relative z-10">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold flex items-center justify-center gap-1.5 transition-all duration-200 shadow-md shadow-blue-500/20"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 rounded-full text-xs font-bold transition-all duration-200 border border-slate-200 flex items-center justify-center shrink-0"
                    title="View on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
