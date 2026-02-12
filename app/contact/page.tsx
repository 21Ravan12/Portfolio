import Link from 'next/link'
import { 
  MailIcon, 
  LinkedInIcon, 
  GitHubIcon, 
  XIcon, 
  ArrowIcon,
  DownloadIcon,
  ProjectIcon,
  DeveloperIcon
} from 'app/components/icons'

export default function ContactPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero Section - SVG ikon, gradient text */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 mb-6">
          <MailIcon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-neutral-800 to-neutral-600 dark:from-neutral-100 dark:to-neutral-300 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h1>
        
        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          Open to junior developer roles, freelance opportunities, and interesting conversations. 
          <span className="block mt-2 text-lg">I typically respond within 24 hours.</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {/* Contact Information - SVG ikonlar */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-blue-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
              <DeveloperIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold">Contact Information</h2>
          </div>
          
          <div className="space-y-6">
            {/* Email */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <MailIcon className="w-4 h-4 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">Email</h3>
                <a 
                  href="mailto:asgarovravan@gmail.com" 
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  asgarovravan@gmail.com
                  <ArrowIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            {/* LinkedIn */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <LinkedInIcon className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">LinkedIn</h3>
                <a 
                  href="https://www.linkedin.com/in/ravan-asgarov-45ba96380/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  linkedin.com/in/ravan-asgarov
                  <ArrowIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            {/* GitHub */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <GitHubIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">GitHub</h3>
                <a 
                  href="https://github.com/21Ravan12" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  github.com/21Ravan12
                  <ArrowIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            {/* X (Twitter) */}
            <div className="flex items-start group">
              <div className="w-8 h-8 rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform">
                <XIcon className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
              </div>
              <div>
                <h3 className="font-semibold text-neutral-800 dark:text-neutral-200">X</h3>
                <a 
                  href="https://x.com/Rvnsgrov" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  x.com/Rvnsgrov
                  <ArrowIcon className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Contact Form - Daha sade, çalışan form */}
        <div className="p-8 bg-gradient-to-br from-neutral-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
              <ProjectIcon className="w-5 h-5 text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-2xl font-bold">Send a Message</h2>
          </div>
          
          <form 
            action="https://formsubmit.co/asgarovravan@gmail.com" 
            method="POST"
            className="space-y-6"
          >
            {/* Honeypot */}
            <input title = "Honeypot field" type="text" name="_honey" className="hidden" />
            {/* Disable captcha */}
            <input type="hidden" name="_captcha" value="false" />
            {/* Redirect */}
            <input type="hidden" name="_next" value="https://portfolio-gamma-neon-92.vercel.app/contact?success=true" />
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
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
                required
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                placeholder="What's this about?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white transition-colors"
                placeholder="I'd like to talk about..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md flex items-center justify-center group"
            >
              Send Message
              <ArrowIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-xs text-center text-neutral-500 dark:text-neutral-500">
              No spam. Just a friendly message that lands directly in my inbox.
            </p>
          </form>
        </div>
      </div>

      {/* Response Time - Sade, ikon SVG */}
      <div className="p-8 bg-gradient-to-br from-neutral-50 to-green-50 dark:from-neutral-800 dark:to-neutral-900 rounded-2xl shadow-sm hover:shadow-md transition-shadow mb-12 text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
            <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" strokeWidth="1.5"/>
              <path d="M12 6v6l4 2" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <h2 className="text-2xl font-bold">Response Time</h2>
        </div>
        
        <p className="text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto">
          I reply to emails within <span className="font-semibold text-green-600 dark:text-green-400">24 hours</span>. 
          For urgent matters, reach out on LinkedIn — I'm usually active there.
        </p>
      </div>

      {/* CTA Section - SVG ikonlar */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-3">Let's Build Something Together</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
          I'm currently available for junior developer roles and freelance opportunities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 rounded-lg font-medium hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow hover:shadow-md group"
          >
            <ProjectIcon className="w-4 h-4 mr-2" />
            View My Projects
            <ArrowIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <a
            href="/Ravan_Asgarov_Resume.pdf"
            download
            className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all shadow-sm hover:shadow-md group"
          >
            <DownloadIcon className="w-4 h-4 mr-2" />
            Download Resume
          </a>
        </div>
        
        {/* Success message (hidden by default, show via URL param) */}
        {typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') === 'true' && (
          <div className="mt-8 p-4 bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
            <p className="text-green-700 dark:text-green-400">
              ✅ Message sent! I'll get back to you within 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}