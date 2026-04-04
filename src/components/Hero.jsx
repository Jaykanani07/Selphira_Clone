import React from 'react';
import './Hero.css';
import heroImage1 from '../assets/images/hero_image_1.png';
import heroImage2 from '../assets/images/hero_image_2.png';

const Hero = () => {
  return (
    <section className="hero-premium" id="home">
      <div className="container hero-premium-container">
        <div className="hero-premium-content">
          <span className="hero-eyebrow animate-fade-in-up">Pure & Natural</span>
          <h1 className="hero-title animate-fade-in-up delay-100">
            Nature Refined <br />
            for <span className="text-italic">Everyday Radiance</span>.
          </h1>
          <p className="hero-subtitle animate-fade-in-up delay-200">
            Experience the ancient wisdom of Ayurvedic skincare with our premium cosmetic line. Handcrafted for your modern radiance.
          </p>
          <div className="hero-actions animate-fade-in-up delay-300">
            <a href="#shop" className="btn btn-primary">Shop Collection</a>
            <a href="#about" className="btn btn-outline">Our Story</a>
          </div>
        </div>

        <div className="hero-premium-visuals">
          <div className="visual-primary animate-fade-in-up delay-200">
            <img
              src={heroImage1}
              alt="Selphira Ayurvedic Products"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="visual-secondary animate-fade-in-up delay-300">
            <img
              src={heroImage2}
              alt="Selphira Natural Ingredients"
              fetchPriority="high"
              loading="eager"
            />
          </div>
          <div className="visual-badge animate-fade-in-up delay-300">
            <span className="badge-text">Selphira</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
