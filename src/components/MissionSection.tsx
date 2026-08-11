import { Target, Globe2, ShieldCheck, Compass, Rocket, Tv, CheckCircle2 } from 'lucide-react';

const MissionSection = () => {
  const environments = [
    { title: 'Homes & Homelabs', desc: 'Seamless local network streaming across smart TVs, PCs, and mobile devices.' },
    { title: 'Schools & Universities', desc: 'Educational media distribution over local intranet without bandwidth bottlenecks.' },
    { title: 'Ships, Yachts & Transit', desc: 'Entertainment on cruise ships, buses, trains, and planes with zero internet needed.' },
    { title: 'Remote Outposts & Stations', desc: 'Reliable media server for research stations, polar outposts, and off-grid shelters.' },
    { title: 'Deep Offline Environments', desc: 'Designed for bunkers, remote habitats, and future lunar or Mars bases.' }
  ];

  const roadmapItems = [
    'Android & iOS Native Apps with DirectPlay',
    'Android TV & Apple TV Applications',
    'Samsung Tizen & LG webOS Smart TV Apps',
    'Amazon Fire TV Integration'
  ];

  return (
    <section id="mission" className="py-24 bg-slate-900 text-white w-full border-t border-slate-800">
      <div className="w-full px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Target className="h-3.5 w-3.5" />
            <span>Vision &amp; Purpose</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
            The VuIO Mission
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            VuIO was created to be the best <strong className="text-white">open-source, zero-ads</strong> media server with extremely low resource usage (&lt;15MB RAM) and a highly modular architecture.
          </p>
        </div>

        {/* Mission Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Globe2 className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Streaming Anywhere</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                VuIO is specifically designed for offline and localized media sharing wherever commercial streaming services (like Netflix) are out of reach or where high-volume local content needs to be shared fast over local networks.
              </p>
              
              <div className="space-y-3">
                {environments.map((env, i) => (
                  <div key={i} className="flex items-start gap-3 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <Compass className="h-4 w-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="text-sm font-semibold text-white block">{env.title}</span>
                      <span className="text-xs text-slate-400">{env.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <Rocket className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">Future Ecosystem Roadmap</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Beyond DLNA, Chromecast, AirPlay, and Web Player streaming, VuIO is actively building native client applications across all major TV and mobile platforms.
              </p>

              <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-5 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
                  <Tv className="h-4 w-4 text-indigo-400" />
                  Upcoming Native Client Apps
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {roadmapItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                      <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                <span>Zero Ads • No Data Collection • 100% Free &amp; Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
