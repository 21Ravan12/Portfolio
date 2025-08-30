import Link from 'next/link'

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
          <span className="text-4xl">📬</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Have a project in mind or want to discuss potential collaboration? I'm always open to new opportunities and interesting conversations.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
              <span className="text-lg">📱</span>
            </div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Email</h3>
                <a href="mailto:asgarovravan@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">
                  asgarovravan@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ravan-asgarov-45ba96380/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  linkedin.com/in/ravan-asgarov-45ba96380
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">GitHub</h3>
                <a href="https://github.com/21Ravan12" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  github.com/21Ravan12
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">X</h3>
                <a href="https://x.com/Rvnsgrov" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                  x.com/Rvnsgrov
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
              <span className="text-lg">✉️</span>
            </div>
            <h2 className="text-2xl font-bold">Send a Message</h2>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                placeholder="How can I help you?"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md flex items-center justify-center"
            >
              Send Message
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* Response Time */}
      <div className="p-8 bg-gradient-to-br from-neutral-50 to-green-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow mb-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
            <span className="text-lg">⏱️</span>
          </div>
          <h2 className="text-2xl font-bold">Response Time</h2>
        </div>
        
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          I typically respond to emails within 24 hours. For more urgent matters, feel free to connect with me on LinkedIn.
        </p>
      </div>

      {/* CTA Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Let's Work Together</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
          I'm currently available for freelance projects and full-time opportunities. Let's discuss how we can bring your ideas to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md"
          >
            View My Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </Link>
          
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md"
          >
            Download Resume
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}