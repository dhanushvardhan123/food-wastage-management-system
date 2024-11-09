// src/App.js
import './theme.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Donor from './pages/Donor';
import Recipient from './pages/Recipient';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/recipient" element={<Recipient />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
