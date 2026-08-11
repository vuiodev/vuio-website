import { Monitor, Cpu, Sliders, HardDrive, CheckCircle2, Download } from 'lucide-react';

const TowerSection = () => {
  const highlights = [
    {
      icon: Cpu,
      title: 'In-Process Embedded Core',
      description: 'VuIO Core runs directly inside the Tauri desktop process. No sidecar daemons, external binary copies, or separate background services required.'
    },
    {
      icon: Sliders,
      title: 'Preservative TOML Settings Manager',
      description: 'Visually edit ports, media paths, and logging options. The settings editor patches existing TOML documents, preserving comments and custom options.'
    },
    {
      icon: HardDrive,
      title: 'System Tray & Silent Background Host',
      description: 'Minimize to the system tray for seamless media availability while working. Quick controls to toggle the server and open the web Explorer dashboard.'
    }
  ];

  return (
    <section id="tower" className="py-24 bg-slate-950 text-white w-full border-t border-slate-900">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-6">
              <Monitor className="h-3.5 w-3.5" />
              <span>Desktop Companion App</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              VuIO Tower
              <span className="block text-indigo-400 text-2xl sm:text-3xl font-semibold mt-2">
                Desktop Control Host for VuIO Core
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
              For desktop users who prefer a sleek native GUI over command line arguments, <strong>VuIO Tower</strong> wraps the complete Rust media server in a modern desktop application built with Tauri and React.
            </p>

            <div className="space-y-6 mb-10">
              {highlights.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#download-tower"
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all shadow-lg shadow-indigo-600/30 flex items-center gap-2"
              >
                <Download className="h-4 w-4" />
                Download VuIO Tower
              </a>
              <a
                href="https://github.com/vuiodev/vuio-tower"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 px-6 py-3 rounded-xl font-semibold text-sm transition-all"
              >
                GitHub Repository
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mockup / Interface Card */}
          <div className="lg:col-span-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Window Titlebar Mockup */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-2 text-xs font-semibold text-slate-400 font-mono">VuIO Tower Desktop Host</span>
                </div>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-medium">Running</span>
              </div>

              {/* Status Display Card */}
              <div className="bg-slate-950 rounded-xl p-5 border border-slate-800/80 mb-6">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Embedded Server Engine</h4>
                    <p className="text-xs text-slate-400">Listening on http://localhost:8080</p>
                  </div>
                  <span className="text-xs font-mono bg-blue-500/10 border border-blue-500/20 text-blue-400 px-2.5 py-1 rounded-md">
                    RAM: 14.2 MB
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs font-mono pt-3 border-t border-slate-800">
                  <div>
                    <span className="text-slate-500 block">Monitored Folders</span>
                    <span className="text-slate-300 font-semibold">3 Active Paths</span>
                  </div>
                  <div>
                    <span className="text-slate-500 block">Indexed Items</span>
                    <span className="text-slate-300 font-semibold">1,482 Files</span>
                  </div>
                </div>
              </div>

              {/* Feature checklist */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                  <span>Native macOS App bundle, Windows Executable &amp; Linux AppImage</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                  <span>Built-in DLNA, Chromecast &amp; AirPlay casting controller</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-indigo-400 flex-shrink-0" />
                  <span>Integrated REST API and MCP protocol endpoint runner</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TowerSection;
