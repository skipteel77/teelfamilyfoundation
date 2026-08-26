import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Grants from './components/Grants';
import PartnerCTA from './components/PartnerCTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Impact />
        <Grants />
        <PartnerCTA />
        <section id="news" className="sr-only" aria-label="News placeholder" />
      </main>
      <Footer />
    </div>
  );
}
