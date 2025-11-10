import React from 'react';
import './ModelsSection.css';

const ModelsSection = () => {
  const models = [
    {
      id: 1,
      title: "Breast Cancer Prediction",
      description: "Predict breast cancer risk using advanced machine learning algorithms and medical imaging data analysis.",
      image: "/api/placeholder/300/200",
      color: "#ff6b6b",
      url: "http://localhost:8501" // 🔗 your Streamlit app URL
    },
    {
      id: 2,
      title: "Diabetes Detection",
      description: "Assess diabetes probability through key health indicators including glucose levels, BMI, and genetic factors.",
      image: "/api/placeholder/300/200",
      color: "#4ecdc4"
    },
    {
      id: 3,
      title: "Heart Disease Detection",
      description: "Evaluate cardiovascular health using comprehensive parameters and predictive analytics.",
      image: "/api/placeholder/300/200",
      color: "#45b7d1"
    },
    {
      id: 4,
      title: "Insurance Rate Prediction",
      description: "AI-powered insurance cost estimation based on health metrics and risk assessment.",
      image: "/api/placeholder/300/200",
      color: "#96ceb4"
    },
    {
      id: 5,
      title: "Kidney Problem Detection",
      description: "Early detection of renal issues through blood tests and symptom analysis.",
      image: "/api/placeholder/300/200",
      color: "#feca57"
    },
    {
      id: 6,
      title: "Parkinson's Disease Detection",
      description: "Neurological disorder screening using voice patterns and movement analysis.",
      image: "/api/placeholder/300/200",
      color: "#ff9ff3"
    }
  ];

  const handleTryNow = (model) => {
    if (model.url) {
      window.open(model.url, "_blank"); // Opens in new tab
    } else {
      alert(`${model.title} model is coming soon!`);
    }
  };

  return (
    <section id="models" className="models-section">
      <div className="container">
        <div className="section-header">
          <h2>AI Health Prediction Models</h2>
          <p>Choose from our comprehensive suite of diagnostic tools</p>
        </div>
        
        <div className="models-grid">
          {models.map((model) => (
            <div key={model.id} className="model-card">
              <div 
                className="model-image" 
                style={{ backgroundColor: model.color }}
              >
                <div className="image-placeholder">
                  {model.title.split(' ')[0]}
                </div>
              </div>
              <div className="model-content">
                <h3>{model.title}</h3>
                <p>{model.description}</p>
                <button 
                  className="predict-btn"
                  onClick={() => handleTryNow(model)}
                >
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModelsSection;
