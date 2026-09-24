import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { CheckCircle2, Loader2, ArrowRightCircle } from 'lucide-react';

export const Skills: React.FC = () => {
  const { completed, currentlyLearning, plannedLearning } = portfolioData.skills;

  return (
    <section id="skills" className="py-20 border-t border-slate-800/80 bg-[#0a0f1d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <p className="text-xs font-mono font-medium text-teal-400 tracking-wider">
            Technical Competencies
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
              Skills & Learning Trajectory
            </h2>
            <p className="text-xs text-slate-400 font-mono">
              Transparent status · Zero arbitrary ratings
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Completed Skills */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h3 className="font-mono text-sm font-semibold text-white">Completed</h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-400">
                {completed.length} Completed
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {completed.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#0e172a] border border-slate-800/80 rounded-xl p-4 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-mono text-sm font-bold text-white">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-emerald-400/90 shrink-0">
                      Completed
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-mono mb-2">
                    {skill.category}
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Currently Learning */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 text-teal-400 animate-spin" />
                <h3 className="font-mono text-sm font-semibold text-white">Currently Learning</h3>
              </div>
              <span className="text-[11px] font-mono text-teal-400">
                Active Focus
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {currentlyLearning.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#0e172a] border border-teal-900/40 rounded-xl p-4 hover:border-teal-700/60 transition-colors relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-teal-500/5 rounded-full blur-xl pointer-events-none" />
                  
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h4 className="font-mono text-sm font-bold text-teal-300">
                      {skill.name}
                    </h4>
                    <span className="text-[11px] font-mono text-teal-400 shrink-0 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                      In Progress
                    </span>
                  </div>
                  <div className="text-xs text-slate-500 font-mono mb-2">
                    {skill.focus}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    {skill.description}
                  </p>
                </div>
              ))}

              <div className="p-4 rounded-xl border border-dashed border-slate-800/80 bg-slate-900/40 text-xs text-slate-400 font-sans leading-relaxed">
                <span className="font-mono text-slate-300 block mb-1 text-xs">Methodology:</span>
                Focusing on practical exercises, syntax retention, and solving algorithmic problems to build a strong foundation before starting projects.
              </div>
            </div>
          </div>

          {/* Column 3: Planning to Learn */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <ArrowRightCircle className="w-4 h-4 text-slate-400" />
                <h3 className="font-mono text-sm font-semibold text-white">Planning to Learn</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                {plannedLearning.length} Planned
              </span>
            </div>

            <div className="space-y-3 flex-1">
              {plannedLearning.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-[#0e172a]/60 border border-slate-800/80 rounded-xl p-3.5 hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="font-mono text-xs font-semibold text-slate-200">
                      {skill.name}
                    </h4>
                    <span className="text-[10px] font-mono text-slate-500 shrink-0">
                      Upcoming
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-mono">
                    {skill.category}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
