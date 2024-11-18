import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TeologiaPage from './pages/TeologiaPage';
import ArtePage from './pages/ArtePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-mi" element={<AboutPage />} />
      <Route path="/teologia" element={<TeologiaPage />} />
      <Route path="/arte" element={<ArtePage />} />
    </Routes>
  );
}

export default App;