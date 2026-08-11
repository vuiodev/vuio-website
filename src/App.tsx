import Header from './components/Header';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import MissionSection from './components/MissionSection';
import TowerSection from './components/TowerSection';
import Features from './components/Features';
import Installation from './components/Installation';
import DownloadSection from './components/DownloadSection';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 font-sans selection:bg-blue-500 selection:text-white">
      <Header />
      <main id="main-content">
        <Hero />
        <Ecosystem />
        <MissionSection />
        <TowerSection />
        <Features />
        <Installation />
        <DownloadSection />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default App;