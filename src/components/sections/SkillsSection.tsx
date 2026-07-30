import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2, Layers, Network, Database, ShieldCheck, GitBranch,
  Server, MessageSquare, Users, Handshake, Mic, Cpu, Boxes,
  FileCode, FileJson, BarChart3, Sparkles, Filter
} from 'lucide-react';
import { skillsData } from '../../data/portfolioData';
import { SkillItem } from '../../types';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Odoo & Enterprise',
    'Languages',
    'APIs & Integration',
    'Databases & Security',
    'Tools & Versioning',
    'Soft Skills'
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Boxes': return Boxes;
      case 'Layers': return Layers;
      case 'Code2': return Code2;
      case 'FileCode': return FileCode;
      case 'FileJson': return FileJson;
      case 'Network': return Network;
      case 'BarChart3': return BarChart3;
      case 'Database': return Database;
      case 'ShieldCheck': return ShieldCheck;
      case 'GitBranch': return GitBranch;
      case 'Server': return Server;
      case 'MessageSquare': return MessageSquare;
      case 'Users': return Users;
      case 'Handshake': return Handshake;
      case 'Mic': return Mic;
      case 'Cpu': return Cpu;
      default: return Code2;
    }
  };

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Code2 className="w-3.5 h-3.5" />
            <span>03 / TECHNICAL MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            SKILLS & <span className="text-blue-600">COMPETENCIES.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Comprehensive breakdown of Odoo ERP capabilities, programming stack, API integrations, and interpersonal skills.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeCategory === category
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20'
                  : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-sm'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = getIconComponent(skill.iconName);
            return (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="bg-white border border-slate-200/90 p-6 rounded-[2rem] shadow-lg shadow-slate-200/50 hover:border-blue-400 transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold bg-blue-50 px-3 py-1 rounded-full text-blue-700 border border-blue-200">
                      {skill.level}%
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {skill.name}
                      </h3>
                      {skill.isCore && (
                        <span className="text-[10px] bg-blue-100 text-blue-700 border border-blue-300 px-2 py-0.5 rounded-md font-mono">
                          CORE
                        </span>
                      )}
                    </div>
                    <span className="text-xs text-slate-500 font-mono block mt-1">
                      Domain: {skill.category}
                    </span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 pt-4 border-t border-slate-200 space-y-1.5">
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                    <span>Proficiency</span>
                    <span>{skill.level >= 90 ? 'Mastery / Expert' : 'Advanced'}</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
