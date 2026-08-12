import { Server, Monitor, Bot, Terminal, Shield, ArrowRight, Layers, Sparkles } from 'lucide-react';

const Ecosystem = () => {
  const pillars = [
    {
      id: 'core',
      name: 'VuIO Core',
      tagline: 'Headless Rust Media Server',
      icon: Server,
      accent: 'border-emerald-500/30 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400',
      badge: 'Rust Engine',
      description: 'The high-performance core engine written in Rust. Features ultra-low memory footprint (<15MB RAM), Tokio async I/O, Axum web framework, SQLite database, and live HLS remuxing.',
      bullets: [
        'DLNA/UPnP, Chromecast & AirPlay streaming',
        'Automatic media indexing with SQLite database',
        'Sub-millisecond instant search API'
      ],
      linkText: 'Explore Core Features',
      linkUrl: '#features'
    },
    {
      id: 'tower',
      name: 'VuIO Tower',
      tagline: 'Native Desktop Application',
      icon: Monitor,
      accent: 'border-blue-500/30 bg-blue-500/5 text-blue-600 dark:text-blue-400',
      badge: 'Tauri + React Desktop',
      description: 'The companion desktop host for VuIO. Runs the full VuIO core inside the desktop process with zero sidecars, featuring native system tray controls and interactive setting management.',
      bullets: [
        'In-process embedded runtime (no sidecar binaries)',
        'System tray icon & desktop notifications',
        'Non-destructive TOML configuration editor'
      ],
      linkText: 'Learn about VuIO Tower',
      linkUrl: '#tower'
    },
    {
      id: 'mcp',
      name: 'AI Agent & MCP',
      tagline: 'Model Context Protocol',
      icon: Bot,
      accent: 'border-purple-500/30 bg-purple-500/5 text-purple-600 dark:text-purple-400',
      badge: 'AI Assistant Ready',
      description: 'Native Model Context Protocol (MCP) server integration allowing AI voice agents, chatbots, and autonomous assistants to browse your media catalog and control remote casting playback.',
      bullets: [
        'AI agent catalog search & media discovery',
        'Voice playback control to TV and cast receivers',
        'Standard MCP protocol over HTTP / JSON-RPC'
      ],
      linkText: 'Read API & MCP Specs',
      linkUrl: 'https://github.com/vuiodev/vuio/blob/main/docs/api.md'
    },
    {
      id: 'distro',
      name: 'Packaging & Deploy',
      tagline: 'Multi-Platform Distribution',
      icon: Terminal,
      accent: 'border-amber-500/30 bg-amber-500/5 text-amber-600 dark:text-amber-400',
      badge: 'Homebrew / Helm / Cargo / Docker',
      description: 'Flexible deployment for desktop, home servers, homelabs, and Kubernetes clusters. Available via official Homebrew Tap, crates.io, Kubernetes Helm chart, and Docker.',
      bullets: [
        'Official Homebrew Tap (brew tap vuiodev/vuio)',
        'Rust cargo package (cargo install vuio-cli)',
        'Kubernetes Helm Chart & Docker Compose'
      ],
      linkText: 'View Installation Options',
      linkUrl: '#installation'
    }
  ];

  return (
    <section id="ecosystem" className="py-24 bg-slate-900 text-white w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="h-3.5 w-3.5" />
            <span>Architecture &amp; Components</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-6">
            The VuIO Ecosystem
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            VuIO is designed as a modular open source ecosystem. Whether running a headless server on a Raspberry Pi, managing desktop media with VuIO Tower, or connecting AI agents, every component is built for speed, simplicity, and privacy.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-slate-800/60 border border-slate-700/70 rounded-2xl p-8 hover:border-slate-600 hover:bg-slate-800 transition-all flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${pillar.accent}`}>
                      <IconComp className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-700/80 text-slate-300 border border-slate-600">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {pillar.name}
                  </h3>
                  <p className="text-sm font-semibold text-blue-400 mb-4">
                    {pillar.tagline}
                  </p>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {pillar.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Sparkles className="h-3.5 w-3.5 text-blue-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-700/50">
                  <a
                    href={pillar.linkUrl}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group-hover:translate-x-1 transition-transform"
                  >
                    <span>{pillar.linkText}</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* License Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-900/40 via-indigo-900/40 to-slate-800/60 border border-blue-500/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-500/10 border border-blue-400/20 rounded-xl text-blue-400">
              <Shield className="h-8 w-8" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white mb-1">
                100% Free &amp; Open Source Software
              </h4>
              <p className="text-slate-300 text-sm">
                Dual-licensed under <strong className="text-white">MIT</strong> or <strong className="text-white">Apache 2.0</strong>. Community driven, zero telemetry, full privacy.
              </p>
            </div>
          </div>
          <a
            href="https://github.com/vuiodev/vuio"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md"
          >
            View Source on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
