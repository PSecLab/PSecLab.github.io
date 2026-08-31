import React from 'react';
import { Shield, Github, Twitter, Linkedin, Globe, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 text-slate-400 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white">
                <Shield className="w-4 h-4" />
              </div>
              <span className="text-lg font-bold text-white font-mono">
                PSec<span className="text-cyan-400">Lab</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed">
              <strong>Penn Systems & Security Lab (PSecLab)</strong> is directed by Prof. Arslan Khan. We focus on advancing systems and software security across operating systems, confidential computing, and resource-constrained embedded systems.
            </p>
            <p className="text-xs text-slate-300 font-mono leading-relaxed">
              School of EECS &bull; Department of Computer Science and Engineering<br />
              Institute for Networking and Security Research (INSR)<br />
              Pennsylvania State University &bull; W359 Westgate Building, University Park, PA
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" className="hover:text-cyan-300 transition">Overview</a></li>
              <li><a href="#research" className="hover:text-cyan-300 transition">Research Thrusts</a></li>
              <li><a href="#publications" className="hover:text-cyan-300 transition">Publications</a></li>
              <li><a href="#team" className="hover:text-cyan-300 transition">People & Alumni</a></li>
              <li><a href="#news" className="hover:text-cyan-300 transition">Lab News</a></li>
              <li><a href="#join" className="hover:text-cyan-300 transition">Join Us</a></li>
            </ul>
          </div>

          {/* Col 3: PI Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://arslan8.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Prof. Arslan Khan (PI)</span>
                </a>
              </li>
              <li>
                <a href="mailto:arslankhan@psu.edu" className="hover:text-cyan-300 transition flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>arslankhan@psu.edu</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Arslan8" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5" />
                  <span>GitHub (@Arslan8)</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Arslan0o0" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition flex items-center gap-1.5">
                  <Twitter className="w-3.5 h-3.5" />
                  <span>Twitter (@Arslan0o0)</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/arslankhan52/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition flex items-center gap-1.5">
                  <Linkedin className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} PSecLab &bull; Penn State University. Hosted on GitHub Pages.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/PSecLab/PSecLab.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Repository</span>
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
