import React from 'react';
import { FolderGit2, ArrowUpRight, MessageSquare, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 border-t border-slate-800/80 bg-[#090e1a]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <p className="text-xs font-mono font-medium text-teal-400 tracking-wider">
            Work in Progress
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
              Projects & Engineering Work
            </h2>
            <span className="text-xs font-mono text-slate-500">
              Building Fundamentals First
            </span>
          </div>
        </div>

        {/* Clean Honest Project Portfolio Card */}
        <div className="relative rounded-2xl bg-gradient-to-b from-[#0e172a] to-[#0c1424] border border-slate-800 p-8 sm:p-12 text-center max-w-3xl mx-auto teal-glow">
          
          <div className="w-16 h-16 rounded-2xl bg-slate-800/60 border border-teal-500/30 flex items-center justify-center mx-auto mb-6 shadow-sm">
            <FolderGit2 className="w-8 h-8 text-teal-300" />
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-mono text-white mb-4">
            Building My Project Portfolio
          </h3>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-sans max-w-xl mx-auto mb-6">
            “I’m currently building my project portfolio. Check back soon, or connect with me to discuss project opportunities.”
          </p>

          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-400 font-sans max-w-lg mx-auto text-left space-y-2 mb-8">
            <div className="flex items-center gap-2 text-teal-300 font-mono text-xs">
              <Code2 className="w-4 h-4" />
              <span>Current Development Approach:</span>
            </div>
            <p className="text-slate-400">
              Focusing on solidifying Python programming, algorithmic thinking, and clean software architecture. Upcoming repositories and application prototypes will be published here as they reach completion.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded text-xs sm:text-sm font-mono font-medium text-[#0a0f1d] bg-teal-400 hover:bg-teal-300 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-[#0a0f1d]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Discuss Project Opportunities</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
