import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface ScrollProgressProps {
  activeSection: string;
  onSelectSection: (id: string) => void;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({ activeSection, onSelectSection }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'home', label: '1. Home' },
    { id: 'about', label: '2. About' },
    { id: 'education', label: '3. Education' },
    { id: 'skills', label: '4. Skills' },
    { id: 'experience', label: '5. Experience' },
    { id: 'projects', label: '6. Projects' },
    { id: 'certifications', label: '7. Awards' },
    { id: 'video', label: '8. Video' },
    { id: 'resume', label: '9. Resume' },
    { id: 'contact', label: '10. Contact' },
  ];

  return (
    <>
      {/* Top Thin Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200/60 z-50 pointer-events-none">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Right Side Quick Jump Dots */}
      <div className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col items-center gap-3 z-40 bg-white/80 p-2.5 rounded-full border border-slate-200 backdrop-blur-md shadow-lg">
        {sections.map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => onSelectSection(sec.id)}
              className="group relative flex items-center justify-center p-1"
              title={sec.label}
            >
              <span
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? 'bg-blue-600 scale-125 ring-4 ring-blue-500/20'
                    : 'bg-slate-300 group-hover:bg-slate-500'
                }`}
              />

              {/* Tooltip on hover */}
              <span className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900 border border-slate-800 text-white text-[10px] font-mono px-2.5 py-1 rounded-md whitespace-nowrap shadow-md pointer-events-none">
                {sec.label}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};
