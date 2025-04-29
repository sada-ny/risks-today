import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risks Today - Sada</title>
        <meta name="description" content="Analysis of risks in the financial and geo-political world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-4">
        {/* Intro Section */}
        <div className="text-center space-y-6">
          <div className="flex flex-col items-center space-y-4">
            <img src="/logo.png" alt="Risks Today Logo" className="w-20 h-20" />
            <h1 className="text-7xl font-bold text-gray-900">Risks Today</h1>
          </div>
        
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            Engineer by training, trader by profession, writer by passion.
          </p>
        
          <p className="text-gray-600 max-w-2xl mx-auto font-light">
            I like to analyze and write about risks in the financial and geo-political world.
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6 mt-8 text-lg">
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#blog" className="hover:text-blue-600 transition-colors">Blog</a>
          <a href="mailto:sada@risks.today" className="hover:text-blue-600 transition-colors">Contact</a>
        </nav>

        {/* Projects Section */}
        <section id="projects" className="mt-20 w-full max-w-6xl">
          <h2 className="text-6xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="#" className="aspect-square flex flex-col justify-center items-center border border-gray-200 rounded-lg hover:border-blue-600 transition-all transform hover:-translate-y-2 hover:shadow-lg p-4">
              <h3 className="text-xl font-semibold text-center">Project 1</h3>
              <p className="text-gray-500 text-center text-sm mt-2">Brief description of project 1.</p>
            </a>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mt-20 w-full max-w-6xl">
          <h2 className="text-6xl font-semibold mb-8">Blog</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="#" className="aspect-square flex flex-col justify-center items-center border border-gray-200 rounded-lg hover:border-blue-600 transition-all transform hover:-translate-y-2 hover:shadow-lg p-4">
              <h3 className="text-xl font-semibold text-center">Blog Post 1</h3>
              <p className="text-gray-500 text-center text-sm mt-2">Short teaser for blog post 1.</p>
            </a>
          </div>
        </section>

        {/* Twitter Link */}
        <div className="mt-20 text-sm text-gray-500">
          <a
            href="https://twitter.com/YOUR_HANDLE"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            Follow me on Twitter
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-8 text-xs text-gray-400 text-center">
          © {new Date().getFullYear()} Sada. All rights reserved.
        </footer>
      </main>
    </>
  );
}
