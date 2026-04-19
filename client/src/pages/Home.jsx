import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Avoters from '../components/Avoters';
import Services from '../components/Services';
import Types from '../components/Types';
import Work from '../components/Work';
import Tuning from '../components/Tuning';
import WhyUs from '../components/WhyUs';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Pricing from '../components/Pricing';
import Blog from '../components/Blog';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.substring(1));
      if (el) {
        // slight delay to ensure render is complete before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Avoters />
      <Services />
      <Types />
      <Work />
      <Tuning />
      <WhyUs />
      <Reviews />
      <FAQ />
      <Pricing />
      <Blog />
    </main>
  );
};

export default Home;
