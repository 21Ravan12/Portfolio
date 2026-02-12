import Link from 'next/link'
import { ArrowIcon, RocketIcon, ChartIcon, CloudIcon, DeveloperIcon, CheckIcon } from 'app/components/icons'

export default function Page() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section - GÜNCELLENDİ */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
          <DeveloperIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
          Ravan Asgarov
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Full-Stack Developer who builds <span className="font-semibold text-blue-600 dark:text-blue-400">production applications</span> — 
          from design to deployment. I turn ideas into live software people can actually use.
        </p>
        
      </div>

      {/* What I Do - YENİ BÖLÜM! (Yeteneklerin özeti) */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          What I Do
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          I build complete web applications from frontend to backend, with a focus on:
        </p>
<div className="grid sm:grid-cols-2 gap-4">
  <div className="flex items-start">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
        <CheckIcon className="w-3 h-3 text-blue-600" />
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">
        <span className="font-semibold">Clean Architecture:</span> Maintainable, scalable code structure
      </p>
    </div>
  </div>

  <div className="flex items-start">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
        <CheckIcon className="w-3 h-3 text-blue-600" />
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">
        <span className="font-semibold">Production Deployment:</span> Railway, Vercel, cloud integration
      </p>
    </div>
  </div>

  <div className="flex items-start">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
        <CheckIcon className="w-3 h-3 text-blue-600" />
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">
        <span className="font-semibold">Real-Time Systems:</span> WebSockets, live updates, presence
      </p>
    </div>
  </div>

  <div className="flex items-start">
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
        <CheckIcon className="w-3 h-3 text-blue-600" />
      </div>
      <p className="text-neutral-700 dark:text-neutral-300">
        <span className="font-semibold">Testing & Quality:</span> Jest, Cypress, CI/CD for stable builds
      </p>
    </div>
  </div>
</div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Expertise Section - GÜNCELLENDİ */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold">Technical Expertise</h2>
          </div>
          
          <div className="grid gap-4">
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Frontend:</span> React, Next.js, TypeScript, Tailwind CSS — responsive, accessible interfaces</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Backend:</span> Node.js, Express, REST APIs, Socket.io — real-time capable</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Database & Cache:</span> MongoDB, PostgreSQL, Redis — schema design & optimization</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Cloud & Deployment:</span> Railway, Vercel, Docker, MongoDB Atlas, Upstash, Cloudinary, SendGrid</p>
            </div>
            
            <div className="flex items-start">
              <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                <svg className="w-3 h-3 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300"><span className="font-semibold">Monitoring & Testing:</span> Prometheus, Grafana, Winston, Jest, Cypress</p>
            </div>
          </div>
        </div>

        {/* Featured Projects Section - REALTALK BİR PROJE, TEK DEĞİL! */}
        <div>
          <div className="flex items-center mb-6">
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          
          <div className="space-y-4 mb-8">
            {/* RealTalk - En üstte ama sadece bir proje */}
            <Link
              href="https://real-time-chat-application-tau-seven.vercel.app"
              target="_blank"
              className="block p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-md transition-all group"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-lg">RealTalk</h3>
                    <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs rounded-full font-medium">
                      🟢 LIVE DEMO
                    </span>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                    15k+ LOC 
                    • 5 Cloud Services
                    • Real-time Messaging
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Production-deployed messaging platform with Socket.io, Redis, and full monitoring stack.
                  </p>
                </div>
                <ArrowIcon className="w-5 h-5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            {/* E-commerce API */}
            <Link
              href="https://github.com/21Ravan12/E-Commerce-Backend-System"
              target="_blank"
              className="block p-6 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-md transition-all group"
            >
              <div className="flex items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">E-Commerce API (Dockerized)</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    3-service Docker orchestration • Role-based access • 50+ endpoints
                  </p>
                </div>
                <ArrowIcon className="w-5 h-5 text-neutral-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/projects"
              className="flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md"
            >
              View All Projects
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
      
      <div className="mt-16 p-6 md:p-8 bg-gradient-to-br from-neutral-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700">
        <div className="flex flex-col md:flex-row md:items-start items-center gap-4 md:gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg md:text-xl font-bold mb-2">My Approach</h3>
            <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
              I don't just write code that works on my machine. I build systems that are <span className="font-semibold">deployed, monitored, and used by real people.</span> 
              Every project is an opportunity to learn something new and ship something meaningful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
