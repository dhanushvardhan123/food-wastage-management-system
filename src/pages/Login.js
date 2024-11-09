// src/pages/Login.js
import React from 'react';
import { motion } from 'framer-motion';
import './Login.css';

function Login() {
  return (
    <motion.div
      className="login-container"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="login-title">Login</h1>
      <form>
        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" required />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" name="password" required />
        </div>
        <button className="login-button" type="submit">Login</button>
      </form>
    </motion.div>
  );
}

export default Login;
