import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🏥 MediAI Care</h3>
            <p>
              Empowering healthcare through artificial intelligence. 
              Providing accurate, fast, and reliable diagnostic tools 
              for medical professionals and patients worldwide.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">📘</a>
              <a href="#" aria-label="GitHub">🐙</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📷</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#models">AI Models</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>AI Models</h4>
            <ul>
              <li><a href="#">Breast Cancer</a></li>
              <li><a href="#">Diabetes</a></li>
              <li><a href="#">Heart Disease</a></li>
              <li><a href="#">Insurance</a></li>
              <li><a href="#">Kidney Health</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Medical Disclaimer</a></li>
              <li><a href="#">Contact Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Hospital Management | Powered by AI Healthcare</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;