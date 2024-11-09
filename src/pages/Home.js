// src/pages/Home.js
import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ textAlign: 'center', padding: '2rem' }}
    >
      <h1 style={{ color: 'var(--primary-color)' }}>Welcome to Food Wastage Management</h1>
      <p style={{ color: 'var(--text-color)' }}>
        Our mission is to reduce food wastage and ensure food security.
      </p>
      <p style={{ color: 'var(--secondary-color)' }}>
        Get started by logging in or exploring our platform.
      </p>
    </motion.div>
  );
}

export default Home;
