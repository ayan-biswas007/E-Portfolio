import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Menu, X, Sun, Moon, Search, Download, Sparkles,
  FileText, Code2, User, GraduationCap, Briefcase, Award, Video, Mail, Layers
} from 'lucide-react';
import { ThemeMode } from '../types';

interface NavbarProps {
  themeMode: ThemeMode;
  onToggleTheme: () => void;
  onOpenSearch: () => void;
  onOpenResumeModal: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  themeMode,
  onToggleTheme,
  onOpenSearch,
  onOpenResumeModal,
  activeSection
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: Sparkles },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'skills', label: 'Skills', icon: Code2 },
    { id: 'experience', label: 'Experience', icon: Layers },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'certifications', label: 'Awards', icon: Award },
    { id: 'video', label: '2-Min Video', icon: Video },
    { id: 'resume', label: 'Resume & Cover', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-md shadow-slate-200/50'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="text-xl font-bold tracking-tight text-slate-900 font-sans">
              AYAN<span className="text-blue-600 underline underline-offset-4 decoration-2">.DEV</span>
            </div>
          </button>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1 bg-white/80 border border-slate-200/90 p-1.5 rounded-full backdrop-blur-xl shadow-sm shadow-slate-200/40">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{link.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2.5">
            {/* Quick Search */}
            <button
              onClick={onOpenSearch}
              className="hidden sm:flex items-center gap-2 px-3.5 py-2 bg-slate-100 border border-slate-200 hover:border-slate-300 text-slate-700 text-xs rounded-full transition-all duration-200 shadow-sm"
              title="Search Portfolio (Cmd + K)"
            >
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>Search</span>
              <kbd className="hidden lg:inline-block bg-slate-200 px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-600">
                ⌘K
              </kbd>
            </button>

            {/* Connect / CV Pill Button */}
            <button
              onClick={onOpenResumeModal}
              className="flex items-center gap-2 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-full shadow-md shadow-blue-600/20 transition-all duration-200 active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Connect / CV</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 border-b border-slate-200 backdrop-blur-2xl overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => scrollToSection(link.id)}
                      className={`flex items-center gap-2 px-3 py-2.5 rounded-xl text-xs font-medium text-left transition-all ${
                        isActive
                          ? 'bg-blue-600 text-white font-semibold'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4 text-blue-600" />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={onOpenSearch}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 text-xs rounded-xl border border-slate-200 w-full justify-center font-medium"
                >
                  <Search className="w-4 h-4 text-blue-600" />
                  <span>Search All Sections</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
