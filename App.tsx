import { Analytics } from './components/Analytics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoCloud } from './components/LogoCloud';
import { Authority } from './components/Authority';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { StrategyGenerator } from './components/StrategyGenerator';
import { Transition } from './components/Transition';
import { Founder } from './components/Founder';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Privacy } from './components/pages/Privacy';
import { Contact } from './components/pages/Contact';

const Home = () => (
  <main className="flex flex-col relative z-10">
    <Hero />
    <LogoCloud />
    <Authority />
    <Services />
    <Process />
    <StrategyGenerator />
    <Transition />
    <Founder />
    <Metrics />
    <Testimonials />
    <CallToAction />
  </main>
);

function App() {
  const path = window.location.pathname;
  const page =
    path === '/privacy' ? <Privacy /> :
    path === '/contact' ? <Contact /> :
    <Home />;

  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30 antialiased">
      <Analytics />
      <div className="bg-noise"></div>
      <Navbar />
      {page}
      <Footer />
    </div>
  );
}

export default App;
