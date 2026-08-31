import React from 'react';
import { Mail, Globe, Github, Linkedin, BookOpen, MapPin } from 'lucide-react';

export default function MemberCard({ member }) {
  const isAlumni = member.category === 'alumni';

  return (
    <div className="group bg-slate-900/80 hover:bg-slate-900 border border-slate-800 hover:border-brand-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-brand-500/5">
      <div>
        <div className="flex items-start gap-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden bg-slate-800 flex-shrink-0 border-2 border-slate-700/60 group-hover:border-brand-500/50 transition">
            <img
              src={member.avatar}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              onError={(e) => {
                // Fallback for avatar placeholder
                e.target.onerror = null;
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0f172a&color=38bdf8&size=200`;
              }}
            />
          </div>

          <div className="flex-1 min-w-0">
            <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-brand-300 transition-colors truncate">
              {member.name}
            </h4>
            <p className="text-xs sm:text-sm font-medium text-brand-400 mt-0.5">
              {member.role}
            </p>
            <p className="text-xs text-slate-400 mt-1 line-clamp-1">
              {member.affiliation}
            </p>
            {member.office && (
              <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-brand-400" />
                <span>{member.office}</span>
              </p>
            )}
          </div>
        </div>

        {/* Bio & Current Role for Alumni */}
        {isAlumni && member.currentRole && (
          <div className="mt-3.5 px-3 py-2 rounded-lg bg-slate-950/80 border border-slate-800 text-xs text-emerald-300 font-medium">
            Next Destination: {member.currentRole}
          </div>
        )}

        {member.bio && (
          <p className="text-xs sm:text-sm text-slate-300/90 mt-3.5 leading-relaxed line-clamp-3">
            {member.bio}
          </p>
        )}

        {/* Research Interest Tags */}
        {member.researchInterest && member.researchInterest.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {member.researchInterest.map((interest) => (
              <span
                key={interest}
                className="text-[11px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono"
              >
                {interest}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Social / Academic Links */}
      <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center gap-2.5 text-slate-400">
        {member.email && (
          <a
            href={`mailto:${member.email}`}
            className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
            title="Email"
            aria-label={`Email ${member.name}`}
          >
            <Mail className="w-4 h-4" />
          </a>
        )}

        {member.website && (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
            title="Personal Website"
            aria-label={`Website for ${member.name}`}
          >
            <Globe className="w-4 h-4" />
          </a>
        )}

        {member.googleScholar && (
          <a
            href={member.googleScholar}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-cyan-400 transition"
            title="Google Scholar"
            aria-label={`Google Scholar for ${member.name}`}
          >
            <BookOpen className="w-4 h-4" />
          </a>
        )}

        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition"
            title="GitHub"
            aria-label={`GitHub for ${member.name}`}
          >
            <Github className="w-4 h-4" />
          </a>
        )}

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-blue-400 transition"
            title="LinkedIn"
            aria-label={`LinkedIn for ${member.name}`}
          >
            <Linkedin className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
}
