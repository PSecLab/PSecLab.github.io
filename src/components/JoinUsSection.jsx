import React from 'react';
import { UserPlus, Mail, ArrowRight, GraduationCap, Briefcase } from 'lucide-react';

export default function JoinUsSection() {
  return (
    <div className="bg-gradient-to-br from-brand-950/40 via-slate-900 to-slate-950 border border-brand-500/30 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 mb-4">
          <UserPlus className="w-3.5 h-3.5" />
          <span>Open Positions</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Join the PSecLab Research Team
        </h3>

        <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
          We are always looking for self-motivated <strong>Ph.D. students, Postdoctoral Scholars, Master's, and Undergraduate Researchers</strong> passionate about security research.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm">
              <GraduationCap className="w-4 h-4" />
              <span>Prospective Graduate Students</span>
            </div>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Prospective Ph.D. or Master's applicants should apply to the graduate program and mention our lab/PI in their application.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800">
            <div className="flex items-center gap-2 text-brand-300 font-semibold text-sm">
              <Briefcase className="w-4 h-4" />
              <span>Undergraduate Researchers</span>
            </div>
            <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
              Students interested in hands-on research and system development are encouraged to reach out with a resume.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:contact@pseclab.org?subject=[Prospective Student Application] Your Name"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm shadow-lg shadow-brand-600/25 transition transform hover:-translate-y-0.5"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Lab</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/PSecLab"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white font-medium text-sm transition"
          >
            <span>Lab GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
