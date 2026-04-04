import React from 'react';
import { Link } from 'react-router-dom';
import './FeaturedProducts.css';
import productSoap from '../assets/images/product_soap.jpg';
import productFacewash from '../assets/images/product_facewash.png';

export const bestSellers = [
  {
    image: productSoap,
    name: 'Ayurvedic Cleansing Bar',
    desc: 'Handcrafted herbal bar with Lavender and Aloe Vera.',
    price: '₹199',
    originalPrice: '₹299'
  },
  {
    image: productFacewash,
    name: 'Neem Aloe Face Wash',
    desc: 'Natural revitalization with Neem, Tulsi & Lemon extracts.',
    price: '₹299',
    originalPrice: '₹399'
  }
];

const FeaturedProducts = ({ addToCart, searchQuery }) => {

  const filteredProducts = bestSellers.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="featured-products section-padding" id="shop">
      <div className="container">
        <div className="section-header text-center reveal-on-scroll">
          <span className="section-eyebrow">Discover</span>
          <h2 className="section-title">Our Bestsellers</h2>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div className={`product-card reveal-on-scroll delay-${(index + 1) * 100}`} key={index}>
                <div className="product-image-wrapper">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    decoding="async"
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
          <div className="empty-state text-center">
            <p>No products found matching "{searchQuery}"</p>
            <button className="btn btn-outline" onClick={() => window.scrollTo(0,0)}>Clear Search</button>
          </div>
        )}
        
        <div className="text-center mt-4">
          <Link to="/shop" className="btn btn-outline" style={{ marginTop: '3rem' }}>Shop All</Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
