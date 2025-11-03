import Link from 'next/link'
import { ArrowIcon } from 'app/components/icons'

export default function Page() {
  return (
<section className="max-w-4xl mx-auto px-4 py-12">
  {/* Hero Section */}
  <div className="text-center mb-16">
    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
      <span className="text-4xl">👋</span>
    </div>
    <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
      Hello, I'm Ravan
    </h1>
    
    <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
      I'm a Full-Stack Developer passionate about building scalable web applications and leveraging modern web technologies. My main focuses are developing microservice architectures, applying clean code principles, and delivering end-to-end software solutions.    </p>
  </div>

  <div className="grid md:grid-cols-2 gap-8">
    {/* Expertise Section */}
    <div className="p-8 bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
          <span className="text-lg">🚀</span>
        </div>
        <h2 className="text-2xl font-bold">Expertise</h2>
      </div>
      
      <div className="grid gap-4">
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Frontend:</span> Modern, responsive and user-friendly interfaces with React, Next.js, Vue.js, TypeScript, Tailwind CSS</p>
        </div>
        
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Backend:</span> High-performance API and microservice architectures with Node.js, Express, Spring Boot (Java), Flask, and Django</p>
        </div>
        
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Database:</span> Data modeling and management with MongoDB, PostgreSQL, MySQL, and SQLite</p>
        </div>
        
        <div className="flex items-start">
          <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
            <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">DevOps:</span> Docker containerization, Git version control, and deployment on platforms like Vercel/Netlify</p>
        </div>
      </div>
    </div>

    {/* Projects Section */}
    <div>
      <div className="flex items-center mb-6">
        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
          <span className="text-lg">⭐</span>
        </div>
        <h2 className="text-2xl font-bold">Featured Projects</h2>
      </div>
      
      <div className="space-y-4 mb-8">
        <Link
          href="/projects"
          className="block p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all group"
        >
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">E-commerce API (Role-Based)</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                A full-featured e-commerce API with role-based authentication. (JavaScript)
              </p>
            </div>
          </div>
        </Link>
        
        <Link
          href="/projects"
          className="block p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-md transition-all group"
        >
          <div className="flex items-start">
            <div className="w-12 h-12 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mr-4 group-hover:scale-105 transition-transform">
<svg className="w-6 h-6 text-purple-600 dark:text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" />
  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" />
  <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" />
  <path d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" />
</svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Freelance Platform</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                A platform where users can publish projects and receive offers. (TypeScript)
              </p>
            </div>
          </div>
        </Link>

      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/projects"
          className="flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md"
        >
          See All Projects
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
        
        <Link
          href="/contact"
          className="flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md"
        >
          Contact Me
        </Link>
      </div>
    </div>
  </div>
</section>
  )
}
