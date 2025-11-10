import React, { useState, useEffect } from 'react';
import './HeroSection.css';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    {
      id: 1,
      title: "Empowering Healthcare with Artificial Intelligence",
      subtitle: "Revolutionizing medical diagnostics through advanced AI technology",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "🧠",
      buttonColor: "#667eea"
    },
    {
      id: 2,
      title: "One Platform, Multiple Health Diagnostics",
      subtitle: "Comprehensive health assessment in one seamless interface",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "🏥",
      buttonColor: "#f5576c"
    },
    {
      id: 3,
      title: "Check Your Health Instantly with AI Models",
      subtitle: "Get accurate predictions and insights in real-time",
      background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "⚡",
      buttonColor: "#4facfe"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [currentSlide, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleGetStarted = () => {
    // Scroll to models section or navigate to login
    const modelsSection = document.getElementById('models');
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    // Scroll to about section
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      {/* Slideshow Container */}
      <div 
        className="slideshow-container"
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === currentSlide ? 'active' : ''} ${
              index === (currentSlide - 1 + slides.length) % slides.length ? 'prev' : ''
            } ${
              index === (currentSlide + 1) % slides.length ? 'next' : ''
            }`}
            style={{ background: slide.background }}
          >
            <div className="slide-overlay"></div>
            <div className="slide-content">
              <div className="slide-icon">{slide.image}</div>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-subtitle">{slide.subtitle}</p>
              <div className="hero-buttons">
                <button 
                  className="cta-button primary" 
                  onClick={handleGetStarted}
                  style={{ '--button-color': slide.buttonColor }}
                >
                  Get Started
                </button>
                <button 
                  className="cta-button secondary"
                  onClick={handleLearnMore}
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="slide-nav prev-nav" onClick={prevSlide}>
        ‹
      </button>
      <button className="slide-nav next-nav" onClick={nextSlide}>
        ›
      </button>
      
      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="progress-container">
        <div 
          className="progress-bar" 
          style={{ 
            animationDuration: '5s',
            animationPlayState: isAutoPlaying ? 'running' : 'paused'
          }}
        />
      </div>

      {/* Scroll Down Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;