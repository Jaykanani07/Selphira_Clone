import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImage2 from '../assets/images/hero_image_2.png';
import '../components/FeaturedProducts.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page" style={{ paddingTop: '120px', paddingBottom: '8rem', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header text-center animate-fade-in-up">
          <span className="section-eyebrow">Our Heritage</span>
          <h2 className="section-title">The Story of Selphira</h2>
        </div>

        <div className="about-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginTop: '4rem' }}>
          <div className="about-text animate-fade-in-up delay-100">
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Rooted in Ancient Ayurveda</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Selphira was born from a simple belief: your daily skincare ritual should be a moment of pure, holistic healing. We draw our inspiration directly from 5,000-year-old Ayurvedic texts, carefully translating ancient botanical wisdom into luxurious, modern formulations.
            </p>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Every elixir, mask, and serum we craft is a testament to the power of unadulterated nature. We source our Saffron, Sandalwood, and Turmeric strictly from ethical farms that honor the soil, ensuring that the vibrancy of the earth is passed directly to your skin in its most potent form.
            </p>
            
            <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>Our Commitment to Purity</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>
              We promise zero compromises. Our products are rigorously free from synthetic parabens, artificial fragrances, and harmful sulfates. When you hold a Selphira product, you are holding 100% natural efficacy—crafted in small batches to preserve the life force of our active organics.
            </p>
          </div>
          
          <div className="about-visual animate-fade-in-up delay-200">
            <div className="product-image-wrapper" style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--glass-border-bright)' }}>
              <img 
                src={heroImage2} 
                alt="Selphira Natural Ingredients" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        
        <div className="text-center animate-fade-in-up delay-300" style={{ marginTop: '6rem' }}>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Experience the Radiance</h3>
          <Link to="/shop" className="btn btn-primary">Discover Our Collection</Link>
        </div>
      </div>
    </div>
  );
};

export default About;
