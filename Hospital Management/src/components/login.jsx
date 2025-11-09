import React from "react";
import "./SignupPage.css";
import { FaEnvelope, FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="signup-container">
      <div className="signup-left">
        <div className="logo">📦 InsideBox</div>
        <div className="signup-content">
          <h4 className="journey-text">Start your journey</h4>
          <h2 className="signup-title">Sign Up to InsideBox</h2>

          <form className="signup-form">
            <label className="form-label">E-mail</label>
            <div className="input-box">
              <input type="email" placeholder="example@email.com" />
              <FaEnvelope className="icon" />
            </div>

            <label className="form-label">Password</label>
            <div className="input-box">
              <input type="password" placeholder="••••••••" />
              <span className="eye-icon">👁️</span>
            </div>

            <button className="signup-btn">Sign Up</button>
          </form>

          <div className="divider">or sign up with</div>

          <div className="social-login">
            <button className="social-btn fb">
              <FaFacebookF />
            </button>
            <button className="social-btn google">
              <FaGoogle />
            </button>
            <button className="social-btn apple">
              <FaApple />
            </button>
          </div>

          <p className="signin-text">
            Have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>

      <div className="signup-right">
        <img
          src="/assets/background.jpg"
          alt="Background"
          className="signup-bg"
        />
      </div>
    </div>
  );
};

export default SignupPage;
