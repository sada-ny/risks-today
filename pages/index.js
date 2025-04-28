import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Risks Today - Sada</title>
        <meta name="description" content="Analysis of risks in the financial and geo-political world." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Sada" />
        <meta name="keywords" content="Risk Analysis, Financial Risks, Geopolitical Risks, Sada, Risks Today" />
        <meta property="og:title" content="Risks Today - Sada" />
        <meta property="og:description" content="Exploring financial and geopolitical risks with clear analysis by Sada." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://risks.today" />
        <meta property="og:site_name" content="Risks Today" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">Hello, I'm Sada.</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl">
          I'm an engineer, trader and writer. I analyze and write about risks in the financial and geo-political world.
        </p>
        <div className="flex gap-8 text-lg">
            <a href="/work" className="text-gray-800 hover:text-blue-600 transition-colors">Work</a>
            <a href="/blog" className="text-gray-800 hover:text-blue-600 transition-colors">Blog</a>
            <a href="mailto:sada@risks.today" className="text-gray-800 hover:text-blue-600 transition-colors">Contact</a>
        </div>
      </main>
    </>
  );
}
