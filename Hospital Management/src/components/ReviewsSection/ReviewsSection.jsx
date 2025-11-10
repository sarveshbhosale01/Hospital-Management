import React, { useState, useEffect } from 'react';
import './ReviewsSection.css';

const ReviewsSection = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      role: "Chief Medical Officer",
      photo: "/api/placeholder/80/80",
      rating: 5,
      text: "This platform has revolutionized how we approach diagnostics. The AI models are incredibly accurate and save us valuable time.",
      hospital: "City General Hospital"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Patient",
      photo: "/api/placeholder/80/80",
      rating: 5,
      text: "As someone with a family history of diabetes, this tool gave me peace of mind with its quick and reliable assessment.",
      hospital: "Regular User"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      role: "Cardiologist",
      photo: "/api/placeholder/80/80",
      rating: 4,
      text: "The heart disease detection model has become an essential tool in our preliminary screening process. Highly recommended!",
      hospital: "Heart Care Center"
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Insurance Analyst",
      photo: "/api/placeholder/80/80",
      rating: 5,
      text: "The insurance prediction feature has streamlined our risk assessment process significantly. Great accuracy and user interface.",
      hospital: "HealthInsure Corp"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="reviews-section">
      <div className="container">
        <div className="section-header">
          <h2>What Our Users Say</h2>
          <p>Trusted by medical professionals and patients worldwide</p>
        </div>
        
        <div className="reviews-carousel">
          <button className="carousel-btn prev" onClick={prevReview}>
            ‹
          </button>
          
          <div className="review-container">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`review-card ${index === currentReview ? 'active' : ''}`}
              >
                <div className="reviewer-info">
                  <div className="reviewer-photo">
                    <div className="photo-placeholder">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <div className="reviewer-details">
                    <h4>{review.name}</h4>
                    <p>{review.role}</p>
                    <span className="hospital">{review.hospital}</span>
                  </div>
                </div>
                
                <div className="review-rating">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`star ${i < review.rating ? 'filled' : ''}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                
                <p className="review-text">"{review.text}"</p>
              </div>
            ))}
          </div>
          
          <button className="carousel-btn next" onClick={nextReview}>
            ›
          </button>
        </div>
        
        <div className="review-indicators">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentReview ? 'active' : ''}`}
              onClick={() => setCurrentReview(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;