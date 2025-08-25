import { Download, Monitor, HardDrive } from 'lucide-react';

const DownloadSection = () => {
  const downloads = [
    {
      platform: 'Windows',
      icon: Monitor,
      version: 'v0.0.12',
      description: 'Windows 10/11 (64-bit)',
      builds: [
        { arch: 'x86_64', size: '2.7 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.12/vuio-windows-x86_64.exe' },
        { arch: 'ARM64', size: '2.6 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.12/vuio-windows-arm64.exe' }
      ]
    },
    {
      platform: 'macOS',
      icon: Monitor,
      version: 'v0.0.12',
      description: 'macOS 10.15+',
      builds: [
        { arch: 'Intel', size: '2.5 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.12/vuio-macos-x86_64.tar.gz' },
        { arch: 'Apple Silicon', size: '2.5 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.12/vuio-macos-arm64.tar.gz' }
      ]
    },
    {
      platform: 'Linux',
      icon: HardDrive,
      version: 'v0.0.12',
      description: 'Ubuntu, Debian, CentOS, Arch',
      builds: [
        { arch: 'x86_64', size: '4.8 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.12/vuio-linux-x86_64.tar.gz' },
        { arch: 'ARM64', size: '5 MB', downloadUrl: 'https://github.com/vuiodev/vuio/releases/download/v0.0.12/vuio-linux-arm64.tar.gz' }
      ]
    },
    {
      platform: 'Docker',
      icon: HardDrive,
      version: 'latest',
      description: 'Cross-platform container',
      builds: [
        { arch: 'Pull from Github', size: '~38 MB', downloadUrl: 'https://github.com/vuiodev/vuio/pkgs/container/vuio' }
      ]
    }
  ];

  return (
    <section id="download" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Download Vuio
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose your platform and start streaming your media in minutes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {downloads.map((download) => {
            const IconComponent = download.icon;
            return (
              <div
                key={download.platform}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow hover:border-blue-200 flex flex-col"
              >
                {/* Card Header */}
                <div>
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                    <IconComponent className="h-6 w-6 text-blue-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {download.platform}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {download.description}
                  </p>
                  <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                    <span>{download.version}</span>
                  </div>
                </div>

                {/* Download links - pushed to bottom */}
                <div className="mt-auto pt-4 space-y-2">
                  {download.builds.map((build) => (
                    <a
                      key={build.arch}
                      href={build.downloadUrl}
                      className="w-full bg-blue-50 text-blue-800 py-2.5 px-4 rounded-lg font-medium hover:bg-blue-100 transition-colors flex items-center justify-between"
                    >
                      <span className="flex items-center gap-2">
                        <Download className="h-4 w-4" />
                        {build.arch}
                      </span>
                      <span className="text-xs text-blue-700">{build.size}</span>
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Looking for older versions or source code?
          </p>
          <a
            href="https://github.com/vuiodev/vuio/releases"
            className="text-blue-700 hover:text-blue-800 font-medium"
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