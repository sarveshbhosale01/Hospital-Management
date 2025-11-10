import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  const kpis = [
    {
      title: "Breast Cancer Prediction",
      icon: "🎗️",
      description: "Early detection through advanced pattern recognition"
    },
    {
      title: "Diabetes Detection",
      icon: "🩸",
      description: "Predict diabetes risk using comprehensive health metrics"
    },
    {
      title: "Heart Disease Detection",
      icon: "❤️",
      description: "Cardiovascular health assessment with high accuracy"
    },
    {
      title: "Insurance Rate Prediction",
      icon: "📊",
      description: "AI-powered insurance cost estimation"
    },
    {
      title: "Kidney Problem Detection",
      icon: "🧬",
      description: "Renal health analysis and risk assessment"
    },
    {
      title: "Parkinson's Detection",
      icon: "🧠",
      description: "Early neurological disorder screening"
    }
  ];

  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">How It Works</span>
          <h2>Transforming Healthcare Through Artificial Intelligence</h2>
          <p className="lead">
            Our platform integrates cutting-edge AI technology to revolutionize medical diagnostics
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-text">
            <p className="main-description">
              Our Hospital Management Web App integrates multiple AI-driven healthcare models in one platform.
              From disease detection to insurance prediction, the system allows patients, doctors, and administrators 
              to access predictive insights instantly. Simply input your health parameters, and our pre-trained 
              machine learning models analyze your data to provide accurate results along with visualizations.
              This platform streamlines medical assessments, improves diagnostic accuracy, and saves valuable 
              time — all within a single dashboard.
            </p>
          </div>
          
          <div className="kpi-grid">
            {kpis.map((kpi, index) => (
              <div key={index} className="kpi-card">
                <div className="kpi-icon">{kpi.icon}</div>
                <h3>{kpi.title}</h3>
                <p>{kpi.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;