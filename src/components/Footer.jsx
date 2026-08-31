import React from 'react';
import { Shield, Github, Mail, ArrowUp } from 'lucide-react';

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
              The Penn Systems & Security Lab (PSecLab) focuses on advancing automated binary analysis, cyber-physical & robotics security, confidential computing enclaves, and firmware hardening.
            </p>
            <p className="text-xs text-slate-300 font-mono">
              College of Information Sciences and Technology / EECS<br />
              The Pennsylvania State University, University Park, PA
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#overview" className="hover:text-cyan-300 transition">Overview</a></li>
              <li><a href="#research" className="hover:text-cyan-300 transition">Research Thrusts</a></li>
              <li><a href="#publications" className="hover:text-cyan-300 transition">Publications</a></li>
              <li><a href="#tools" className="hover:text-cyan-300 transition">Software & Tools</a></li>
              <li><a href="#team" className="hover:text-cyan-300 transition">People & Alumni</a></li>
              <li><a href="#news" className="hover:text-cyan-300 transition">Lab News</a></li>
            </ul>
          </div>

          {/* Col 3: Research Tools */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Open-Source Tools
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li><a href="https://github.com/PSecLab/FastDyn" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">FastDyn (QEMU DBI)</a></li>
              <li><a href="https://github.com/PSecLab/ddsfuzz" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">ddsfuzz (CPS/ROS2)</a></li>
              <li><a href="https://github.com/PSecLab/slicer" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">slicer (LLVM)</a></li>
              <li><a href="https://github.com/PSecLab/xbin" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">xbin (Binary Triager)</a></li>
              <li><a href="https://github.com/PSecLab/Pieces" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300 transition">Pieces (Firmware)</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} PSecLab. Hosted permanently on GitHub Pages.</p>
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
