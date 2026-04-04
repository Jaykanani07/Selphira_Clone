import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2 className="footer-logo">Selphira<span>.</span></h2>
            <p className="footer-desc">
              Elevating your daily ritual with pure, handcrafted Ayurvedic skincare. 
              Glow naturally, every day.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Shop</h4>
            <ul>
              <li><Link to="/shop">Face Care</Link></li>
              <li><Link to="/shop">Body Care</Link></li>
              <li><Link to="/shop">Hair Care</Link></li>
              <li><Link to="/shop">Bestsellers</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/">Contact</Link></li>
              <li><Link to="/">Track Order</Link></li>
              <li><Link to="/">Blog</Link></li>
            </ul>
          </div>
          
          <div className="footer-newsletter">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="newsletter-text">Subscribe to get 10% off your first order.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" aria-label="Email for newsletter block" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Selphira (OPC) Pvt. Ltd. All Rights Reserved.</p>
          <div className="footer-legal">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
