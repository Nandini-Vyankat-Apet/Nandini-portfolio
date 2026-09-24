import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Sparkles, Terminal, Compass, Briefcase } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/80 bg-[#090e1a]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-1 mb-12">
          <p className="text-xs font-mono font-medium text-teal-400 tracking-wider">
            About Me
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono text-white tracking-tight">
            Curious, Analytical & Committed to Learning
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Prose Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base leading-relaxed font-sans">
            <p>
              I am a technology-driven Computer Science and Engineering student at{' '}
              <span className="text-white font-medium">
                N. B. Navale Sinhgad College of Engineering
              </span>{' '}
              in Solapur, Maharashtra. I find genuine excitement in understanding how computing systems work
              from first principles and translating logical concepts into well-structured code.
            </p>

            <p>
              Having developed a solid academic grounding during my first year with a{' '}
              <span className="text-teal-300 font-mono font-semibold">92% overall</span> result (securing{' '}
              <span className="text-teal-300 font-mono font-semibold">1st rank in the CSE department</span> and{' '}
              <span className="text-teal-300 font-mono font-semibold">3rd rank across the college</span>), my current focus is on expanding my programming repertoire.
            </p>

            <p>
              Right now, I am actively learning <span className="text-white font-medium">Python</span>, practicing syntax fundamentals and building problem-solving intuition. Looking forward, I plan to dive deep into Data Structures & Algorithms, Java, and Aptitude problem-solving.
            </p>

            <p className="pt-2 border-t border-slate-800 text-slate-200">
              I am actively looking for <span className="text-teal-300 font-medium">internship and project opportunities</span> where I can contribute enthusiasm, a strong work ethic, and fresh perspectives while continuing to learn from experienced engineers and mentors.
            </p>
          </div>

          {/* Right Column: Focus & Objective Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="bg-[#0e172a] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Terminal className="w-5 h-5 text-teal-400" />
                <h3 className="font-mono text-sm font-semibold text-white">Current Technical Focus</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Strengthening algorithmic logic through Python, practicing core language constructs, and exploring structured programming patterns.
              </p>
            </div>

            <div className="bg-[#0e172a] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Briefcase className="w-5 h-5 text-teal-400" />
                <h3 className="font-mono text-sm font-semibold text-white">Opportunity Readiness</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Open to summer/winter internships, mentorship programs, student research projects, and collaborative technical initiatives.
              </p>
            </div>

            <div className="bg-[#0e172a] border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
              <div className="flex items-center gap-3 mb-2">
                <Compass className="w-5 h-5 text-teal-400" />
                <h3 className="font-mono text-sm font-semibold text-white">Academic Journey</h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Second-year undergraduate at N. B. Navale Sinhgad College of Engineering (Kegaon, Solapur), on track for graduation in 2029.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
