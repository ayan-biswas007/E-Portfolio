import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, ExternalLink, Github, CheckCircle2, Code2,
  Layers, Terminal, Copy, Check, Sparkles, Network
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.codeSnippet) {
      navigator.clipboard.writeText(project.codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white border border-slate-200/90 rounded-3xl w-full max-w-3xl shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between relative">
            <div>
              <span className="text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                {project.category}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">{project.title}</h2>
              <p className="text-xs text-slate-500">{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50 px-6 gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              Overview & Rubric Details
            </button>
            <button
              onClick={() => setActiveTab('architecture')}
              className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                activeTab === 'architecture'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              <Network className="w-3.5 h-3.5" />
              Architecture Flow
            </button>
            {project.codeSnippet && (
              <button
                onClick={() => setActiveTab('code')}
                className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors flex items-center gap-2 ${
                  activeTab === 'code'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-slate-500 hover:text-slate-800'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                Code Implementation
              </button>
            )}
          </div>

          {/* Content Body */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-sm">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-1">
                    Brief Description:
                  </h3>
                  <p className="text-slate-800 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
                    {project.briefDescription}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-xs font-mono text-blue-700 font-semibold block">Objective</span>
                    <p className="text-xs text-slate-700">{project.objective}</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <span className="text-xs font-mono text-indigo-700 font-semibold block">Your Role</span>
                    <p className="text-xs text-slate-700">{project.role}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-2">
                    Skills Applied:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.skillsApplied.map((skill, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl space-y-1">
                  <span className="text-xs font-mono text-emerald-800 font-semibold block">Outcome & Learning</span>
                  <p className="text-xs text-emerald-900 leading-relaxed">{project.outcome}</p>
                </div>

                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-2">
                    Key Features:
                  </h3>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && project.architectureDiagram && (
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-blue-600" />
                  System Architecture & Data Flow
                </h3>
                <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800 font-mono text-xs text-blue-300 space-y-3">
                  {project.architectureDiagram.map((line, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-slate-500 font-mono">0{i + 1}</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'code' && project.codeSnippet && (
              <div className="space-y-3 relative">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500">Python / Enterprise Implementation</span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 hover:bg-slate-200 text-xs text-slate-800 rounded-lg border border-slate-300 transition-colors font-medium"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="bg-slate-900 p-5 rounded-2xl border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
                  <code>{project.codeSnippet}</code>
                </pre>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 bg-white hover:bg-slate-100 text-slate-800 text-xs font-medium rounded-xl border border-slate-300 shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              )}
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-xl shadow-sm"
            >
              Close Showcase
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
