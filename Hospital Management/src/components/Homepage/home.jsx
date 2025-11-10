import React from "react";
import "./home.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaPhone, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home-container">
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
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
          </p>
          <button className="appointment-btn">BOOK AN APPOINTMENT</button>
        </div>
        <div className="hero-right">
          <img src="src/assets/hospital management.png" alt="Doctor" />
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Healthcare Service</h2>
        <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        </p>

        <div className="services-grid">
          <div className="service-card">
            <h3>Emergency Department</h3>
            <p>If you use this site regularly and would like to...</p>
          </div>
          <div className="service-card">
            <h3>Pediatric Department</h3>
            <p>If you use this site regularly and would like to...</p>
          </div>
          <div className="service-card">
            <h3>General Physician</h3>
            <p>If you use this site regularly and would like to...</p>
          </div>
          <div className="service-card">
            <h3>Neurology Department</h3>
            <p>If you use this site regularly and would like to...</p>
          </div>
          <div className="service-card">
            <h3>Cardiology Department</h3>
            <p>If you use this site regularly and would like to...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
