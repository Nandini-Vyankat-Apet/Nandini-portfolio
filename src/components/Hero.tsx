import React, { useState } from 'react';
import { MapPin, Calendar, GraduationCap, ArrowDown, Mail, Camera, Info } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface HeroProps {
  onOpenPhotoGuide: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPhotoGuide }) => {
  const [imageError, setImageError] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const activePhotoSrc = previewUrl || (imageError ? null : portfolioData.personal.profilePhotoPath);

  const handleLocalImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <section id="top" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden tech-grid-pattern">
      {/* Restrained ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Information */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Academic Status Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-teal-400 font-medium">B.E. / B.Tech</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <GraduationCap className="w-3.5 h-3.5 text-teal-400/80" />
                <span>Class of {portfolioData.personal.expectedGraduation}</span>
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                <span>{portfolioData.personal.homeLocation}</span>
              </span>
            </div>

            {/* Main Name */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-mono">
                {portfolioData.personal.fullName}
              </h1>
              <p className="mt-3 text-lg sm:text-xl font-medium text-teal-300/90 font-mono">
                {portfolioData.personal.role}
              </p>
              <p className="mt-1 text-sm text-slate-400">
                {portfolioData.education.institution}, {portfolioData.personal.collegeLocation}
              </p>
            </div>

            {/* Introduction / About Me quote */}
            <div className="border-l-2 border-teal-500/40 pl-4 py-1">
              <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-sans">
                &ldquo;{portfolioData.personal.aboutBio}&rdquo;
              </p>
            </div>

            {/* Key Quick Fact Ribbon - Zero-pill discipline */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-4 pt-2 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500">Department Rank: </span>
                <span className="text-teal-300 font-semibold">1st</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <div>
                <span className="text-slate-500">College Rank: </span>
                <span className="text-teal-300 font-semibold">3rd</span>
              </div>
              <span aria-hidden="true" className="text-slate-700">|</span>
              <div>
                <span className="text-slate-500">First Year Overall: </span>
                <span className="text-slate-200 font-semibold">92%</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs sm:text-sm font-mono font-medium text-[#0a0f1d] bg-teal-400 hover:bg-teal-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#0a0f1d]"
              >
                <span>View My Skills</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded text-xs sm:text-sm font-mono font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-800 hover:text-white border border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400/40"
              >
                <Mail className="w-4 h-4 text-teal-400" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Photo Area (Honest Placeholder as requested) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group w-full max-w-xs sm:max-w-sm">
              
              {/* Outer decorative technical frame */}
              <div className="relative aspect-square w-full rounded-2xl bg-gradient-to-b from-slate-800/80 to-slate-900/90 border border-slate-700/80 p-3 shadow-xl teal-glow overflow-hidden">
                
                {/* Technical corner marks */}
                <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-teal-400/60" />
                <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-teal-400/60" />
                <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-teal-400/60" />
                <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-teal-400/60" />

                <div className="w-full h-full rounded-xl bg-[#0d1627] border border-slate-800/80 flex flex-col items-center justify-center relative overflow-hidden">
                  {/* Profile Photo */}
                  {activePhotoSrc ? (
                    <img
                      src={activePhotoSrc}
                      alt={portfolioData.personal.fullName}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top rounded-xl"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-6 text-center space-y-4">
                      {/* Monogram circle */}
                      <div className="w-24 h-24 rounded-full bg-slate-800/80 border border-teal-400/40 flex items-center justify-center shadow-inner">
                        <span className="font-mono text-3xl font-bold tracking-wider text-teal-300">
                          {portfolioData.personal.initials}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <p className="font-mono text-sm font-semibold text-slate-200">
                          Profile Photo Area
                        </p>
                        <p className="text-xs text-slate-400 max-w-[200px] leading-relaxed">
                          Clean placeholder ready for your portrait photo.
                        </p>
                      </div>

                      {/* File placement hint */}
                      <div className="bg-slate-900/90 border border-slate-800 rounded px-2.5 py-1 text-[11px] font-mono text-teal-400/90">
                        /public/profile.jpg
                      </div>
                    </div>
                  )}

                  {/* Interactive live test upload overlay */}
                  <label
                    htmlFor="photo-upload-input"
                    className="absolute inset-0 bg-[#0a0f1d]/75 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-4 text-center z-10 backdrop-blur-xs"
                    title="Click to preview a different photo"
                  >
                    <Camera className="w-8 h-8 text-teal-300 mb-2" />
                    <span className="font-mono text-xs font-medium text-white">Change / Preview Photo</span>
                    <span className="text-[11px] text-slate-300 mt-1">Select an image file to test</span>
                  </label>
                  <input
                    id="photo-upload-input"
                    type="file"
                    accept="image/*"
                    onChange={handleLocalImageSelect}
                    className="sr-only"
                    aria-label="Upload preview portrait"
                  />
                </div>
              </div>

              {/* Photo Status / Instructions Button below container */}
              <div className="mt-3 flex items-center justify-between px-1">
                <span className="text-[11px] font-mono text-teal-400/90 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                  {previewUrl ? "Custom preview active" : "Profile photo active"}
                </span>
                <button
                  type="button"
                  onClick={onOpenPhotoGuide}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-teal-300 underline underline-offset-2 transition-colors focus:outline-none"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Photo Guide</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
