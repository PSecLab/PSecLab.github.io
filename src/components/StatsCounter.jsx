import React from 'react';
import { BookOpen, ShieldCheck, GitFork, Users } from 'lucide-react';
import papersData from '../data/papers.json';
import membersData from '../data/members.json';
import projectsData from '../data/projects.json';

export default function StatsCounter() {
  const paperCount = Array.isArray(papersData) ? papersData.length : 0;
  const memberCount = Array.isArray(membersData) ? membersData.length : 0;
  const projectCount = Array.isArray(projectsData) ? projectsData.length : 0;

  const stats = [
    {
      icon: BookOpen,
      value: paperCount > 0 ? `${paperCount}` : "—",
      label: "Publications",
      detail: "Conference & journal papers"
    },
    {
      icon: ShieldCheck,
      value: projectCount > 0 ? `${projectCount}` : "—",
      label: "Research Thrusts",
      detail: "Active research areas"
    },
    {
      icon: Users,
      value: memberCount > 0 ? `${memberCount}` : "—",
      label: "Lab Members",
      detail: "Faculty, students & alumni"
    },
    {
      icon: GitFork,
      value: "Open",
      label: "Open Science",
      detail: "Artifacts & code on GitHub"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-brand-500/30 transition shadow-lg relative overflow-hidden group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-brand-500/10 text-brand-400 group-hover:text-cyan-300 transition">
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {item.value}
              </div>
            </div>
            <h4 className="text-xs sm:text-sm font-semibold text-slate-200 mt-3">
              {item.label}
            </h4>
            <p className="text-[11px] text-slate-400 mt-1">
              {item.detail}
            </p>
          </div>
        );
      })}
    </div>
  );
}
