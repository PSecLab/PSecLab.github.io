import React from 'react';
import { Bell, Sparkles, ExternalLink, Calendar } from 'lucide-react';
import newsData from '../data/news.json';

export default function NewsSection() {
  if (!newsData || newsData.length === 0) {
    return (
      <div className="text-center py-12 px-4 rounded-2xl bg-slate-900/40 border border-slate-800 text-slate-400 text-sm">
        <Sparkles className="w-6 h-6 text-cyan-400/60 mx-auto mb-2.5" />
        <p className="font-medium text-slate-300">No news updates yet</p>
        <p className="text-xs text-slate-400 mt-1">
          Recent announcements and publications will appear here. Add entries to <code className="text-cyan-400 font-mono">src/data/news.json</code>.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {newsData.map((item) => (
        <div
          key={item.id}
          className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/40 transition-all duration-200 group flex flex-col sm:flex-row sm:items-start gap-4"
        >
          <div className="flex sm:flex-col items-center sm:items-start gap-2 flex-shrink-0">
            <span className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/40 px-2.5 py-1 rounded-md">
              <Calendar className="w-3 h-3" />
              <span>{item.date}</span>
            </span>
            {item.category && (
              <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {item.category}
              </span>
            )}
          </div>

          <div className="flex-1">
            <h4 className="text-base font-bold text-white group-hover:text-brand-300 transition">
              {item.title}
            </h4>
            {item.description && (
              <p className="text-xs sm:text-sm text-slate-300/90 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            )}
            {item.link && (
              <a
                href={item.link}
                className="inline-flex items-center gap-1 text-xs font-medium text-brand-400 hover:text-cyan-300 mt-2 transition"
              >
                <span>Read more</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
