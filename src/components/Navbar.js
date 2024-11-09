// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';

function Navbar() {
  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/login" className="nav-link">Login</Link>
      <Link to="/donor" className="nav-link">Donor</Link>
      <Link to="/recipient" className="nav-link">Recipient</Link>
      <Link to="/admin" className="nav-link">Admin</Link>
    </motion.nav>
  );
}

export default Navbar;
