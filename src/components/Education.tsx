import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';

export const Education: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-t border-slate-800/80 bg-[#0a0f1d]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <p className="text-xs font-mono font-medium text-teal-400 tracking-wider">
            Academic Background
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
            Formal Education
          </h2>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-[#0e172a] border border-slate-800 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-colors">
            
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-teal-400" />
                  <span className="font-mono text-xs text-teal-300">Undergraduate Degree</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold font-mono text-white">
                  Computer Science and Engineering
                </h3>
                <p className="text-base text-slate-300 font-medium font-sans">
                  {education.institution}
                </p>
              </div>

              <div className="flex flex-col md:items-end gap-1.5 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1.5 text-teal-300 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-teal-400" />
                  Expected Graduation: {education.graduatingYear}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {education.campusLocation}
                </span>
                <span className="text-slate-500">
                  Current Status: Second Year
                </span>
              </div>
            </div>

            {/* Academic Standing & Overview */}
            <div className="pt-6 space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {education.overview}
              </p>

              {/* Zero-Pill Key Milestones */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-200 mb-1">
                    <Award className="w-4 h-4 text-teal-400" />
                    <span>Academic Distinction</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Achieved 1st Rank in the Department of Computer Science & Engineering and 3rd Rank college-wide during first year.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  <div className="flex items-center gap-2 font-mono text-xs font-semibold text-slate-200 mb-1">
                    <BookOpen className="w-4 h-4 text-teal-400" />
                    <span>Curriculum Scope</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    Coursework encompassing foundational programming (C), discrete mathematics, logic design, and emerging engineering disciplines.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
