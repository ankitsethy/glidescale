import { useEffect } from 'react';
import { Analytics } from './components/Analytics';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ToolMarquee } from './components/ToolMarquee';
import { Authority } from './components/Authority';
import { HomeProof } from './components/HomeProof';
import { Guarantee } from './components/Guarantee';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Founder } from './components/Founder';
import { Metrics } from './components/Metrics';
import { Testimonials } from './components/Testimonials';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Privacy } from './components/pages/Privacy';
import { Contact } from './components/pages/Contact';
import { Work } from './components/pages/Work';
import { WorkDetail } from './components/pages/WorkDetail';
import { ServicesPage } from './components/pages/Services';
import { ProcessPage } from './components/pages/Process';
import { findRoute } from './data/routes';
import { caseStudies } from './data/clients';

const Home = () => (
  <main className="flex flex-col relative z-10">
    <Hero />
    <ToolMarquee />
    <Authority />
    <HomeProof />
    <Guarantee />
    <Services />
    <Process />
    <Founder />
    <Metrics />
    <Testimonials />
  </main>
);

function App({ path: pathProp }: { path?: string }) {
  const path = pathProp ?? (typeof window === 'undefined' ? '/' : window.location.pathname);

  useEffect(() => {
    document.title = findRoute(path).title;
  }, [path]);

  const workStudy = path.startsWith('/work/')
    ? caseStudies.find((study) => study.id === path.slice('/work/'.length))
    : undefined;

  const page =
    workStudy ? <WorkDetail study={workStudy} /> :
    path === '/work' ? <Work /> :
    path === '/services' ? <ServicesPage /> :
    path === '/process' ? <ProcessPage /> :
    path === '/privacy' ? <Privacy /> :
    path === '/contact' ? <Contact /> :
    <Home />;

  // The Contact page IS the closing CTA in a different shape -- showing both
  // repeats the ask twice on one page.
  const showCallToAction = path !== '/contact';

  return (
    <div className="min-h-screen bg-base text-ink font-sans selection:bg-accent/30 antialiased">
      <Analytics />
      <div className="bg-noise"></div>
      <Navbar />
      {page}
      {showCallToAction && <CallToAction />}
      <Footer />
    </div>
  );
}

export default App;
