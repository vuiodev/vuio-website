import { Download, Cpu, Cast, Bot, ShieldCheck, Sparkles, Box } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white py-24 w-full">
      {/* Decorative gradient blur elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 backdrop-blur-md mb-8 text-blue-300 text-sm font-medium">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span>The Modern Open Source Media Streaming Ecosystem</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight">
            Seamless Streaming for{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-400 bg-clip-text text-transparent">
              Every Device &amp; AI Agent
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            VuIO is a high-performance, cross-platform media streaming ecosystem powered by an ultra-lightweight Rust core and modern Tauri desktop apps. Built-in web catalog, search, and web player included (all browsers supported). Stream to UPnP/DLNA, Chromecast, AirPlay, or get info and control everything via AI assistants.
            <br />
            <span className="text-emerald-400 font-semibold">All of it in less than 15 MB RAM</span>
          </p>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
            <a
              href="#download"
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-500 hover:to-indigo-500 transition-all flex items-center justify-center gap-3 shadow-lg shadow-blue-500/25 hover:shadow-indigo-500/40 transform hover:-translate-y-0.5"
            >
              <Download className="h-5 w-5" />
              Download Core &amp; Tower
            </a>
            <a
              href="https://crates.io/crates/vuio-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-slate-700 bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-md"
            >
              <Box className="h-5 w-5 text-amber-400" />
              cargo install vuio-cli
            </a>
          </div>

          {/* Feature Pill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-slate-300 pt-6 border-t border-slate-800/80">
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800">
              <Cpu className="h-4 w-4 text-emerald-400" />
              <span>Rust Engine (&lt;15MB RAM)</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800">
              <Cast className="h-4 w-4 text-sky-400" />
              <span>DLNA / Cast / AirPlay</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800">
              <Bot className="h-4 w-4 text-purple-400" />
              <span>AI Agent &amp; MCP Protocol</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg bg-slate-900/40 border border-slate-800">
              <ShieldCheck className="h-4 w-4 text-blue-400" />
              <span>MIT / Apache 2.0 Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;