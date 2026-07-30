import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X, Download, Printer, FileText, CheckCircle2,
  Mail, Phone, MapPin, Globe, Sparkles, Building2
} from 'lucide-react';
import { personalInfo, educationData, experienceData, skillsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'cv' | 'coverLetter'>('cv');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    // Generate text/PDF download payload
    const textContent = activeTab === 'cv'
      ? `AYAN BISWAS - RESUME\nEmail: ${personalInfo.contact.email} | Phone: ${personalInfo.contact.phone}\nAddress: ${personalInfo.contact.location}\n\nCAREER OBJECTIVE:\n${personalInfo.aboutMe.careerObjectives}\n\nEDUCATION:\n${educationData.map(e => `${e.institution} - ${e.degree} (${e.completionYear}) | Score: ${e.cgpaOrGpa}`).join('\n')}\n\nTECHNICAL SKILLS:\n${skillsData.map(s => `${s.name} (${s.category})`).join(', ')}\n\nFEATURED PROJECTS:\n1. Business Application Module (Python, Odoo, XML, PostgreSQL)\n2. Bike Buy and Sale System (Java, Swing GUI, OOP, File I/O)\n   Repo: https://github.com/ayan-biswas007/Bike-Buy-And-Sale-System\n3. Insta AutoMate System (C#, ASP.NET Core, REST APIs, Automation)\n   Repo: https://github.com/ayan-biswas007/Insta-AutoMate-System`
      : `${personalInfo.coverLetter.date}\n\nTo: ${personalInfo.coverLetter.recipientName}\n${personalInfo.coverLetter.recipientCompany}\n${personalInfo.coverLetter.recipientAddress}\n\nSUBJECT: ${personalInfo.coverLetter.subject}\n\n${personalInfo.coverLetter.paragraphs.join('\n\n')}`;

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = activeTab === 'cv' ? 'Ayan_Biswas_CV.txt' : 'Ayan_Biswas_Cover_Letter.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 backdrop-blur-md overflow-y-auto print:p-0 print:bg-white print:static">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-white border border-slate-200/90 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col print:border-none print:shadow-none print:max-h-none print:w-full"
        >
          {/* Top Control Bar (Hidden on print) */}
          <div className="p-4 sm:p-5 bg-slate-50 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 print:hidden">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('cv')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === 'cv'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Curriculum Vitae (CV)</span>
              </button>

              <button
                onClick={() => setActiveTab('coverLetter')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 transition-all ${
                  activeTab === 'coverLetter'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-white text-slate-700 hover:text-slate-900 border border-slate-200'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>Sysnova Cover Letter</span>
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="p-2 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl border border-slate-200 text-xs font-medium flex items-center gap-1.5 transition-colors"
                title="Print Document"
              >
                <Printer className="w-4 h-4" />
                <span className="hidden sm:inline">Print</span>
              </button>

              <button
                onClick={handleDownloadPDF}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-xl flex items-center gap-1.5 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download Document</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 bg-white hover:bg-slate-100 text-slate-700 hover:text-slate-900 rounded-xl border border-slate-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Document Content View */}
          <div className="p-6 sm:p-10 overflow-y-auto flex-1 bg-white text-slate-900 font-sans leading-normal print:p-0">

            {/* Render CV */}
            {activeTab === 'cv' && (
              <div className="max-w-3xl mx-auto space-y-6 text-slate-900">
                {/* CV Header */}
                <div className="text-center border-b pb-4 border-slate-300 space-y-1">
                  <h1 className="text-3xl font-extrabold uppercase tracking-wide text-slate-900">
                    {personalInfo.fullName}
                  </h1>
                  <p className="text-xs text-slate-600">
                    {personalInfo.contact.location} • {personalInfo.contact.phone} • {personalInfo.contact.email}
                  </p>
                </div>

                {/* Career Objective */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2 font-mono">
                    CAREER OBJECTIVE
                  </h2>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {personalInfo.aboutMe.careerObjectives}
                  </p>
                </div>

                {/* Education */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2 font-mono">
                    EDUCATION
                  </h2>
                  <div className="space-y-3 text-xs">
                    {educationData.map((edu) => (
                      <div key={edu.id} className="flex justify-between items-start">
                        <div>
                          <span className="font-bold text-slate-900">{edu.institution}</span>
                          <span className="block italic text-slate-700">{edu.degree} {edu.major ? `(${edu.major})` : ''}</span>
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-slate-800">{edu.completionYear}</span>
                          <span className="block text-slate-600 font-mono">Score: {edu.cgpaOrGpa} / {edu.maxScore}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2 font-mono">
                    TECHNICAL SKILLS
                  </h2>
                  <div className="grid grid-cols-2 gap-2 text-xs text-slate-800">
                    <div>
                      <span className="font-bold">Odoo Development:</span> Odoo Developer, Odoo JavaScript Framework (OWL)
                    </div>
                    <div>
                      <span className="font-bold">Programming:</span> Python, JavaScript, XML, TypeScript
                    </div>
                    <div>
                      <span className="font-bold">APIs & Integration:</span> RESTful API, Odoo External/Internal APIs (REST/RPC)
                    </div>
                    <div>
                      <span className="font-bold">Reporting:</span> QWeb reports, XLSX report design for business analytics
                    </div>
                    <div>
                      <span className="font-bold">Version Control:</span> Git (branching, merging, version tracking)
                    </div>
                    <div>
                      <span className="font-bold">Databases & Security:</span> Relational databases, SQL injection mitigation, automated validation
                    </div>
                  </div>
                </div>

                {/* Technical Projects */}
                <div>
                  <h2 className="text-xs font-bold uppercase tracking-wider text-slate-800 border-b border-slate-300 pb-1 mb-2 font-mono">
                    FEATURED TECHNICAL PROJECTS
                  </h2>
                  <div className="space-y-4 text-xs text-slate-700">
                    {/* Capstone */}
                    <div className="space-y-1">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Business Application Module — Capstone Project (AIUB)</span>
                        <span>Python | Odoo | XML | PostgreSQL</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                        <li>Engineered an open-source, customized business application module aligned with corporate management systems.</li>
                        <li>Constructed modular backend business logic layers using Python and mapped structured XML data.</li>
                        <li>Designed automated enterprise analytics templates via integrated XLSX reporting layouts.</li>
                      </ul>
                    </div>

                    {/* Bike Buy and Sale System */}
                    <div className="space-y-1">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Bike Buy and Sale System — Desktop Management Software</span>
                        <span>Java | Swing GUI | OOP | File I/O</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                        <li>Developed a multi-user desktop application for bike inventory management and sales processing using Java and Swing GUI.</li>
                        <li>Implemented role-based authentication separating Admin stock controls from Customer purchasing workflows.</li>
                        <li>Engineered transaction logging and receipt generation modules leveraging OOP principles and data persistence.</li>
                      </ul>
                    </div>

                    {/* Insta AutoMate System */}
                    <div className="space-y-1">
                      <div className="flex justify-between font-bold text-slate-900">
                        <span>Insta AutoMate System — Full-Stack Automation Engine</span>
                        <span>C# | ASP.NET Core | REST APIs | Automation</span>
                      </div>
                      <ul className="list-disc list-inside space-y-0.5 text-slate-700 pl-1">
                        <li>Built an automated workflow engine with C# and ASP.NET Core REST APIs to manage Instagram queues and tasks.</li>
                        <li>Engineered asynchronous task scheduling using C# Task Parallel Library (TPL) and RESTful API endpoints.</li>
                        <li>Implemented configurable rate-limiting middleware and exception logging to maintain 99.9% service reliability.</li>
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* Render Cover Letter */}
            {activeTab === 'coverLetter' && (
              <div className="max-w-2xl mx-auto space-y-6 text-xs sm:text-sm text-slate-800 leading-relaxed font-sans">
                <div className="space-y-1 text-slate-900 border-b pb-4">
                  <h2 className="text-xl font-bold">{personalInfo.fullName}</h2>
                  <p className="text-xs text-slate-600">{personalInfo.contact.location}</p>
                  <p className="text-xs text-slate-600">{personalInfo.contact.phone} • {personalInfo.contact.email}</p>
                  <p className="text-xs font-semibold text-slate-800 pt-2">{personalInfo.coverLetter.date}</p>
                </div>

                <div className="space-y-0.5 text-slate-800">
                  <p className="font-bold">{personalInfo.coverLetter.recipientCompany}</p>
                  <p>{personalInfo.coverLetter.recipientAddress}</p>
                  <p className="font-bold text-slate-900 pt-3">{personalInfo.coverLetter.subject}</p>
                </div>

                <div className="space-y-4 text-slate-800">
                  {personalInfo.coverLetter.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="pt-6 space-y-1 text-slate-900">
                  <p>Sincerely,</p>
                  <p className="font-bold text-base">{personalInfo.fullName}</p>
                  <p className="text-xs text-slate-600">BSc in Computer Science and Engineering</p>
                  <p className="text-xs text-slate-600">American International University-Bangladesh (AIUB)</p>
                </div>
              </div>
            )}

          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
