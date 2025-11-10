import React, { useState } from "react";
import "./home.css";
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaPinterestP, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";

const Home = () => {
  const [showModel, setShowModel] = useState(false);

  // When Breast Cancer card is clicked → show Streamlit app
  const handleOpenModel = () => {
    setShowModel(true);
  };

  // When Back button clicked → return to Home UI
  const handleBack = () => {
    setShowModel(false);
  };

  return (
    <div className="home-container">
      {!showModel ? (
        <>
          {/* Top Bar */}
          <div className="top-bar">
            <div className="social-icons">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaPinterestP />
            </div>
            <div className="contact-info">
              <span><FaPhone /> +1-123-556-5523</span>
              <span><FaEnvelope /> support@example.com</span>
            </div>
          </div>

          {/* Navbar */}
          <nav className="navbar">
            <div className="logo">
              <span className="logo-blue">Hospital</span> Management
            </div>
            <ul className="nav-links">
              <li>Home</li>
              <li>About</li>
              <li>Doctors</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
            <div className="nav-actions">
              <button className="menu-btn">☰</button>
            </div>
          </nav>

          {/* Hero Section */}
          <section className="hero-section">
            <div className="hero-left">
              <h1>Your Partner In Health and Wellness</h1>
              <p>
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking at its layout.
              </p>
              <button className="appointment-btn">BOOK AN APPOINTMENT</button>
            </div>
            <div className="hero-right">
              <img src="src/assets/hospital management.png" alt="Doctor" />
            </div>
          </section>

          {/* Services Section */}
          <section className="services-section">
            <h2>Our Healthcare Services</h2>
            <p>
              It is a long established fact that a reader will be distracted by readable content.
            </p>

            <div className="services-grid">
              <div className="service-card">
                <h3>Emergency Department</h3>
                <p>Available 24/7 for critical care and immediate response.</p>
              </div>

              {/* 🧬 Breast Cancer Center - clickable */}
              <div 
                className="service-card clickable-card" 
                onClick={handleOpenModel}
                style={{ cursor: "pointer", border: "2px solid #007bff" }}
              >
                <h3>Breast Cancer Center</h3>
                <p>Click to check breast cancer prediction.</p>
              </div>

              <div className="service-card">
                <h3>General Physician</h3>
                <p>Comprehensive care for all your health concerns.</p>
              </div>

              <div className="service-card">
                <h3>Neurology Department</h3>
                <p>Specialized in treating brain and nervous system disorders.</p>
              </div>

              <div className="service-card">
                <h3>Cardiology Department</h3>
                <p>Expert care for heart health and cardiovascular treatment.</p>
              </div>
            </div>
          </section>
        </>
      ) : (
        // Streamlit embedded inside React
        <div className="streamlit-container" style={{ height: "100vh", width: "100%" }}>
          <iframe
            src="http://localhost:8501"  // ✅ Your Streamlit model URL
            title="Breast Cancer Prediction"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              borderRadius: "10px",
            }}
          />
          <button 
            onClick={handleBack} 
            style={{
              position: "absolute",
              top: "20px",
              left: "20px",
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer"
            }}
          >
            ⬅️ Back to Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
