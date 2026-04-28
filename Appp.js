import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Home from './components/Home';
import CardEditor from './components/CardEditor';
import CardGallery from './components/CardGallery';
import './App.css';

function App() {
  const [selectedCard, setSelectedCard] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
        <Header />
        <Routes>
          <Route path="/" element={<Home setSelectedCard={setSelectedCard} />} />
          <Route path="/editor" element={<CardEditor selectedCard={selectedCard} />} />
          <Route path="/gallery" element={<CardGallery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
