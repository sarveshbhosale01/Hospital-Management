import React, { useState } from "react";
import "./login.css";
import { FaEnvelope, FaFacebookF, FaGoogle, FaApple, FaLock } from "react-icons/fa";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);

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
          <form className="signup-form">
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

            {/* Confirm Password (Only for Signup) */}
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

          {/* Divider */}
          <div className="divider">
            {isSignup ? "or sign up with" : "or sign in with"}
          </div>

          {/* Social Buttons */}
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

          {/* Toggle between Sign In & Sign Up */}
          <p className="signin-text">
            {isSignup ? (
              <>
                Have an account?{" "}
                <span
                  className="link-text"
                  onClick={() => setIsSignup(false)}
                >
                  Sign In
                </span>
              </>
            ) : (
              <>
                Don’t have an account?{" "}
                <span
                  className="link-text"
                  onClick={() => setIsSignup(true)}
                >
                  Sign Up
                </span>
              </>
            )}
          </p>
        </div>
      </div>

      {/* Right Section - Background */}
      <div className="signup-right">
        <img
          src="src/assets/hospital management.png"
          alt="Background"
          className="signup-bg"
        />
      </div>
    </div>
  );
};

export default Login;
