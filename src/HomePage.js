// src/HomePage.js
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import BagsSection from './components/BagSection';
import AboutUs from './components/AboutUs';
import WatchesSection from './components/WatchSection';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BagsSection />
      <AboutUs />
      <WatchesSection />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default HomePage;
