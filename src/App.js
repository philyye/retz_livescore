// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import FixturesPage from './pages/FixturesPage';
import LeagueTablePage from './pages/LeagueTablePage';

import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved preference once
  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
  }, []);

  // Apply/remove .dark on body and persist
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <Router>
      <header className="app-header">
        <Navbar />
        <button 
          className="dark-toggle" 
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/fixtures" element={<FixturesPage />} />
          <Route path="/table"    element={<LeagueTablePage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
