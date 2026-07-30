import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, Sparkles, ArrowRight, Code2, GraduationCap, Briefcase, FileText } from 'lucide-react';
import { personalInfo, skillsData, projectsData, educationData, experienceData } from '../data/portfolioData';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSection: (sectionId: string) => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({ isOpen, onClose, onSelectSection }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          // Open handled by parent or state
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const allItems = [
    { type: 'Section', name: 'Home & Professional Profile', sectionId: 'home', icon: Sparkles, desc: 'Ayan Biswas overview, CGPA 3.40, quick stats' },
    { type: 'Section', name: 'About Me & Career Objectives', sectionId: 'about', icon: Sparkles, desc: 'Career interests in Odoo, Python & Enterprise ERP' },
    { type: 'Section', name: 'Education & Academic History', sectionId: 'education', icon: GraduationCap, desc: 'AIUB (3.40 CGPA), HSC (5.00), SSC (5.00)' },
    { type: 'Section', name: 'Technical & Soft Skills', sectionId: 'skills', icon: Code2, desc: 'Odoo, Python, OWL, REST APIs, PostgreSQL, Git' },
    { type: 'Section', name: 'Experience & Capstone', sectionId: 'experience', icon: Briefcase, desc: 'Business Application Module, Odoo Dev, AIUB Club' },
    { type: 'Section', name: 'Projects & Case Studies', sectionId: 'projects', icon: Briefcase, desc: 'Business Module, XLSX Reporting, Web Security' },
    { type: 'Section', name: 'Certifications & Honors', sectionId: 'certifications', icon: Sparkles, desc: 'Odoo Cert, Capstone Distinction, Merit Scholarship' },
    { type: 'Section', name: '2-Minute Video Pitch', sectionId: 'video', icon: Sparkles, desc: 'Interactive pitch video, script, and presentation notes' },
    { type: 'Section', name: 'Resume (CV) & Cover Letter', sectionId: 'resume', icon: FileText, desc: 'Sysnova Application Cover Letter & Printable CV' },
    { type: 'Section', name: 'Contact & Social Profiles', sectionId: 'contact', icon: Sparkles, desc: 'Email ayanb8626@gmail.com, Phone +880157291277' },

    // Add specific skills
    ...skillsData.map(s => ({
      type: 'Skill',
      name: s.name,
      sectionId: 'skills',
      icon: Code2,
      desc: s.description
    })),

    // Add specific projects
    ...projectsData.map(p => ({
      type: 'Project',
      name: p.title,
      sectionId: 'projects',
      icon: Briefcase,
      desc: p.briefDescription
    }))
  ];

  const filteredItems = query.trim() === ''
    ? allItems.slice(0, 8)
    : allItems.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white border border-slate-200/90 rounded-2xl w-full max-w-xl shadow-2xl overflow-hidden"
        >
          {/* Search Bar Input */}
          <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-200 bg-slate-50">
            <Search className="w-5 h-5 text-blue-600" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search skills, projects, education, cover letter..."
              className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm focus:outline-none font-medium"
              autoFocus
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-200/60"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search Results List */}
          <div className="max-h-80 overflow-y-auto p-2 divide-y divide-slate-100">
            {filteredItems.length > 0 ? (
              filteredItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={`${item.type}-${item.name}-${index}`}
                    onClick={() => {
                      onSelectSection(item.sectionId);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-blue-50/80 text-left transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-slate-900 group-hover:text-blue-600">
                            {item.name}
                          </span>
                          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono border border-slate-200">
                            {item.type}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            ) : (
              <div className="p-8 text-center text-slate-500 text-sm">
                No matching results found for "{query}". Try "Odoo", "AIUB", "Python", or "Cover Letter".
              </div>
            )}
          </div>

          <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono">
            <span>Ayan Biswas E-Portfolio</span>
            <span>Press <kbd className="bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-600">Esc</kbd> to exit</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
