import { Analytics } from './components/Analytics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Authority } from './components/Authority';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Transition } from './components/Transition';
import { Founder } from './components/Founder';
import { Metrics } from './components/Metrics';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans selection:bg-electric-500/30">
      <Analytics />
      <div className="bg-noise"></div>
      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <Authority />
        <Services />
        <Process />
        <Transition />
        <Founder />
        <Metrics />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;