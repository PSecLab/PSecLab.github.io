import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero3D from './components/Hero3D';
import StatsCounter from './components/StatsCounter';
import ProjectCard from './components/ProjectCard';
import PaperCard from './components/PaperCard';
import MemberCard from './components/MemberCard';
import NewsSection from './components/NewsSection';
import JoinUsSection from './components/JoinUsSection';
import BibtexModal from './components/BibtexModal';

import papersData from './data/papers.json';
import membersData from './data/members.json';
import projectsData from './data/projects.json';

import { Search, Filter, ArrowRight, ShieldCheck, Terminal, BookOpen, Users, Sparkles, Github, Code, Cpu } from 'lucide-react';

export default function App() {
  // BibTeX Modal state
  const [selectedBibtexPaper, setSelectedBibtexPaper] = useState(null);

  // Publications search and filter state
  const [pubSearch, setPubSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedYear, setSelectedYear] = useState('All');

  // Team category filter
  const [teamCategory, setTeamCategory] = useState('all');

  // Compute all unique tags and years from papers
  const allTags = useMemo(() => {
    const tags = new Set(['All']);
    papersData.forEach(p => p.tags && p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
  }, []);

  const allYears = useMemo(() => {
    const years = new Set(['All']);
    papersData.forEach(p => years.add(p.year.toString()));
    return Array.from(years).sort((a, b) => (b === 'All' ? -1 : b.localeCompare(a)));
  }, []);

  // Filtered papers
  const filteredPapers = useMemo(() => {
    return papersData.filter(paper => {
      const matchSearch =
        pubSearch.trim() === '' ||
        paper.title.toLowerCase().includes(pubSearch.toLowerCase()) ||
        paper.authors.toLowerCase().includes(pubSearch.toLowerCase()) ||
        paper.venue.toLowerCase().includes(pubSearch.toLowerCase()) ||
        paper.abstract?.toLowerCase().includes(pubSearch.toLowerCase());

      const matchTag = selectedTag === 'All' || (paper.tags && paper.tags.includes(selectedTag));
      const matchYear = selectedYear === 'All' || paper.year.toString() === selectedYear;

      return matchSearch && matchTag && matchYear;
    });
  }, [pubSearch, selectedTag, selectedYear]);

  // Filtered team members
  const filteredMembers = useMemo(() => {
    if (teamCategory === 'all') return membersData;
    return membersData.filter(m => m.category === teamCategory);
  }, [teamCategory]);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-brand-500 selection:text-white flex flex-col font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section id="overview" className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
        {/* 3D Interactive Three.js Network Canvas */}
        <Hero3D />

        {/* Ambient background glow and grid */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono bg-brand-950/80 text-brand-300 border border-brand-700/40 shadow-inner mb-6 backdrop-blur-md animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Penn State Systems & Security Research Group</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight max-w-5xl mx-auto">
            Architecting <span className="text-gradient">Trustworthy Systems</span> & High-Assurance Security
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            PSecLab conducts foundational and applied research in <strong>automated binary analysis</strong>, <strong>cyber-physical & robot protocol fuzzing</strong>, <strong>confidential computing hardware</strong>, and <strong>embedded firmware security</strong>.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#publications"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white text-sm font-semibold shadow-lg shadow-brand-600/30 transition transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>Explore Publications</span>
            </a>

            <a
              href="#tools"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-white text-sm font-semibold transition"
            >
              <Code className="w-4 h-4 text-cyan-400" />
              <span>Software & Tools</span>
            </a>

            <a
              href="#join"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 text-sm font-medium transition"
            >
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Join the Lab</span>
            </a>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 sm:mt-20 max-w-5xl mx-auto">
            <StatsCounter />
          </div>
        </div>
      </section>

      {/* 2. RESEARCH THRUSTS */}
      <section id="research" className="py-20 sm:py-28 relative border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Core Research Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Research Thrusts & Innovations
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              We build principled systems, compiler techniques, and hardware-software co-designs to protect modern computing infrastructures.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. PUBLICATIONS */}
      <section id="publications" className="py-20 sm:py-28 relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-brand-400 bg-brand-950/50 border border-brand-800/40 mb-3">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Peer-Reviewed Literature</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Publications & Papers
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Published at top-tier security and systems venues (IEEE S&P, USENIX Security, ACM CCS, NDSS, EuroSys, ASPLOS).
              </p>
            </div>

            {/* Publication Search */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search papers, authors, topics..."
                value={pubSearch}
                onChange={(e) => setPubSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-500 transition"
              />
            </div>
          </div>

          {/* Tags / Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800/60">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-xs text-slate-400 mr-2 flex items-center gap-1">
                <Filter className="w-3 h-3" />
                <span>Topic:</span>
              </span>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                    selectedTag === tag
                      ? 'bg-brand-600 text-white font-semibold shadow-md shadow-brand-600/20'
                      : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Year:</span>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="bg-slate-900 border border-slate-800 rounded-lg px-2.5 py-1 text-xs text-slate-300 focus:outline-none focus:border-brand-500"
              >
                {allYears.map((yr) => (
                  <option key={yr} value={yr}>
                    {yr === 'All' ? 'All Years' : yr}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Paper List */}
          {filteredPapers.length > 0 ? (
            <div className="space-y-4">
              {filteredPapers.map((paper) => (
                <PaperCard
                  key={paper.id}
                  paper={paper}
                  onOpenBibtex={(p) => setSelectedBibtexPaper(p)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm">No publications matching your search criteria.</p>
              <button
                onClick={() => { setPubSearch(''); setSelectedTag('All'); setSelectedYear('All'); }}
                className="mt-3 text-xs text-brand-400 hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. SOFTWARE & TOOLS SHOWCASE */}
      <section id="tools" className="py-20 sm:py-28 relative border-t border-slate-900 bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-purple-400 bg-purple-950/50 border border-purple-800/40 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Open Source Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Software Tools & Artifacts
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              We are committed to open science and reproducible research. Our tools are maintained on GitHub and used across academia and industry.
            </p>
          </div>

          {/* Software Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "FastDyn",
                description: "High-throughput QEMU dynamic binary analysis engine with execution slicing.",
                repo: "https://github.com/PSecLab/FastDyn",
                install: "git clone https://github.com/PSecLab/FastDyn.git",
                tag: "QEMU / DBI"
              },
              {
                name: "ddsfuzz",
                description: "Differential protocol fuzzer for robot middleware DDS with semantic state tracking.",
                repo: "https://github.com/PSecLab/ddsfuzz",
                install: "git clone https://github.com/PSecLab/ddsfuzz.git",
                tag: "ROS2 / CPS"
              },
              {
                name: "slicer",
                description: "LLVM bitcode slicing framework to accelerate directed memory-bug fuzzing.",
                repo: "https://github.com/PSecLab/slicer",
                install: "git clone https://github.com/PSecLab/slicer.git",
                tag: "LLVM / Compilers"
              },
              {
                name: "xbin",
                description: "Unified heterogeneous backend orchestration across Ghidra, angr, and Binary Ninja.",
                repo: "https://github.com/PSecLab/xbin",
                install: "git clone https://github.com/PSecLab/xbin.git",
                tag: "Binary Triage"
              },
              {
                name: "Pieces",
                description: "Automated firmware disassembly, decomposition, and memory isolation framework.",
                repo: "https://github.com/PSecLab/Pieces",
                install: "git clone https://github.com/PSecLab/Pieces.git",
                tag: "Embedded / IoT"
              }
            ].map((tool) => (
              <div
                key={tool.name}
                className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-brand-500/40 transition flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-300">
                      {tool.tag}
                    </span>
                    <a
                      href={tool.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-4 group-hover:text-cyan-300 transition">
                    {tool.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {tool.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80">
                  <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800/80 text-[11px] font-mono text-slate-300 flex items-center justify-between">
                    <span className="truncate">{tool.install}</span>
                  </div>
                  <a
                    href={tool.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-400 hover:text-cyan-300 mt-3 transition"
                  >
                    <span>View Repository & Docs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. TEAM */}
      <section id="team" className="py-20 sm:py-28 relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 mb-3">
                <Users className="w-3.5 h-3.5" />
                <span>People & Researchers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Meet the PSecLab Team
              </h2>
              <p className="text-slate-400 text-sm mt-2">
                Faculty, Ph.D. researchers, undergraduate scholars, and alumni shaping systems security.
              </p>
            </div>

            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              {[
                { label: 'All', value: 'all' },
                { label: 'PI / Faculty', value: 'pi' },
                { label: 'Ph.D. Students', value: 'phd' },
                { label: 'MS / Undergrads', value: 'ms_bs' },
                { label: 'Alumni', value: 'alumni' }
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setTeamCategory(tab.value)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition ${
                    teamCategory === tab.value
                      ? 'bg-brand-600 text-white font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Members Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. NEWS & UPDATES */}
      <section id="news" className="py-20 sm:py-28 relative border-t border-slate-900 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-800/40 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Latest Updates</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Lab News & Milestones
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              Recent publications, conference talks, awards, and new grant announcements.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <NewsSection />
          </div>
        </div>
      </section>

      {/* 7. JOIN US */}
      <section id="join" className="py-20 sm:py-28 relative border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <JoinUsSection />
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

      {/* BibTeX Modal */}
      <BibtexModal
        isOpen={!!selectedBibtexPaper}
        onClose={() => setSelectedBibtexPaper(null)}
        paper={selectedBibtexPaper}
      />
    </div>
  );
}
