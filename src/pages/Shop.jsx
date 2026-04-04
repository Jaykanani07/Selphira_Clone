import React, { useEffect } from 'react';
import '../components/FeaturedProducts.css';
import { bestSellers } from '../components/FeaturedProducts';

import imgSaffron from '../assets/images/Saffron Glow Elixir.png';
import imgSandalwood from '../assets/images/Sandalwood_Detox_Mask.png';
import imgRose from '../assets/images/Rose Water Toner.jpg';
import imgKumkumadi from '../assets/images/Kumkumadi Tailam.jpg';
import imgTurmeric from '../assets/images/Turmeric Healing Balm.jpg';
import imgShampoo from '../assets/images/Anti hair fall Shampoo + Conditioner.jpg';

const shopProducts = [
  {
    image: imgSaffron,
    name: 'Saffron Glow Elixir',
    desc: 'Pure saffron infused radiance serum.',
    price: '₹499',
    originalPrice: '₹599'
  },
  {
    image: imgSandalwood,
    name: 'Sandalwood Detox Mask',
    desc: 'Deep cleansing clay mask with organic sandalwood.',
    price: '₹349',
    originalPrice: '₹449'
  },
  {
    image: imgRose,
    name: 'Rose Water Toner',
    desc: 'Hydrating and balancing pure rose distillate.',
    price: '₹249',
    originalPrice: '₹299'
  },
  {
    image: imgKumkumadi,
    name: 'Kumkumadi Tailam',
    desc: 'Ayurvedic night serum for youthful skin.',
    price: '₹799',
    originalPrice: '₹999'
  },
  {
    image: imgTurmeric,
    name: 'Turmeric Healing Balm',
    desc: 'Anti-inflammatory spot treatment.',
    price: '₹199',
    originalPrice: '₹249'
  },
  {
    image: imgShampoo,
    name: 'Anti hair fall Shampoo + Conditioner',
    desc: 'Reduces hair fall and promotes hair growth.',
    price: '₹2199',
    originalPrice: '₹2499'
  }
];

const Shop = ({ addToCart, searchQuery }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredProducts = shopProducts.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="shop-page" style={{ paddingTop: '120px', paddingBottom: '8rem', minHeight: '100vh' }}>
      <div className="container">
        <div className="section-header text-center reveal-on-scroll">
          <span className="section-eyebrow">Complete Collection</span>
          <h2 className="section-title">Shop All Products</h2>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div className={`product-card animate-fade-in-up delay-${((index % 3) + 1) * 100}`} key={index}>
                <div className="product-image-wrapper">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                  />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-desc">{product.desc}</p>
                  <div className="product-price-row">
                    <span className="product-price">{product.price}</span>
                    <span className="product-original-price">{product.originalPrice}</span>
                  </div>
                  <button
                    className="btn btn-outline product-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="fallback-section">
            <div className="empty-state text-center">
              <p>No products found matching "{searchQuery}"</p>
            </div>
            
            <div className="section-header text-center" style={{ marginTop: '5rem', marginBottom: '3rem' }}>
              <span className="section-eyebrow">Discover</span>
              <h3 className="section-title" style={{ fontSize: '2.2rem' }}>Our Bestsellers</h3>
            </div>
            
            <div className="products-grid">
              {bestSellers.map((product, index) => (
                <div className={`product-card animate-fade-in-up delay-${((index % 3) + 1) * 100}`} key={`bs-${index}`}>
                  <div className="product-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                    />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-desc">{product.desc}</p>
                    <div className="product-price-row">
                      <span className="product-price">{product.price}</span>
                      <span className="product-original-price">{product.originalPrice}</span>
                    </div>
                    <button
                      className="btn btn-outline product-btn"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
