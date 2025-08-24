import { Wifi, Shield, Zap, Settings, Smartphone, Monitor } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Universal Streaming',
      description: 'Stream to any DLNA-compatible device including smart TVs, game consoles, and mobile devices'
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Optimized streaming engine with minimal CPU and RAM usage and instant media discovery'
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your media stays on your network. No cloud services, no data collection, complete privacy'
    },
    {
      icon: Settings,
      title: 'Easy Configuration',
      description: 'Simple web interface for managing libraries, users, and streaming preferences'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ready',
      description: 'VLC as client on any mobile device, IOS or Android'
    },
    {
      icon: Monitor,
      title: 'Cross Platform',
      description: 'Runs on Windows, macOS, Linux, and Docker with consistent performance across all platforms'
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Vuio?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Built for performance, designed for simplicity, and crafted with privacy in mind
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-6">
                  <IconComponent className="h-6 w-6 text-blue-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;