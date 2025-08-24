import Header from './components/Header';
import Hero from './components/Hero';
import DownloadSection from './components/DownloadSection';
import Features from './components/Features';
import Installation from './components/Installation';
import Community from './components/Community';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <DownloadSection />
      <Features />
      <Installation />
      <Community />
      <Footer />
    </div>
  );
}

export default App;