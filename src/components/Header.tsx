import React from 'react';
import { Menu, X } from 'lucide-react';
import { Github } from './icons';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent">
                VuIO
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold uppercase tracking-wider">
                Ecosystem
              </span>
            </a>
          </div>
          
          <nav className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a href="#ecosystem" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Ecosystem
              </a>
              <a href="#tower" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                VuIO Tower
              </a>
              <a href="#features" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#installation" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Installation
              </a>
              <a href="#download" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Download
              </a>
            </div>
          </nav>

          <div className="hidden sm:flex items-center space-x-4">
            <a
              href="https://github.com/vuiodev/vuio"
              className="text-gray-700 hover:text-blue-700 transition-colors p-1.5 rounded-lg hover:bg-gray-100"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Repository"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#download"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-all shadow-sm hover:shadow"
            >
              Get VuIO
            </a>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 transition-colors p-2"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-2 sm:px-6">
            <a href="#ecosystem" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Ecosystem
            </a>
            <a href="#tower" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              VuIO Tower (Desktop)
            </a>
            <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Features
            </a>
            <a href="#installation" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Installation
            </a>
            <a href="#download" onClick={() => setIsMenuOpen(false)} className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Download
            </a>
            <div className="pt-2 px-3">
              <a
                href="#download"
                onClick={() => setIsMenuOpen(false)}
                className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-800 transition-colors inline-block"
              >
                Get VuIO
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;