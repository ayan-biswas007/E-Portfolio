import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Video, Play, Pause, Volume2, Sparkles, CheckCircle2,
  Clock, BookOpen, Mic, User, ShieldCheck, AlignLeft, ExternalLink
} from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

export const VideoSection: React.FC = () => {
  const { videoPitch } = personalInfo;
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);

  // Web Speech API Voice Pitch Narration
  const toggleSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        window.speechSynthesis.cancel(); // Stop any ongoing speech
        const utterance = new SpeechSynthesisUtterance(videoPitch.script);
        utterance.rate = 0.95;
        utterance.pitch = 1.0;
        
        utterance.onend = () => {
          setIsPlayingAudio(false);
        };
        utterance.onerror = () => {
          setIsPlayingAudio(false);
        };

        setIsPlayingAudio(true);
        window.speechSynthesis.speak(utterance);
      }
    } else {
      alert("Text-to-speech narration is supported directly in modern browsers.");
    }
  };

  return (
    <section id="video" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-bold uppercase tracking-widest">
            <Video className="w-3.5 h-3.5" />
            <span>07 / 2-MINUTE PITCH VIDEO & NARRATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            2-MINUTE <span className="text-blue-600">ELEVATOR PITCH.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Professional 2-minute elevator pitch video covering background, core competencies, capstone project, and career aspirations.
          </p>
        </div>

        {/* Main Video Presentation Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Interactive Video Frame & Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="bg-white border border-slate-200/90 rounded-[2.5rem] p-6 sm:p-8 shadow-lg shadow-slate-200/50 space-y-6 relative overflow-hidden group">
              
              {/* YouTube Video Player Embed */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl">
                {videoPitch.youtubeUrl ? (
                  <iframe
                    src={`${videoPitch.youtubeUrl}?rel=0&modestbranding=1`}
                    title="Ayan Biswas - 2 Minute Professional Elevator Pitch Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full rounded-3xl border-0"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-white text-center space-y-3 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
                    <Video className="w-12 h-12 text-blue-400 animate-pulse" />
                    <p className="text-sm font-bold">YouTube Video Pitch</p>
                  </div>
                )}
              </div>

              {/* Video Info HUD & Quick Actions */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <a
                  href="https://youtu.be/TNEsskV2eTk"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-full text-xs font-bold transition-all shadow-sm"
                >
                  <Video className="w-4 h-4 text-red-600" />
                  <span>Watch Directly on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                </a>

                <button
                  onClick={toggleSpeech}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    isPlayingAudio
                      ? 'bg-amber-400 text-slate-900 border border-amber-500 shadow-md'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-blue-600" />}
                  <span>{isPlayingAudio ? 'Pause Narration' : 'Listen AI Voice Pitch'}</span>
                </button>
              </div>

              {/* Toggle Script Button */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 hover:bg-blue-100 text-blue-700 text-xs font-bold rounded-full transition-colors"
                >
                  <AlignLeft className="w-4 h-4" />
                  <span>{showTranscript ? 'Hide Pitch Script' : 'Read Full Pitch Script'}</span>
                </button>

                <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>Duration: {videoPitch.duration}</span>
                </div>
              </div>

              {/* Pitch Script View */}
              {showTranscript && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="p-5 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed font-sans space-y-2"
                >
                  <span className="text-blue-700 font-mono font-bold block">
                    Full Video Pitch Script:
                  </span>
                  <p className="bg-white p-4 rounded-xl border border-slate-200 italic text-slate-800">
                    "{videoPitch.script}"
                  </p>
                </motion.div>
              )}

            </div>
          </motion.div>

          {/* Right Column: Chapters, Key Takeaways & Rubric Guidelines */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Chapters Breakout */}
            <div className="bg-white border border-slate-200/90 p-6 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                Video Chapter Timestamps
              </h3>
              <div className="space-y-3">
                {videoPitch.chapters.map((chap, idx) => (
                  <div key={idx} className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex items-start gap-3 text-xs">
                    <span className="bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-mono font-bold flex-shrink-0">
                      {chap.time}
                    </span>
                    <div>
                      <span className="font-bold text-slate-900 block">{chap.title}</span>
                      <span className="text-slate-600">{chap.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Rubric Presentation Guidelines Check */}
            <div className="bg-white border border-slate-200/90 p-6 rounded-[2.5rem] shadow-lg shadow-slate-200/50 space-y-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                University Rubric Video Criteria
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {videoPitch.presentationTips.map((tip, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 rounded-2xl border border-slate-200 text-slate-700 flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 mt-1 flex-shrink-0" />
                    <span>{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
