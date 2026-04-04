import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import useScrollReveal from './hooks/useScrollReveal';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [toast, setToast] = useState(null);

  useScrollReveal();

  const addToCart = (product) => {
    setCartItems(prev => [...prev, product]);
    setToast(`Added ${product.name} to cart!`);
    
    // Auto-hide toast
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="app">
      <Navbar 
        cartCount={cartItems.length} 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemove={removeFromCart}
      />
      
      <main>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} searchQuery={searchQuery} />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} searchQuery={searchQuery} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
      
      {/* Toast Notification */}
      <div className={`toast-notification ${toast ? 'visible' : ''}`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        <span>{toast}</span>
      </div>
    </div>
  );
}

export default App;
