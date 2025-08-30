export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] px-4 text-center">
      <div className="mb-8">
        <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
          404
        </div>
        <div className="w-24 h-1 mx-auto my-6 bg-gradient-to-r from-purple-400 to-blue-600 rounded-full"></div>
      </div>
      
      <h1 className="mb-6 text-3xl font-semibold tracking-tight text-neutral-800 dark:text-neutral-100">
        Page Not Found
      </h1>
      
      <p className="max-w-md mb-8 text-lg text-neutral-600 dark:text-neutral-400">
        The page you are looking for doesn't exist or has been moved.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a
          href="/"
          className="px-6 py-3 font-medium text-white bg-neutral-900 rounded-lg dark:bg-neutral-100 dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors"
        >
          Return Home
        </a>
        
        <a
          href="/contact"
          className="px-6 py-3 font-medium text-neutral-900 dark:text-neutral-100 border border-neutral-300 dark:border-neutral-700 rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
        >
          Contact Support
        </a>
      </div>
    </section>
  )
}