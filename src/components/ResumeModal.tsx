import React, { useEffect } from 'react';
import { X, FileText, CheckCircle2, AlertCircle, ArrowDownToLine, FolderPlus } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400/50"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-teal-500/30 flex items-center justify-center text-teal-300">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <h3 id="resume-modal-title" className="font-mono text-lg font-bold text-white">
              Curriculum Vitae / Résumé
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Status & Setup Instructions
            </p>
          </div>
        </div>

        {/* Informative Body */}
        <div className="space-y-4 text-sm text-slate-300 font-sans">
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300/90 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-400" />
            <p>
              <strong>Notice:</strong> As requested, no fabricated résumé or fake download link has been created.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider">
              How to add your résumé PDF:
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-400 pl-1">
              <li>
                Export your résumé as a PDF document.
              </li>
              <li>
                Name the file <code className="text-teal-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono">resume.pdf</code>.
              </li>
              <li>
                Save it directly into the project&apos;s <code className="text-teal-300 bg-slate-900 px-1.5 py-0.5 rounded font-mono">/public/</code> directory.
              </li>
              <li>
                The download button will then serve your genuine document seamlessly!
              </li>
            </ol>
          </div>

          {/* Quick Summary of Current Credentials */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs space-y-1.5 font-mono">
            <div className="text-teal-400 font-semibold mb-1">
              Highlights to include in your PDF:
            </div>
            <div className="text-slate-300">
              · Second-Year CSE at {portfolioData.personal.college}
            </div>
            <div className="text-slate-300">
              · 92% First Year Overall (1st in Dept, 3rd in College)
            </div>
            <div className="text-slate-300">
              · Skills: C, HTML, Python (Active)
            </div>
            <div className="text-slate-300">
              · Certificates: C Language, Dista, Illumination Workshop
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-slate-800">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2 text-xs font-mono text-slate-400 hover:text-white rounded hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          
          <a
            href={portfolioData.personal.resumePath}
            download="Nandini_Apet_Resume.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-mono font-medium text-[#0a0f1d] bg-teal-400 hover:bg-teal-300 rounded transition-colors"
          >
            <ArrowDownToLine className="w-3.5 h-3.5" />
            <span>Download PDF (if file present)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
