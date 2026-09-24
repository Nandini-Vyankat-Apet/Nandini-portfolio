import React, { useState } from 'react';
import { Mail, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/80 bg-[#0a0f1d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12 text-center max-w-2xl mx-auto">
          <p className="text-xs font-mono font-medium text-teal-400 tracking-wider">
            Initiate Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
            Connect & Discuss Opportunities
          </h2>
          <p className="text-sm text-slate-400 font-sans mt-2">
            I am actively looking for internship opportunities, student projects, and engineering mentorship. Feel free to reach out directly via email or connect on professional platforms.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          
          {/* Email Card */}
          <div className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>Email Address</span>
                </span>
                <button
                  onClick={() => handleCopy(portfolioData.personal.email, 'email')}
                  className="text-[11px] font-mono text-teal-400 hover:text-teal-300 flex items-center gap-1 focus:outline-none"
                  aria-label="Copy email address"
                >
                  {copiedKey === 'email' ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="block font-mono text-sm font-semibold text-white hover:text-teal-300 transition-colors break-all"
                >
                  {portfolioData.personal.email}
                </a>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Primary channel for internship inquiries and project discussions.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800/80">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-teal-400 hover:text-teal-300"
              >
                <span>Write an Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  LinkedIn Profile
                </span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded">
                  Placeholder
                </span>
              </div>

              <div>
                <span className="block font-mono text-xs text-slate-300 break-all select-all">
                  {portfolioData.personal.linkedinUrl}
                </span>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Professional networking & academic milestones.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-sans">
                Editable in data file
              </span>
              <button
                onClick={() => handleCopy(portfolioData.personal.linkedinUrl, 'linkedin')}
                className="text-[11px] font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1"
                aria-label="Copy LinkedIn URL"
              >
                {copiedKey === 'linkedin' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-colors">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  GitHub Profile
                </span>
                <span className="text-[10px] font-mono text-amber-400/90 bg-amber-400/10 px-2 py-0.5 rounded">
                  Placeholder
                </span>
              </div>

              <div>
                <span className="block font-mono text-xs text-slate-300 break-all select-all">
                  {portfolioData.personal.githubUrl}
                </span>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Code repositories, practice problems & future project work.
                </p>
              </div>
            </div>

            <div className="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-sans">
                Editable in data file
              </span>
              <button
                onClick={() => handleCopy(portfolioData.personal.githubUrl, 'github')}
                className="text-[11px] font-mono text-slate-400 hover:text-slate-200 flex items-center gap-1"
                aria-label="Copy GitHub URL"
              >
                {copiedKey === 'github' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy URL</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

        {/* Location Banner */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-400" />
            <span>Based in {portfolioData.personal.homeLocation}</span>
          </div>
          <span className="text-slate-500">
            Open to remote & on-site student internship opportunities
          </span>
        </div>

      </div>
    </section>
  );
};
