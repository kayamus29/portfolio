import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import Footer from './components/Footer';
import './styles/globals.css';

function App() {
  useEffect(() => {
    // Lightweight smooth scroll implementation
    const smoothScroll = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) return; // Allow zoom
      
      e.preventDefault();
      const delta = e.deltaY;
      const scrollSpeed = 0.8;
      
      window.scrollBy({
        top: delta * scrollSpeed,
        behavior: 'auto'
      });
    };

    // Only apply smooth scroll on desktop
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
      document.addEventListener('wheel', smoothScroll, { passive: false });
    }

    return () => {
      if (isDesktop) {
        document.removeEventListener('wheel', smoothScroll);
      }
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;