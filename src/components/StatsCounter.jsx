import React from 'react';
import { BookOpen, ShieldAlert, GitFork, Award } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      icon: BookOpen,
      value: "25+",
      label: "Top-Tier Security Papers",
      detail: "IEEE S&P, USENIX Sec, ACM CCS, NDSS"
    },
    {
      icon: ShieldAlert,
      value: "19+",
      label: "Zero-Day CVEs Found",
      detail: "In ROS2, DDS, and embedded stacks"
    },
    {
      icon: GitFork,
      value: "800+",
      label: "Open Source Stars",
      detail: "Across FastDyn, ddsfuzz, slicer, etc."
    },
    {
      icon: Award,
      value: "$3M+",
      label: "Active Research Grants",
      detail: "Supported by NSF, ONR, DARPA, Industry"
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
