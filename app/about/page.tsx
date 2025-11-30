import Link from 'next/link'

export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
          <span className="text-4xl">👨‍💻</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
          About Me
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          I'm Ravan, a full-stack developer passionate about building modern web applications with React, Node.js, and TypeScript        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* My Journey */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
              <span className="text-lg">🚶‍♂️</span>
            </div>
            <h2 className="text-2xl font-bold">My Journey</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              I started coding at 16 and have been building full-stack projects ever since. I love turning ideas into functional applications and learning new technologies along the way.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              What excites me most is taking an idea from concept to a working application that people can actually use.
            </p>
          </div>
        </div>

        {/* My Approach */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
              <span className="text-lg">🎯</span>
            </div>
            <h2 className="text-2xl font-bold">My Approach</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-neutral-700 dark:text-neutral-300">
              I focus on writing clean, maintainable code and building applications that are both functional and user-friendly.
            </p>
            <p className="text-neutral-700 dark:text-neutral-300">
              Whether working on frontend interfaces or backend services, I prioritize performance, accessibility, and user experience.
            </p>
          </div>
        </div>
      </div>

<div className="p-8 bg-gradient-to-br from-neutral-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow mb-12">
  <div className="flex items-center mb-6">
    <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
      <span className="text-lg">🛠️</span>
    </div>
    <h2 className="text-2xl font-bold">Technical Toolkit</h2>
  </div>
  
  <div className="grid md:grid-cols-3 gap-8">
    {/* Frontend Engineering */}
    <div>
      <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Frontend Engineering</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">React & Next.js</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">TypeScript</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">Tailwind CSS</span>
        </li>
      </ul>
    </div>
    
    {/* Backend Systems */}
    <div>
      <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Backend Systems</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">Node.js & Express</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">REST APIs</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">Socket.io</span>
        </li>
      </ul>
    </div>
    
    {/* Data & Infrastructure */}
    <div>
      <h3 className="font-semibold text-lg mb-3 text-neutral-800 dark:text-neutral-200">Data & Infrastructure</h3>
      <ul className="space-y-2">
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">MongoDB</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">PostgreSQL</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">Docker</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">Redis</span>
        </li>
        <li className="flex items-center">
          <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div>
          <span className="text-neutral-700 dark:text-neutral-300">Git</span>
        </li>
      </ul>
    </div>
  </div>
</div>

      {/* Beyond Coding */}
      <div className="p-8 bg-gradient-to-br from-neutral-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow mb-12">
        <div className="flex items-center mb-6">
          <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center mr-3">
            <span className="text-lg">🌟</span>
          </div>
          <h2 className="text-2xl font-bold">Beyond Coding</h2>
        </div>
        
        <div className="space-y-4">
          <p className="text-neutral-700 dark:text-neutral-300">
            When I'm not coding, I enjoy learning about new technologies, writing, and expanding my knowledge in various fields.
          </p>
          <p className="text-neutral-700 dark:text-neutral-300">
            I see technology as a tool to create solutions that will benefit people, and I am always open to learning new things.
          </p>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Let's Build Something Amazing Together</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md"
          >
            Get In Touch
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </Link>
          
          <Link
            href="/projects"
            className="flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md"
          >
            View My Work
          </Link>
        </div>
      </div>
    </section>
  )
}
