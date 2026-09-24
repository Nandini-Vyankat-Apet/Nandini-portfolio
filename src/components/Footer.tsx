import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, BookOpen, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResumeModal: () => void;
  onOpenSetupGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResumeModal, onOpenSetupGuide }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800/80 bg-[#070b16] py-12 text-slate-400 font-sans text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Tier: Name & Quick Links */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800/60">
          <div>
            <span className="font-mono text-base font-bold text-white tracking-tight">
              {portfolioData.personal.fullName}
            </span>
            <p className="text-xs text-slate-500 font-sans mt-0.5">
              {portfolioData.personal.role} · Solapur, Maharashtra, India
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-mono text-xs">
            <button
              onClick={onOpenSetupGuide}
              className="text-teal-400 hover:text-teal-300 flex items-center gap-1 transition-colors"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Owner&apos;s Setup Guide</span>
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <button
              onClick={onOpenResumeModal}
              className="text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Résumé</span>
            </button>
            <span aria-hidden="true" className="text-slate-700">·</span>
            <a
              href="#top"
              className="text-slate-400 hover:text-slate-200 flex items-center gap-1 transition-colors"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Tier: Academic Trust & Copyright */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-slate-500 font-mono text-[11px]">
          <div>
            <span>N. B. Navale Sinhgad College of Engineering</span>
            <span aria-hidden="true" className="mx-2 text-slate-700">·</span>
            <span>Class of {portfolioData.personal.expectedGraduation}</span>
          </div>

          <div>
            <span>&copy; {currentYear} {portfolioData.personal.fullName}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
