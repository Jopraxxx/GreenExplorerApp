import React, { useState } from 'react';
import Landing from './components/Landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Features from './components/Features';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import GreenNaturePlaces from './components/GreenNaturePlaces';
import LogIn from './components/LogIn';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  return (
        
    <Router>
  
      <div className="flex flex-col min-h-screen">
        <Header openLogin={openLogin} />
        <main className="flex-grow">
          <div>
          </div>
          <Routes>
            {/* Default route */}
            <Route path="/" element={<Landing />} />
            <Route path="/features" element={<Features />} />
            <Route path="/green-places" element={<GreenNaturePlaces />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        
        <Footer />
        <LogIn isOpen={isLoginOpen} onClose={closeLogin} />
      </div>
    </Router>
  );
}

export default App;
