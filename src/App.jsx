import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Sections/Hero';
import Services from './components/Sections/Services';
import Footer from './components/Layout/Footer';

function App() {
  useEffect(() => {
    const setVH = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`);
    };
    
    setVH();
    window.addEventListener('resize', setVH);
    window.addEventListener('orientationchange', setVH);
    
    return () => {
      window.removeEventListener('resize', setVH);
      window.removeEventListener('orientationchange', setVH);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <Services />
      </motion.div>
      
      <Footer />
    </div>
  );
}

export default App;