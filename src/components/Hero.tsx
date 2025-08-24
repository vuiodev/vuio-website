import { Play, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Open Source
            <span className="text-blue-700 block">DLNA Server</span>
            Vuio
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stream your media collection seamlessly across all your devices with Vuio,
            the powerful and lightweight DLNA server that puts you in control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#download"
              className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              <Download className="h-5 w-5" />
              Download Now
            </a>
            <a
              href="#features"
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 hover:text-white transition-colors flex items-center gap-2"
            >
              <Play className="h-5 w-5" />
              Learn More
            </a>
          </div>
          <div className="mt-12 text-sm text-gray-500">
            <p>Free • Open Source • Cross Platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;