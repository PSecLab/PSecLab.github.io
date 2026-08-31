import React, { useState } from 'react';
import { FileText, Code2, Presentation, Quote, ChevronDown, ChevronUp, Award, ExternalLink } from 'lucide-react';

export default function PaperCard({ paper, onOpenBibtex }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800/80 hover:border-brand-500/40 rounded-2xl p-6 transition-all duration-300 shadow-lg hover:shadow-brand-500/5 relative">
      {/* Award Badge if present */}
      {paper.award && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
          <Award className="w-3.5 h-3.5 text-amber-400" />
          <span>{paper.award}</span>
        </div>
      )}

      {/* Title */}
      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-brand-300 transition-colors leading-snug">
        {paper.title}
      </h3>

      {/* Authors */}
      <p className="text-sm text-slate-400 mt-2 leading-relaxed">
        {paper.authors}
      </p>

      {/* Venue & Year Badge */}
      <div className="flex flex-wrap items-center gap-2 mt-3 text-xs font-mono">
        <span className="px-2.5 py-1 rounded-md bg-brand-950/80 text-brand-300 border border-brand-800/50 font-medium">
          {paper.venue}
        </span>
        <span className="px-2 py-0.5 rounded-md bg-slate-800 text-slate-400">
          {paper.year}
        </span>
        {paper.tags && paper.tags.map((tag) => (
          <span key={tag} className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-400 text-xs">
            #{tag}
          </span>
        ))}
      </div>

      {/* Collapsible Abstract */}
      {paper.abstract && (
        <div className="mt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center gap-1 text-xs font-medium text-slate-400 hover:text-brand-300 transition"
          >
            <span>{expanded ? 'Hide Abstract' : 'View Abstract'}</span>
            {expanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {expanded && (
            <div className="mt-2.5 p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans animate-in fade-in duration-200">
              {paper.abstract}
            </div>
          )}
        </div>
      )}

      {/* Action Links */}
      <div className="mt-5 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium">
        {paper.pdfUrl && (
          <a
            href={paper.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-200 hover:text-white transition shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>PDF</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        )}

        {paper.codeUrl && (
          <a
            href={paper.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-200 hover:text-white transition shadow-sm"
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Code / Artifact</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        )}

        {paper.slidesUrl && (
          <a
            href={paper.slidesUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-brand-600 text-slate-200 hover:text-white transition shadow-sm"
          >
            <Presentation className="w-3.5 h-3.5" />
            <span>Slides</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        )}

        {paper.bibtex && (
          <button
            onClick={() => onOpenBibtex(paper)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition ml-auto"
          >
            <Quote className="w-3.5 h-3.5 text-cyan-400" />
            <span>BibTeX</span>
          </button>
        )}
      </div>
    </div>
  );
}
