import React, { useState } from "react";
import "./login.css";
import {
  FaEnvelope,
  FaFacebookF,
  FaGoogle,
  FaApple,
  FaLock,
} from "react-icons/fa";
import hospitalImg from "../../assets/hospital management.png"; // ✅ Correct import

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form refresh
  };

  return (
    <div className="signup-container">
      {/* Left Section */}
      <div className="signup-left">
        <div className="logo">InsideBox</div>

        <div className="signup-content">
          <h4 className="journey-text">
            {isSignup ? "Start your journey" : "Welcome back"}
          </h4>

          <h2 className="signup-title">
            {isSignup ? "Sign Up to InsideBox" : "Sign In to InsideBox"}
          </h2>

          {/* Form */}
          <form className="signup-form" onSubmit={handleSubmit}>
            <label className="form-label">E-mail</label>
            <div className="input-box">
              <input type="email" placeholder="example@email.com" required />
              <FaEnvelope className="icon" />
            </div>

            <label className="form-label">Password</label>
            <div className="input-box">
              <input type="password" placeholder="••••••••" required />
              <FaLock className="icon" />
            </div>

            {isSignup && (
              <>
                <label className="form-label">Confirm Password</label>
                <div className="input-box">
                  <input type="password" placeholder="••••••••" required />
                  <FaLock className="icon" />
                </div>
              </>
            )}

            <button className="signup-btn" type="submit">
              {isSignup ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <div className="divider">
            {isSignup ? "or sign up with" : "or sign in with"}
          </div>

          <div className="social-login">
            <button className="social-btn fb" aria-label="Sign in with Facebook">
              <FaFacebookF />
            </button>
            <button className="social-btn google" aria-label="Sign in with Google">
              <FaGoogle />
            </button>
            <button className="social-btn apple" aria-label="Sign in with Apple">
              <FaApple />
            </button>
          </div>

          <p className="signin-text">
            {isSignup ? (
              <>
                Have an account?{" "}
                <span className="link-text" onClick={() => setIsSignup(false)}>
                  Sign In
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span className="link-text" onClick={() => setIsSignup(true)}>
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="signup-right">
        <img src={hospitalImg} alt="Hospital Background" className="signup-bg" />
      </div>
    </div>
  );
};

export default Login;
