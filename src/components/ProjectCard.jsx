import React from 'react';
import { Cpu, Bot, ShieldCheck, Zap, Github, Star, Sparkles, Award } from 'lucide-react';

const iconMap = {
  Cpu: Cpu,
  Bot: Bot,
  ShieldCheck: ShieldCheck,
  Zap: Zap,
};

export default function ProjectCard({ project }) {
  const IconComponent = iconMap[project.icon] || Cpu;

  return (
    <div className="bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-brand-500/40 rounded-2xl p-6 sm:p-7 transition-all duration-300 shadow-xl flex flex-col justify-between group">
      <div>
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="p-3 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 group-hover:bg-brand-500/20 group-hover:text-cyan-300 transition">
            <IconComponent className="w-6 h-6" />
          </div>
          {project.grant && (
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-slate-800/90 text-cyan-300 border border-slate-700">
              {project.grant}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mt-5 group-hover:text-brand-300 transition-colors">
          {project.title}
        </h3>

        <p className="text-sm text-brand-400 font-medium mt-1">
          {project.subtitle}
        </p>

        <p className="text-sm text-slate-300/90 mt-4 leading-relaxed">
          {project.description}
        </p>

        {/* Highlights */}
        {project.highlights && (
          <div className="mt-5 space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Key Breakthroughs
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Featured Tools & Repositories */}
      <div className="mt-6 pt-5 border-t border-slate-800/80">
        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
          Open-Source Artifacts & Tools
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {project.tools && project.tools.map((tool) => (
            <a
              key={tool.name}
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 rounded-xl bg-slate-950/80 hover:bg-brand-950/60 border border-slate-800 hover:border-brand-500/40 transition group/tool"
            >
              <div>
                <div className="flex items-center gap-2">
                  <Github className="w-4 h-4 text-slate-300 group-hover/tool:text-white" />
                  <span className="text-xs font-bold text-white group-hover/tool:text-cyan-300">
                    {tool.name}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                  {tool.description}
                </p>
              </div>

              {tool.stars && (
                <div className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-md flex-shrink-0 ml-2">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{tool.stars}</span>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
