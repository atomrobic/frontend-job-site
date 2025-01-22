import React from 'react';
import './Login.css'; // Create a CSS file for the styles provided

const Login = () => {
  return (
    <>
    <div class="blur-area"></div>

    <div className="login-background">
      <div className="login-card">
        <div className="logo">MyApp</div>
        <h2>Login to Your Account</h2>
        <form>
          <input
            type="text"
            className="login-input"
            placeholder="Enter your email"
            required
          />
        
          <button type="submit" className="login-button">
            Next
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Login;
