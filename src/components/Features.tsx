import { Cast, Cpu, PlayCircle, Bot, Search, Globe, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Cast,
      title: 'Multi-Protocol Casting',
      badge: 'DLNA / Cast / AirPlay',
      description: 'Stream directly to DLNA/UPnP devices, Google Chromecast & Google TV, and compatible AirPlay video receivers with instant device discovery.'
    },
    {
      icon: Cpu,
      title: 'Ultra-Lightweight Rust Core',
      badge: '<15MB RAM',
      description: 'Built with Rust, Tokio, Axum, and Redb ACID database. Uses minimal CPU and under 15MB of RAM even with tens of thousands of media files.'
    },
    {
      icon: PlayCircle,
      title: 'Live HLS Remuxing & Demuxing',
      badge: 'HTTP Range & HLS',
      description: 'On-the-fly HLS manifest generation and remuxing for MKV, MP4, AVI, FLAC, M3U playlists, multi-track audio streams, and subtitles.'
    },
    {
      icon: Bot,
      title: 'AI Agent & MCP Protocol',
      badge: 'Model Context Protocol',
      description: 'Built-in Model Context Protocol (MCP) server allowing AI chatbots, voice assistants, and autonomous agents to search libraries and cast media.'
    },
    {
      icon: Search,
      title: 'Instant Search & Watcher',
      badge: 'Sub-Millisecond DB',
      description: 'Real-time file system monitoring detects new or modified media automatically. Search across indexed titles, paths, and metadata instantly.'
    },
    {
      icon: Globe,
      title: 'Web & Desktop Dashboard',
      badge: 'Zero Configuration',
      description: 'Responsive web explorer accessible on port 8080 and native desktop experience with VuIO Tower. Complete privacy with zero external telemetry.'
    }
  ];

  return (
    <section id="features" className="py-24 bg-slate-50 border-t border-slate-200/80 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="h-3.5 w-3.5 text-blue-700" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Engineered for Speed &amp; Freedom
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need for home media streaming, server hosting, and AI assistant integration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-200/70 hover:border-blue-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-50 text-blue-700 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                      {feature.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;