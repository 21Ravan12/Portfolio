import Link from 'next/link'
import { ArrowIcon, DeveloperIcon, JourneyIcon, ApproachIcon, ToolkitIcon, BeyondIcon, LiveIcon, RocketIcon} from 'app/components/icons'

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section - Aynı pattern, emoji SVG ile değiştirildi */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
          <DeveloperIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
          About Me
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          I'm Ravan, a full-stack developer who builds <span className="font-semibold text-blue-600 dark:text-blue-400">production applications</span> — from design to deployment.
        </p>
      </div>

      {/* Journey & Approach - Grid aynı, ikonlar SVG */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* My Journey */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
              <JourneyIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">My Journey</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              I started coding at 16 and have been building full-stack projects ever since. What drives me is taking ideas from concept to <span className="font-medium text-blue-600 dark:text-blue-400">live production applications</span> that people can actually use.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              My approach is simple: write clean code, ship often, and learn from every deployment.
            </p>
          </div>
        </div>

        {/* My Approach */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
              <ApproachIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold">My Approach</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              I don't just write code that works on my machine. I build systems that are <span className="font-medium text-purple-600 dark:text-purple-400">deployed, monitored, and used by real people</span>.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Every project is an opportunity to learn something new and ship something meaningful.
            </p>
          </div>
        </div>
      </div>

      {/* Technical Toolkit - GÜNCELLENDİ, cloud & monitoring eklendi */}
      <div className="p-8 bg-gradient-to-br from-neutral-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow mb-12">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
            <ToolkitIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
          </div>
          <h2 className="text-2xl font-bold">Technical Toolkit</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Frontend */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Frontend</h3>
            <ul className="space-y-2">
              {['React & Next.js', 'TypeScript', 'Tailwind CSS'].map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Backend */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Backend</h3>
            <ul className="space-y-2">
              {['Node.js & Express', 'REST APIs', 'Socket.io', 'JWT'].map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Database & Cache */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Database & Cache</h3>
            <ul className="space-y-2">
              {['MongoDB / Atlas', 'PostgreSQL', 'Redis / Upstash'].map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Cloud & Deployment - YENİ */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Cloud & Deployment</h3>
            <ul className="space-y-2">
              {['Railway', 'Vercel', 'Docker', 'Cloudinary', 'SendGrid'].map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Monitoring & Testing - YENİ */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Monitoring & Testing</h3>
            <ul className="space-y-2">
              {['Prometheus', 'Grafana', 'Jest', 'Cypress'].map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Tools */}
          <div>
            <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Tools</h3>
            <ul className="space-y-2">
              {['Git', 'Postman', 'Linux'].map((item) => (
                <li key={item} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
                  <span className="text-neutral-700 dark:text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Beyond Coding - İkon SVG */}
      <div className="p-8 bg-gradient-to-br from-neutral-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow mb-12">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
            <BeyondIcon className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          </div>
          <h2 className="text-2xl font-bold">Beyond Coding</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300">
            When I'm not deploying applications, I'm usually learning — whether it's new technologies, system design patterns, or figuring out why a particular email provider isn't working (ask me about SendGrid vs Resend).
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            I believe the best way to learn is to build, break, fix, and ship.
          </p>
        </div>
      </div>

      {/* CTA - Sade, temiz */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">Let's Build Something Together</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
          Open to junior developer roles and interesting conversations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md"
          >
            Get In Touch
            <ArrowIcon className="w-4 h-4 ml-2" />
          </Link>
          
          <Link
            href="/projects"
            className="flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md"
          >
            View Projects
          </Link>
        </div>
      </div>
    </section>
  )
}