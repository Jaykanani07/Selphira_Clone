import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import FeaturedProducts from '../components/FeaturedProducts';

const Home = ({ addToCart, searchQuery }) => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.hash, location.pathname]);

  return (
    <>
      <Hero />
      <Benefits />
      <FeaturedProducts 
        addToCart={addToCart} 
        searchQuery={searchQuery} 
      />
    </>
  );
};

export default Home;
