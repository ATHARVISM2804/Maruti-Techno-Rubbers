import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Applications from './pages/Applications';
import CaseStudies from './pages/CaseStudies';
import Downloads from './pages/Downloads';
import Contact from './pages/Contact';
import GlobalPresence from './pages/GlobalPresence';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/applications" element={<Applications />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/global-presence" element={<GlobalPresence />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;