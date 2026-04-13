import { Analytics } from './components/Analytics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { Authority } from './components/Authority';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Transition } from './components/Transition';
import { Founder } from './components/Founder';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30 antialiased">
      <Analytics />
      <div className="bg-noise"></div>
      <Navbar />
      <main className="flex flex-col relative z-10">
        <Hero />
        <LogoCloud />
        <Authority />
        <Services />
        <Process />
        <Transition />
        <Founder />
        <Metrics />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
