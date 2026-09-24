import React, { useEffect } from 'react';
import { X, Camera, Image as ImageIcon, CheckCircle2, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface PhotoGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PhotoGuideModal: React.FC<PhotoGuideModalProps> = ({ isOpen, onClose }) => {
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
      aria-labelledby="photo-guide-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-lg bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400/50"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-slate-800 border border-teal-500/30 flex items-center justify-center text-teal-300">
            <Camera className="w-5 h-5" />
          </div>
          <div>
            <h3 id="photo-guide-title" className="font-mono text-lg font-bold text-white">
              Profile Photo Replacement
            </h3>
            <p className="text-xs text-slate-400 font-sans">
              Instructions for adding your own portrait
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-slate-300 font-sans">
          <p className="leading-relaxed">
            Your portfolio is currently configured to load your custom photo from{' '}
            <code className="text-teal-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded">/public/nandini.png</code>.
          </p>

          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
            <h4 className="font-mono text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-1.5">
              <ImageIcon className="w-4 h-4 text-teal-400" />
              <span>Step-by-Step Instructions:</span>
            </h4>
            <ol className="list-decimal list-inside space-y-2 text-xs text-slate-400 pl-1 leading-relaxed">
              <li>
                Prepare your headshot or portrait (square or portrait orientation).
              </li>
              <li>
                Place the file directly inside the <code className="text-teal-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded">/public/</code> directory.
              </li>
              <li>
                Update <code className="text-teal-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded">profilePhotoPath</code> in <code className="text-teal-300 font-mono bg-slate-950 px-1.5 py-0.5 rounded">src/data/portfolioData.ts</code> to match your file name (e.g. <code className="text-teal-300 font-mono">/nandini.png</code>).
              </li>
            </ol>
          </div>

          <p className="text-xs text-slate-400">
            Tip: You can also hover over the photo placeholder in the Hero section and click to immediately test a local image preview directly in your browser.
          </p>
        </div>

        <div className="pt-2 flex justify-end border-t border-slate-800">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono font-medium text-[#0a0f1d] bg-teal-400 hover:bg-teal-300 rounded transition-colors"
          >
            Understood
          </button>
        </div>
      </div>
    </div>
  );
};
