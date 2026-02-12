"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ArrowIcon, FrontendIcon, FullStackIcon, BackendIcon, RocketIcon, LiveIcon } from 'app/components/icons'

// Proje arayüzü tanımlama
interface Project {
  id: number;
  name: string;
  description: string;
  type: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  isFeatured: boolean;
}

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sampleProjects: Project[] = [
      {
        id: 1,
        name: "E-Commerce API (Dockerized)",
        description: "3-service Docker orchestration with Node.js, MongoDB, and Redis. Role-based access control, 50+ documented endpoints.",
        type: "backend",
        technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "JWT"],
        githubUrl: "https://github.com/21Ravan12/E-Commerce-Backend-System",
        liveUrl: "",
        isFeatured: true
      },
      {
        id: 2,
        name: "RealTalk — Production Messaging Platform",
        description: "15,000+ lines • 5 cloud services • Real-time messaging • Prometheus/Grafana monitoring • Live demo",
        type: "full-stack",
        technologies: ["Node.js", "Express", "Socket.io", "React", "MongoDB", "Redis", "Docker", "Railway", "Vercel"],
        githubUrl: "https://github.com/21Ravan12/Real-Time-Chat-Application",
        liveUrl: "https://real-time-chat-application-tau-seven.vercel.app",
        isFeatured: true
      },
      {
        id: 3,
        name: "Portfolio Website",
        description: "Modern, responsive portfolio with dark mode, MDX blog, and optimized performance. Deployed on Vercel.",
        type: "frontend",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
        githubUrl: "https://github.com/21Ravan12/Portfolio",
        liveUrl: "https://portfolio-gamma-neon-92.vercel.app",
        isFeatured: true
      },
      {
        id: 4,
        name: "Freelance Marketplace",
        description: "Full-stack platform connecting freelancers with clients. Real-time messaging, project bidding, role-based dashboards.",
        type: "full-stack",
        technologies: ["Next.js", "Node.js", "Express", "Socket.io", "MongoDB", "TypeScript"],
        githubUrl: "https://github.com/21Ravan12/Freelance-Marketplace",
        liveUrl: "",
        isFeatured: true
      },
      {
        id: 5,
        name: "MedChain Admin Dashboard",
        description: "Healthcare platform admin dashboard with Vue.js. Data visualization, responsive design, REST API integration.",
        type: "frontend",
        technologies: ["Vue.js", "Vuex", "JavaScript", "CSS3", "Flask"],
        githubUrl: "https://github.com/21Ravan12/Healthcare-Admin-Dashboard",
        liveUrl: "",
        isFeatured: true
      },
    ];
    
    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    let result = projects;
    
    if (activeFilter !== 'all') {
      result = result.filter(project => 
        project.type === activeFilter || 
        project.technologies.some(tech => tech.toLowerCase() === activeFilter.toLowerCase())
      );
    }
    
    if (searchTerm) {
      result = result.filter(project => 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProjects(result);
  }, [activeFilter, searchTerm, projects]);

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section - Sade, etkileyici */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
          <RocketIcon className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
          Projects
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Things I've built, deployed, and learned from. 
          <span className="block mt-2 text-lg">Each project is an opportunity to ship something meaningful.</span>
        </p>
      </div>

      {/* Search - Zarif, sade */}
      <div className="mb-10 flex justify-center px-4">
        <div className="relative w-full max-w-xl">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg 
              className="h-5 w-5 text-neutral-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="1.5" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search projects by name or tech..."
            className="w-full pl-12 pr-5 py-3 rounded-full text-neutral-700 dark:text-neutral-200 
                     border border-neutral-200 dark:border-neutral-700 
                     bg-white/80 dark:bg-neutral-800/80 
                     focus:outline-none focus:ring-2 focus:ring-blue-500/30 
                     transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <button title='Clear search'
              onClick={() => setSearchTerm('')}
              className="absolute inset-y-0 right-0 flex items-center pr-4 
                       text-neutral-400 hover:text-red-500 
                       transition-colors"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
      
      {/* Filters - Minimal, sadece 4 kategori */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {[
          { key: 'all', label: 'All' },
          { key: 'full-stack', label: 'Full Stack' },
          { key: 'frontend', label: 'Frontend' },
          { key: 'backend', label: 'Backend' }
        ].map((filter) => (
          <button
            key={filter.key}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter.key
                ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
            onClick={() => handleFilterClick(filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid - Yatay kartlar */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-10 w-10 border-2 border-neutral-400 border-t-transparent"></div>
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="space-y-4 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white/50 dark:bg-neutral-800/30 rounded-2xl">
          <div className="text-5xl mb-4 text-neutral-400">🔍</div>
          <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
            No projects found
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Try adjusting your search or filter
          </p>
          <button
            onClick={() => { setSearchTerm(''); setActiveFilter('all'); }}
            className="mt-6 px-6 py-2 text-sm bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-200 rounded-full hover:bg-neutral-300 dark:hover:bg-neutral-600 transition-colors"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* CTA - Sade, net */}
      <div className="mt-16 text-center pt-12 border-t border-neutral-200 dark:border-neutral-800">
        <h2 className="text-2xl font-bold text-neutral-800 dark:text-neutral-100 mb-3">
          Interested in working together?
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
          Open to junior developer roles and interesting conversations.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
        >
          Get in Touch
          <ArrowIcon className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </section>
  )
}

// Project Card - Yatay, sade, okunabilir
function ProjectCard({ project }: { project: Project }) {
  const isRealTalk = project.name.includes('RealTalk');
  
  return (
    <div className="group relative bg-white dark:bg-neutral-800/50 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-neutral-300 dark:hover:border-neutral-600 transition-all p-6">
      <div className="flex flex-col md:flex-row md:items-start gap-5">
        
        {/* Icon - SVG */}
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
          {getProjectIcon(project.type)}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
            <h3 className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
              {project.name}
            </h3>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-0.5 bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 rounded-full">
                {project.type === 'full-stack' ? 'full stack' : project.type}
              </span>
              {project.liveUrl && isRealTalk && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                  <LiveIcon />
                  live
                </span>
              )}
            </div>
          </div>
          
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
            {project.description}
          </p>
          
          {/* Tech stack - Nokta ayraç */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-4 text-xs text-neutral-500 dark:text-neutral-500">
            {project.technologies.slice(0, 6).map((tech, i, arr) => (
              <span key={i}>
                {tech}
                {i < arr.length - 1 && <span className="mx-1">·</span>}
              </span>
            ))}
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-5">
            <Link
              href={project.githubUrl}
              target="_blank"
              className="inline-flex items-center text-xs font-medium text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200 transition-colors"
            >
              GitHub
              <ArrowIcon className="w-3 h-3 ml-1" />
            </Link>
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {isRealTalk ? 'Live Demo →' : 'Preview →'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function
const getProjectIcon = (type: string) => {
  switch(type) {
    case 'backend':
      return <BackendIcon />;
    case 'frontend':
      return <FrontendIcon />;
    case 'full-stack':
      return <FullStackIcon />;
    default:
      return <FullStackIcon />;
  }
};
