import React from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

const Installation = () => {
  const [copiedCommand, setCopiedCommand] = React.useState('');

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  const installMethods = [
    {
      title: 'Homebrew (macOS & Linux)',
      badge: 'Official Tap',
      command: 'brew tap vuiodev/vuio && brew install vuio',
      description: 'Official Homebrew package manager formula for macOS and Linux.'
    },
    {
      title: 'Cargo (crates.io)',
      badge: 'Rust Toolchain',
      command: 'cargo install vuio-cli',
      description: 'Install directly from crates.io with the standard Rust toolchain.'
    },
    {
      title: 'Kubernetes Helm Chart',
      badge: 'OCI Registry',
      command: 'helm install vuio oci://ghcr.io/vuiodev/charts/vuio',
      description: 'Deploy vuio-cli server to Kubernetes cluster from official GHCR OCI registry.'
    },
    {
      title: 'Docker Compose',
      badge: 'Container',
      command: 'git clone https://github.com/vuiodev/vuio.git && cd vuio && docker-compose up -d',
      description: 'Clone repository and launch standalone container server with compose.'
    },
    {
      title: 'VuIO Tower (Desktop Dev)',
      badge: 'Tauri Host',
      command: 'cd vuio-tower && npm install && npm run tauri dev',
      description: 'Run native Tauri desktop application host in development mode.'
    }
  ];

  return (
    <section id="installation" className="py-24 bg-slate-900 text-white w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Terminal className="h-3.5 w-3.5" />
            <span>Developer &amp; Deployment Tools</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Quick Installation &amp; Setup
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Choose your preferred toolchain, container runtime, or desktop builder.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {installMethods.map((method, index) => (
            <div
              key={index}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <Terminal className="h-5 w-5" />
                    <span className="font-bold text-sm text-white">{method.title}</span>
                  </div>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                    {method.badge}
                  </span>
                </div>

                <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-4 mb-4 group">
                  <code className="text-emerald-400 text-xs font-mono break-all leading-relaxed block pr-8">
                    {method.command}
                  </code>
                  <button
                    onClick={() => copyToClipboard(method.command, method.title)}
                    className="absolute top-3 right-3 p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="Copy command"
                  >
                    {copiedCommand === method.title ? (
                      <Check className="h-4 w-4 text-emerald-400" />
                    ) : (
                      <Copy className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 3 Step Onboarding Card */}
        <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-8 backdrop-blur-md">
          <h3 className="text-xl font-bold text-white mb-6 text-center sm:text-left">
            Getting Started with VuIO Media Server
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                1
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Install Binary / Tower</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Install via Homebrew, Cargo, Docker, or launch VuIO Tower desktop app.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                2
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Point to Media Directory</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Run <code className="text-blue-300 font-mono">vuio /path/to/media</code> or add directories in the VuIO Tower UI.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                3
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">Cast &amp; Stream Anywhere</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Open http://localhost:8080 or discover VuIO on DLNA smart TVs, Chromecast, AirPlay, or AI assistant.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;