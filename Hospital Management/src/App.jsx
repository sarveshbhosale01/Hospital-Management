import React, { useState, useEffect } from 'react';
import './App.css';

// Import all sections
import HeroSection from './components/HeroSection/HeroSection';
import AboutSection from './components/AboutSection/AboutSection';
import ModelsSection from './components/ModelsSection/ModelsSection';
import ReviewsSection from './components/ReviewsSection/ReviewsSection';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Update active section based on scroll position
      const sections = ['hero', 'about', 'models', 'reviews', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogin = (userData) => {
    setIsLoggedIn(true);
    setCurrentUser(userData);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('authToken');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <h2>🏥 MediAI Care</h2>
          </div>
          <div className="nav-links">
            {['hero', 'about', 'models', 'reviews', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
            {isLoggedIn ? (
              <button className="btn btn-primary btn-sm" onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <button 
                className="btn btn-primary btn-sm" 
                onClick={() => window.location.href = '/login'}
              >
                Login
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <ModelsSection />
        <ReviewsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default App;