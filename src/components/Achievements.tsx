import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Award, ScrollText, Calendar, Compass, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const { academic, events, certificates } = portfolioData.achievements;

  return (
    <section id="achievements" className="py-20 border-t border-slate-800/80 bg-[#090e1a]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <p className="text-xs font-mono font-medium text-teal-400 tracking-wider">
            Verified Milestones
          </p>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
              Achievements & Participation
            </h2>
            <span className="text-xs font-mono text-slate-500">
              Academic Ranks · Events · Certificates
            </span>
          </div>
        </div>

        {/* 1. Academic Results and Ranks */}
        <div className="mb-14">
          <h3 className="font-mono text-sm font-semibold text-slate-300 mb-6 flex items-center gap-2">
            <Trophy className="w-4 h-4 text-teal-400" />
            <span>Academic Performance & Institutional Ranks</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {academic.map((item) => (
              <div
                key={item.title}
                className={`rounded-xl p-5 border transition-all ${
                  item.highlight
                    ? 'bg-[#0e172a] border-teal-500/40 shadow-lg shadow-teal-950/20'
                    : 'bg-[#0e172a]/70 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                  <span>{item.title}</span>
                  {item.highlight && (
                    <Award className="w-4 h-4 text-teal-400" />
                  )}
                </div>

                <div className="font-mono text-3xl font-bold tracking-tight text-white mb-2 tabular-nums">
                  <span className={item.highlight ? 'text-teal-300' : 'text-slate-100'}>
                    {item.value}
                  </span>
                </div>

                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 2. Events & Certificates (Separated Clearly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Events Participation */}
          <div className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-teal-400" />
                <h3 className="font-mono text-sm font-semibold text-white">Event Participation</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Participation Records
              </span>
            </div>

            <p className="text-xs text-slate-400 font-sans mb-4">
              Active engagement in collegiate workshops and technical/cultural events:
            </p>

            <ul className="space-y-3 font-sans" role="list">
              {events.map((evt) => (
                <li
                  key={evt.title}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <h4 className="font-mono text-xs sm:text-sm font-semibold text-slate-200">
                      {evt.title}
                    </h4>
                    <div className="text-[11px] text-slate-400 font-mono">
                      <span>{evt.level}</span>
                      <span aria-hidden="true" className="mx-1.5 text-slate-600">·</span>
                      <span>{evt.timing}</span>
                    </div>
                  </div>
                  <span className="text-[11px] font-mono text-teal-400/90 shrink-0">
                    Participant
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certificates Earned */}
          <div className="bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-5">
              <div className="flex items-center gap-2">
                <ScrollText className="w-4 h-4 text-teal-400" />
                <h3 className="font-mono text-sm font-semibold text-white">Certificates Earned</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Official Certifications
              </span>
            </div>

            <p className="text-xs text-slate-400 font-sans mb-4">
              Credentials and certificates earned through completed courses and workshops:
            </p>

            <ul className="space-y-3 font-sans" role="list">
              {certificates.map((cert) => (
                <li
                  key={cert.title}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-start justify-between gap-3"
                >
                  <div className="space-y-0.5">
                    <h4 className="font-mono text-xs sm:text-sm font-semibold text-slate-200 flex items-center gap-2">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{cert.title}</span>
                    </h4>
                    <div className="text-[11px] text-slate-400 font-mono">
                      <span>{cert.issuerOrEvent}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 shrink-0">
                    {cert.type}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
