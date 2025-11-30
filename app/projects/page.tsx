"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'

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

  // GitHub projelerini çekmek için
  useEffect(() => {
    // Örnek veri
    const sampleProjects: Project[] = [
{
  id: 1,
  name: "E-commerce API (Role-based)",
  description: "A full-featured e-commerce API with role-based authentication. Includes user management, product catalog, and order management system.",
  type: "backend",
  technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  githubUrl: "https://github.com/21Ravan12/E-Commerce-Backend-System",
  liveUrl: "#",
  isFeatured: true
},
{
  id: 2,
  name: "RealTalk - Enterprise-Grade Messaging Platform",
  description: "A production-ready enterprise messaging solution evolved from Chat App (v2), featuring advanced security, real-time communication, and scalable architecture.",
  type: "full-stack",
  technologies: ["Node.js", "Express.js","Socket.io","MongoDB","Redis","PostgreSQL","HTML","CSS","JavaScript","Docker"],
  githubUrl: "https://github.com/21Ravan12/Real-Time-Chat-Application",
  liveUrl: "#",
  isFeatured: true
},
{
  id: 3,
  name: "Portfolio Website",
  description: "Modern, responsive portfolio website built with Next.js, featuring dark mode and optimized performance.",
  type: "frontend",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  githubUrl: "https://github.com/21Ravan12/Portfolio",
  liveUrl: "#",
  isFeatured: true
},
{
  id: 4,
  name: "Freelance Platform",
  description: "A platform connecting freelancers with clients, featuring project listings, proposals, and secure payments.",
  type: "full-stack",
  technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
  githubUrl: "https://github.com/21Ravan12/Freelance-Marketplace",
  liveUrl: "#",
  isFeatured: true
},
{
  id: 5,
  name: "MedChain Admin Dashboard",
  description: "Administrative dashboard for healthcare management system with data visualization and user management.",
  type: "frontend",
  technologies: ["Vue.js", "JavaScript", "CSS"],
  githubUrl: "https://github.com/21Ravan12/Healthcare-Admin-Dashboard",
  liveUrl: "#",
  isFeatured: true
},
    ];
    
    setProjects(sampleProjects);
    setFilteredProjects(sampleProjects);
    setIsLoading(false);
  }, []);

  // Filtreleme işlevi
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
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
          <span className="text-4xl">🚀</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
          My Projects
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Here's a collection of projects I've built, ranging from full-stack applications to microservices architectures and modern web solutions.
        </p>
      </div>

      <div className="mb-10 flex justify-center px-4">
  <div className="relative w-full max-w-xl">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <svg 
        className="h-5 w-5 text-blue-500/80" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        ></path>
      </svg>
    </div>
    <input
      type="text"
      placeholder="Discover my projects..."
      className="w-full pl-12 pr-5 py-4 rounded-2xl text-neutral-700 dark:text-neutral-200 
                border border-blue-200/50 dark:border-blue-700/30 
                bg-white/80 dark:bg-neutral-800/80 
                backdrop-blur-sm
                focus:outline-none focus:ring-4 focus:ring-blue-400/30 
                shadow-lg shadow-blue-500/10 dark:shadow-blue-900/10
                transition-all duration-300
                hover:shadow-xl hover:shadow-blue-500/15 dark:hover:shadow-blue-900/15
                placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    {searchTerm && (
      <button
        onClick={() => setSearchTerm('')}
        title="Clear search"
        aria-label="Clear search"
        className="absolute inset-y-0 right-0 flex items-center pr-4 
                   text-neutral-400 hover:text-red-500 
                   transition-colors duration-200"
      >
        <span className="sr-only">Clear search</span>
        <svg 
          className="h-5 w-5" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    )}
  </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {['all', 'full-stack', 'frontend', 'backend', 'microservices'].map((filter) => (
          <button
            key={filter}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === filter
                ? 'bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900'
                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
            }`}
            onClick={() => handleFilterClick(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : filteredProjects.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-4xl mb-4">🔍</div>
          <h3 className="text-xl font-medium text-neutral-800 dark:text-neutral-200 mb-2">
            No projects found
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* CTA Section */}
      <div className="text-center py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
          Interested in working together?
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
          Let's discuss your next project and how I can help bring your ideas to life.
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
        >
          Get in Touch
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </section>
  )
}

// Add this helper function
const getProjectIcon = (type: string, technologies: string[]) => {
  if (type === 'backend') {
    return '⚙️';
  }
  if (type === 'frontend') {
    return '🎨';
  }
  if (type === 'full-stack') {
    return '🌐';
  }
  return '💻';
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-neutral-200 dark:border-neutral-700 h-full flex flex-col">
      <div className="h-48 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 flex items-center justify-center">
        <div className="text-6xl">
          {getProjectIcon(project.type, project.technologies)}
        </div>
      </div>
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-3 flex-wrap gap-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
            {project.type}
          </span>
          {project.technologies.slice(0, 2).map((tech, index) => (
            <span 
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 2 && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
              +{project.technologies.length - 2}
            </span>
          )}
        </div>
        <h3 className="font-bold text-xl mb-2">{project.name}</h3>
        <p className="text-neutral-600 dark:text-neutral-300 mb-4">
          {project.description}
        </p>
        <div className="mt-auto pt-4">
          <div className="flex justify-between items-center">
            <a href={project.githubUrl} className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium">
              View Details →
            </a>
            <div className="flex space-x-2">
              <a href={project.githubUrl} title={`View ${project.name} on GitHub`} aria-label={`View ${project.name} on GitHub`} className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              {project.liveUrl && (
                <a href={project.liveUrl} title={`Open ${project.name} live project`} aria-label={`Open ${project.name} live project`} className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
