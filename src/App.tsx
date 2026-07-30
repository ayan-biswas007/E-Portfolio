import React, { useState, useEffect } from 'react';
import { ThemeMode } from './types';
import { BackgroundCanvas3D } from './components/3d/BackgroundCanvas3D';
import { Navbar } from './components/Navbar';
import { CommandMenu } from './components/CommandMenu';
import { ResumeModal } from './components/ResumeModal';
import { ScrollProgress } from './components/ScrollProgress';
import { Footer } from './components/Footer';

import { HeroSection } from './components/sections/HeroSection';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { VideoSection } from './components/sections/VideoSection';
import { ResumeSection } from './components/sections/ResumeSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Toggle Theme (Light Mode Default)
  const toggleTheme = () => {
    setThemeMode('light');
  };

  // Scroll Intersection Observer to highlight active section
  useEffect(() => {
    const sectionIds = [
      'home', 'about', 'education', 'skills',
      'experience', 'projects', 'certifications',
      'video', 'resume', 'contact'
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="min-h-screen transition-colors duration-500 font-sans selection:bg-blue-600 selection:text-white relative overflow-x-hidden bg-[#f8fafc] text-slate-900"
    >
      {/* 3D WebGL Background Canvas */}
      <BackgroundCanvas3D themeMode={themeMode} />

      {/* Top Progress Bar & Side Dot Navigation */}
      <ScrollProgress
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* Header Navigation */}
      <Navbar
        themeMode={themeMode}
        onToggleTheme={toggleTheme}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main className="relative z-10 space-y-12">
        {/* 1. Home / Hero */}
        <HeroSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
          onOpenVideoModal={() => handleSelectSection('video')}
        />

        {/* 2. About Me */}
        <AboutSection />

        {/* 3. Education */}
        <EducationSection />

        {/* 4. Skills */}
        <SkillsSection />

        {/* 5. Experience */}
        <ExperienceSection />

        {/* 6. Projects */}
        <ProjectsSection />

        {/* 7. Certifications & Achievements */}
        <CertificationsSection />

        {/* 8. 2-Minute Video Introduction */}
        <VideoSection />

        {/* 9. Resume & Cover Letter */}
        <ResumeSection
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />

        {/* 10. Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CommandMenu
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectSection={handleSelectSection}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
