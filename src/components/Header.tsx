import React from 'react';
import { Github, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50 w-full">
      <div className="w-full px-4 sm:px-8 lg:px-16">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-700">Vuio</h1>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Features
              </a>
              <a href="#download" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Download
              </a>
              <a href="#installation" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Installation
              </a>
              <a href="#community" className="text-gray-700 hover:text-blue-700 px-3 py-2 text-sm font-medium transition-colors">
                Community
              </a>
            </div>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/vuiodev/vuio"
              className="text-gray-700 hover:text-blue-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#download"
              className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors"
            >
              Download
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-700 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
            <a href="#features" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Features
            </a>
            <a href="#download" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Download
            </a>
            <a href="#installation" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Installation
            </a>
            <a href="#community" className="text-gray-700 hover:text-blue-700 block px-3 py-2 text-base font-medium">
              Community
            </a>
            <div className="px-3 py-2">
              <a
                href="#download"
                className="bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors inline-block"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;