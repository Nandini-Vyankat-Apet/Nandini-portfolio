import React, { useEffect } from 'react';
import { X, BookOpen, User, Link, FileText, Eye, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface PortfolioSetupGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioSetupGuideModal: React.FC<PortfolioSetupGuideModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="setup-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400/50"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-teal-500/30 flex items-center justify-center text-teal-300">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h3 id="setup-guide-title" className="font-mono text-lg font-bold text-white">
              Portfolio Owner&apos;s Quick Guide
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Summary of key edit locations and connection steps
            </p>
          </div>
        </div>

        <div className="space-y-6 text-xs sm:text-sm font-sans text-slate-300">
          
          {/* 1. Preview */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-mono font-semibold">
              <Eye className="w-4 h-4 text-teal-400" />
              <span>1. How to Preview Your Website</span>
            </div>
            <p className="text-slate-400 leading-relaxed pl-6">
              Your site is already running in live preview on port 3000! You can view it in the AI Studio preview pane or share the preview link on desktop and mobile devices.
            </p>
          </div>

          {/* 2. Profile Photo */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-mono font-semibold">
              <User className="w-4 h-4 text-teal-400" />
              <span>2. Where to Replace the Profile Photo</span>
            </div>
            <p className="text-slate-400 leading-relaxed pl-6">
              Your photo is loaded from <code className="text-teal-300 font-mono bg-slate-900 px-1 py-0.5 rounded">/public/nandini.png</code>. To change it, place your new image in <code className="text-teal-300 font-mono bg-slate-900 px-1 py-0.5 rounded">/public/</code> and update <code className="text-teal-300 font-mono bg-slate-900 px-1 py-0.5 rounded">profilePhotoPath</code> in <code className="text-teal-300 font-mono bg-slate-900 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>.
            </p>
          </div>

          {/* 3. Email & Social URLs */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-mono font-semibold">
              <Link className="w-4 h-4 text-teal-400" />
              <span>3. Where to Add Email & Social URLs</span>
            </div>
            <div className="pl-6 space-y-1.5 text-slate-400">
              <p>
                Open <code className="text-teal-300 font-mono bg-slate-900 px-1 py-0.5 rounded">src/data/portfolioData.ts</code>. In the <code className="text-slate-200 font-mono">personal</code> section:
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
                <li>Update <code className="text-slate-300 font-mono">email</code> with your preferred email address.</li>
                <li>Update <code className="text-slate-300 font-mono">linkedinUrl</code> with your LinkedIn profile link.</li>
                <li>Update <code className="text-slate-300 font-mono">githubUrl</code> with your GitHub profile link.</li>
              </ul>
            </div>
          </div>

          {/* 4. Résumé PDF */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-white font-mono font-semibold">
              <FileText className="w-4 h-4 text-teal-400" />
              <span>4. How to Add Your Résumé PDF</span>
            </div>
            <p className="text-slate-400 leading-relaxed pl-6">
              Save your exported PDF as <code className="text-teal-300 font-mono bg-slate-900 px-1 py-0.5 rounded">resume.pdf</code> inside the <code className="text-teal-300 font-mono bg-slate-900 px-1 py-0.5 rounded">/public/</code> directory. The Résumé download buttons in the navigation bar and modal will download it directly.
            </p>
          </div>

        </div>

        <div className="pt-3 flex justify-end border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono font-medium text-[#0a0f1d] bg-teal-400 hover:bg-teal-300 rounded transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
