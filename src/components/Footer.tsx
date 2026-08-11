import { Heart, ShieldCheck, ExternalLink, MessageCircle } from 'lucide-react';
import { Github } from './icons';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16 w-full border-t border-slate-800">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                VuIO
              </h3>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-900/60 text-blue-300 font-semibold border border-blue-700/50">
                Ecosystem
              </span>
            </div>

            <p className="text-slate-400 text-sm mb-6 max-w-md leading-relaxed">
              Modern open source media streaming ecosystem. Ultra-lightweight Rust core (&lt;15MB RAM), native Tauri desktop application host, multi-protocol casting (DLNA, Google Cast, AirPlay), and AI Model Context Protocol (MCP) server.
            </p>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com/vuiodev/vuio"
                className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-2 text-xs font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub Core Repo"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://discord.gg/UA88WR9mV"
                className="text-indigo-400 hover:text-indigo-300 transition-colors p-2 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 flex items-center gap-2 text-xs font-semibold"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord Community"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Discord</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Ecosystem Projects
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <a href="https://github.com/vuiodev/vuio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  VuIO Core (Rust) <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://github.com/vuiodev/vuio-tower" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  VuIO Tower (Desktop) <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://github.com/vuiodev/homebrew-vuio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1">
                  Homebrew Tap <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Resources &amp; Community
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <a href="https://discord.gg/UA88WR9mV" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors inline-flex items-center gap-1 text-indigo-400">
                  Discord Community <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              </li>
              <li>
                <a href="https://github.com/vuiodev/vuio/blob/main/docs/api.md" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  API &amp; MCP Documentation
                </a>
              </li>
              <li>
                <a href="https://github.com/vuiodev/vuio/issues" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Issue Tracker
                </a>
              </li>
              <li>
                <a href="#download" className="hover:text-white transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 VuIO Ecosystem</span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300 font-medium">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
              100% Open Source (Dual MIT / Apache 2.0)
            </span>
          </div>

          <div className="flex items-center">
            <span>Crafted with</span>
            <Heart className="h-3.5 w-3.5 mx-1 text-red-500 fill-red-500" />
            <span>for the Open Source Community</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;