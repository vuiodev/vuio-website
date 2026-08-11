import { Download, Monitor, HardDrive, Server } from 'lucide-react';

const DownloadSection = () => {
  const coreDownloads = [
    {
      platform: 'Windows',
      icon: Monitor,
      version: 'v0.0.42',
      description: 'VuIO Core Standalone Executable',
      builds: [
        { arch: 'x86_64', size: '2.7 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.42/vuio-windows-x86_64.exe' },
        { arch: 'ARM64', size: '2.6 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.42/vuio-windows-arm64.exe' }
      ]
    },
    {
      platform: 'macOS',
      icon: Monitor,
      version: 'v0.0.42',
      description: 'macOS Intel & Apple Silicon',
      builds: [
        { arch: 'Intel', size: '2.5 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.42/vuio-macos-x86_64.tar.gz' },
        { arch: 'Apple Silicon', size: '2.5 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.42/vuio-macos-arm64.tar.gz' }
      ]
    },
    {
      platform: 'Linux',
      icon: HardDrive,
      version: 'v0.0.42',
      description: 'Ubuntu, Debian, Arch, CentOS',
      builds: [
        { arch: 'x86_64', size: '4.8 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.42/vuio-linux-x86_64.tar.gz' },
        { arch: 'ARM64', size: '5.0 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.42/vuio-linux-arm64.tar.gz' },
        { arch: 'ARMv7', size: '5.0 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.42/vuio-linux-armv7.tar.gz' }
      ]
    },
    {
      platform: 'Docker / GHCR',
      icon: HardDrive,
      version: 'latest',
      description: 'Multi-Arch Container Image',
      builds: [
        { arch: 'Container Package', size: '~38 MB', downloadUrl: 'https://github.com/vuiodev/vuio/pkgs/container/vuio' }
      ]
    }
  ];

  return (
    <section id="download" className="py-24 bg-white w-full border-t border-slate-200/80">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Download className="h-3.5 w-3.5 text-blue-700" />
            <span>Downloads &amp; Releases</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4">
            Get Started with VuIO
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Download pre-compiled binaries for VuIO Core server or get the desktop host app VuIO Tower.
          </p>
        </div>

        {/* VuIO Core Downloads */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-200">
            <div className="flex items-center gap-3">
              <Server className="h-6 w-6 text-blue-700" />
              <div>
                <h3 className="text-xl font-bold text-slate-900">VuIO Core (Server Engine)</h3>
                <p className="text-xs text-slate-500">Ultra-lightweight Rust media server (&lt;15MB RAM)</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreDownloads.map((download) => {
              const IconComponent = download.icon;
              return (
                <div
                  key={download.platform}
                  className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:shadow-lg transition-all hover:border-blue-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center justify-center w-11 h-11 bg-blue-100 rounded-xl">
                        <IconComponent className="h-5 w-5 text-blue-700" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-200 text-slate-700">
                        {download.version}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {download.platform}
                    </h4>
                    <p className="text-slate-500 text-xs mb-4">
                      {download.description}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-slate-200/80">
                    {download.builds.map((build) => (
                      <a
                        key={build.arch}
                        href={build.downloadUrl}
                        className="w-full bg-white text-slate-800 border border-slate-200 py-2 px-3 rounded-lg text-xs font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-between group shadow-sm"
                      >
                        <span className="flex items-center gap-1.5">
                          <Download className="h-3.5 w-3.5 text-blue-600 group-hover:text-white" />
                          {build.arch}
                        </span>
                        <span className="text-slate-400 group-hover:text-blue-100 font-mono">{build.size}</span>
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* VuIO Tower Downloads Section anchor */}
        <div id="download-tower" className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-3xl p-8 sm:p-10 text-white border border-indigo-800/50 shadow-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold mb-4">
                <Monitor className="h-3.5 w-3.5" />
                <span>Desktop GUI Application</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white mb-3">
                Download VuIO Tower
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                Native Tauri desktop application embedding VuIO Core in-process. Features tray icon, settings manager, and desktop notifications.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-indigo-400" /> macOS (Apple Silicon &amp; Intel)</span>
                <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-indigo-400" /> Windows 10 / 11</span>
                <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4 text-indigo-400" /> Linux (AppImage &amp; deb)</span>
              </div>
            </div>

            <div className="w-full md:w-auto flex flex-col sm:flex-row md:flex-col gap-3">
              <a
                href="https://github.com/vuiodev/vuio-tower/releases"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 text-center"
              >
                <Download className="h-4 w-4" />
                Download VuIO Tower Releases
              </a>
              <a
                href="https://github.com/vuiodev/vuio-tower"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800/80 hover:bg-slate-800 text-slate-300 px-6 py-3.5 rounded-xl font-semibold text-xs border border-slate-700 transition-colors flex items-center justify-center gap-2 text-center"
              >
                View VuIO Tower GitHub Repository
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 text-sm mb-2">
            Looking for source code or previous releases?
          </p>
          <a
            href="https://github.com/vuiodev/vuio/releases"
            className="text-blue-700 hover:text-blue-800 font-semibold text-sm inline-flex items-center gap-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            View all releases on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;