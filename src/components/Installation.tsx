import React from 'react';
import { Terminal, Copy } from 'lucide-react';

const Installation = () => {
  const [copiedCommand, setCopiedCommand] = React.useState('');

  const copyToClipboard = (text: string, command: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCommand(command);
    setTimeout(() => setCopiedCommand(''), 2000);
  };

  const installCommands = [
    {
      platform: 'Docker',
      command: 'docker run -d --name vuio-server --restart unless-stopped --network host --cap-add NET_ADMIN \
  --cap-add NET_RAW \
  -v /path/to/your/media:/media:ro \
  -v ./vuio-config:/config \
  -e VUIO_SERVER_IP=192.168.1.126 \
  -e VUIO_PORT=8080 \
  -e VUIO_MEDIA_DIR=/media \
  -e PUID=1000 \
  -e PGID=1000 \
  vuio:latest',
      description: 'Quick start with Docker'
    },
    {
      platform: 'docker-compose',
      command: 'docker-compose -f docker-compose.yml up',
      description: 'Start using docker-compose'
    },
    {
      platform: 'Linux (apt)',
      command: 'curl -fsSL https://get.vuio.org | sudo bash',
      description: 'One-line installer for Debian/Ubuntu/RHEL/CentOS'
    }
  ];

  return (
    <section id="installation" className="py-20 bg-white w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Quick Installation
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get Vuio running in seconds with these simple commands
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {installCommands.map((install, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 text-white"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-green-400" />
                  <span className="font-semibold">{install.platform}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(install.command, install.platform)}
                  className="text-gray-400 hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  <Copy className="h-4 w-4" />
                </button>
              </div>
              <code className="text-green-400 text-sm font-mono break-all">
                {install.command}
              </code>
              <p className="text-gray-400 text-sm mt-3">
                {install.description}
              </p>
              {copiedCommand === install.platform && (
                <p className="text-green-400 text-sm mt-2">Copied!</p>
              )}
            </div>
          ))}
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">
            Getting Started
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div>
              <div className="flex items-center justify-center w-8 h-8 bg-blue-700 text-white rounded-full mb-3 font-semibold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Install</h4>
              <p className="text-gray-600">
                Download and install Vuio using your preferred method above
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-8 h-8 bg-blue-700 text-white rounded-full mb-3 font-semibold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Configure</h4>
              <p className="text-gray-600">
                Add your media folders through the web interface at localhost:8200
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center w-8 h-8 bg-blue-700 text-white rounded-full mb-3 font-semibold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Stream</h4>
              <p className="text-gray-600">
                Connect your devices and start streaming your media collection
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Installation;