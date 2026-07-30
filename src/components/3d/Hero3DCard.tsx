import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Award, Sparkles, Code2, Database, Terminal, Cpu } from 'lucide-react';

interface Hero3DCardProps {
  name: string;
  title: string;
}

export const Hero3DCard: React.FC<Hero3DCardProps> = ({ name, title }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Calculate rotation angle (max 12 deg)
    setRotateX(-y / 14);
    setRotateY(x / 14);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <div
      className="perspective-1000 w-full max-w-sm sm:max-w-md mx-auto relative group py-4"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-700" />

      {/* 3D Container Card */}
      <motion.div
        className="relative bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-xl shadow-slate-200/80 overflow-hidden transition-transform duration-200 ease-out transform-gpu"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`,
        }}
      >
        {/* Specular Light Reflection */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-50/50 to-transparent pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 0.8 : 0.2,
          }}
        />

        {/* Top Header Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-700">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-emerald-500 absolute" />
            <span className="ml-2">Available for Opportunities</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>AIUB '26</span>
          </div>
        </div>

        {/* Executive Tech Emblem (Replaces Photo) */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 border border-slate-800 p-6 flex flex-col justify-between mb-6 shadow-inner group">
          
          {/* Geometric Radial Mesh Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0,transparent_70%)] pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl pointer-events-none" />

          {/* Top Floating HUD Overlay Badges */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono">
            <span className="bg-slate-900/90 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Odoo Developer</span>
            </span>
            <span className="bg-slate-900/90 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-lg flex items-center gap-1.5 shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
              <span>SQLi Shielded</span>
            </span>
          </div>

          {/* Central 3D Monogram & Tech Symbol */}
          <div className="relative z-10 my-auto text-center space-y-2 py-4">
            <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 border border-blue-400/40 shadow-2xl flex items-center justify-center text-white font-extrabold text-3xl font-mono tracking-widest group-hover:scale-105 transition-transform duration-300">
              AB
            </div>
            <div>
              <span className="text-white font-bold text-sm block">Ayan Biswas</span>
              <span className="text-blue-300 text-xs font-mono block">Computer Science & Engineering</span>
            </div>
          </div>

          {/* Bottom Terminal HUD Bar */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 font-mono pt-2 border-t border-white/10">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-blue-400" />
              <span>ayan.init()</span>
            </span>
            <span className="text-emerald-400 font-bold">STATUS: READY</span>
          </div>
        </div>

        {/* Card Info */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{name}</h3>
            <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-bold">
              CGPA 3.40
            </span>
          </div>

          <p className="text-xs text-blue-600 font-mono font-semibold">
            {title}
          </p>

          <div className="pt-3 border-t border-slate-200 grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
              <span className="block text-slate-500 text-[10px] uppercase font-mono">Degree</span>
              <span className="font-bold text-slate-900 text-xs">B.Sc. CSE</span>
            </div>
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
              <span className="block text-slate-500 text-[10px] uppercase font-mono">Stack</span>
              <span className="font-bold text-blue-600 text-xs">Python/OWL</span>
            </div>
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200">
              <span className="block text-slate-500 text-[10px] uppercase font-mono">Location</span>
              <span className="font-bold text-emerald-700 text-xs">Dhaka</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
