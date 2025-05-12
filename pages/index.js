import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <section className="relative w-full bg-gray-200 py-20">
          {/* MENU BUTTON */}
          <div className="absolute top-6 right-6 z-50">
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex flex-col items-center justify-center w-10 h-10 border border-gray-300 rounded hover:border-blue-600 transition-all"
              >
                <div className={`w-6 h-0.5 bg-gray-700 mb-1 transform transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <div className={`w-6 h-0.5 bg-gray-700 mb-1 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
                <div className={`w-6 h-0.5 bg-gray-700 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>

              {/* DROPDOWN MENU */}
                {menuOpen && (
                <div
                  className="absolute right-0 mt-4 w-48 bg-white/80 backdrop-blur-md border border-gray-200 rounded-lg shadow-xl transition-all duration-300 ease-in-out backdrop-saturate-150"
                >
                  <a href="#projects" className="block px-4 py-2 text-gray-700 hover:bg-white/60" onClick={() => setMenuOpen(false)}>Projects</a>
                  <a href="#blog" className="block px-4 py-2 text-gray-700 hover:bg-white/60" onClick={() => setMenuOpen(false)}>Blog</a>
                  <a href="mailto:sada@risks.today" className="block px-4 py-2 text-gray-700 hover:bg-white/60" onClick={() => setMenuOpen(false)}>Contact</a>
                </div>
                )}
            </div>
          </div>

            {/* INTRO CONTENT */}
            <div className="text-center space-y-6">
              <div className="flex flex-col items-center space-y-8">
               <div className="flex items-center justify-center relative">
            
              {/* Title */}
                <h1 className="flex text-6xl md:text-7xl ml-[-16px] space-x-2">
                  <span className="font-bold text-blue-600">Risks</span>
                  <span className="font-light text-gray-900">Today</span>
                </h1>
            </div>

            
                {/* Intro lines */}
                <p className="text-gray-600 max-w-2xl mx-auto font-light">
                  Engineer by training, trader by profession, writer by passion.
                </p>
            
                <p className="text-gray-600 max-w-2xl mx-auto font-light">
                  I like to analyze and write about risks in the financial and geo-political world.
                </p>
              </div>
            </div>

        </section>

        {/* Projects Section */}
        <section id="projects" className="mt-20 w-full max-w-6xl">
          <h2 className="text-5xl font-semibold mb-8 text-gray-900">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <a href="#" className="aspect-square flex flex-col justify-center items-center border border-gray-200 rounded-lg hover:border-blue-600 transition-all transform hover:-translate-y-2 hover:shadow-lg p-4">
              <h3 className="text-xl font-semibold text-center">Project 1</h3>
              <p className="text-gray-500 text-center text-sm mt-2">Brief description of project 1.</p>
            </a>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="mt-20 w-full max-w-6xl">
          <h2 className="text-5xl font-semibold mb-8 text-gray-900">Blog</h2>
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
