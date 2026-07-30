export type ThemeMode = 'dark' | 'light';

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  major?: string;
  cgpaOrGpa: string;
  maxScore: string;
  completionYear: string;
  highlights: string[];
  type: 'university' | 'college' | 'school';
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Odoo & Enterprise' | 'Languages' | 'APIs & Integration' | 'Databases & Security' | 'Tools & Versioning' | 'Soft Skills';
  level: number; // 0 to 100
  iconName: string;
  description: string;
  isCore?: boolean;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  roleType: 'Academic Capstone' | 'Open-Source & Development' | 'Leadership & Extracurricular' | 'Community & Mentorship';
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'ERP & Odoo' | 'Analytics & Reporting' | 'Web Security' | 'Desktop & Java OOP' | 'Automation & ASP.NET' | string;
  briefDescription: string;
  objective: string;
  role: string;
  skillsApplied: string[];
  outcome: string;
  keyFeatures: string[];
  architectureDiagram?: string[];
  codeSnippet?: string;
  githubUrl?: string;
  demoUrl?: string;
  imageBg: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  type: 'Online Course' | 'Workshop' | 'Competition' | 'Scholarship' | 'Award';
  credentialUrl?: string;
  description: string;
}

export interface VideoChapter {
  time: string;
  title: string;
  description: string;
}

export interface PersonalInfo {
  fullName: string;
  title: string;
  shortIntro: string; // 80-120 words
  aboutMe: {
    personalIntroduction: string;
    careerInterests: string[];
    professionalStrengths: string[];
    careerObjectives: string;
  };
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    facebook: string;
  };
  videoPitch: {
    title: string;
    duration: string;
    script: string;
    youtubeUrl?: string;
    keyTakeaways: string[];
    presentationTips: string[];
    chapters: VideoChapter[];
  };
  coverLetter: {
    recipientName: string;
    recipientCompany: string;
    recipientAddress: string;
    subject: string;
    date: string;
    paragraphs: string[];
  };
}
