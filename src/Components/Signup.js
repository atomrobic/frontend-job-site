import React, { useState } from 'react';
import './signup.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    firstname: '',
    college: '',
    state: '',
    graduation: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
  };

  return (
    <div className="signup-background">
      <div className="signup-card">
        <h2>Signup Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <div className="name-fields">
            <div className="input-group">
              <label htmlFor="firstname"></label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter your first name"
                value={formData.firstname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
          </div>
               {/* Mobile Number and Country Code */}
          <label htmlFor="mobile"></label>
          <div className="mobile-input-group">
            <select
              id="countryCode"
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className="country-code-select"
            >
              <option value="+91">+91 (India)</option>
              {/* Add more country codes as needed */}
              <option value="+1">+1 (USA)</option>
              <option value="+44">+44 (UK)</option>
            </select>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter your mobile number"
              value={formData.mobile}
              onChange={handleChange}
              pattern="^[0-9]{10}$" // Simple validation for a 10-digit number
              required
            />
          </div>

          {/* College Dropdown styled like input */}
          <label htmlFor="college"></label>
          <select
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            required
            className="input-dropdown"
          >
            <option value="">Select your college</option>
            <option value="College A">College A</option>
            <option value="College B">College B</option>
            <option value="College C">College C</option>
          </select>

          {/* State Dropdown styled like input */}
          <label htmlFor="state"></label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="input-dropdown"
          >
            <option value="">Select your state</option>
            <option value="California">California</option>
            <option value="Texas">Texas</option>
            <option value="Florida">Florida</option>
            <option value="New York">New York</option>
          </select>

          {/* Graduation Year Dropdown styled like input */}
          <label htmlFor="graduation"></label>
          <select
            id="graduation"
            name="graduation"
            value={formData.graduation}
            onChange={handleChange}
            required
            className="input-dropdown"
          ><option value="">Select year of graduation</option>
          <option value="California">7676</option>
          <option value="Texas">2077</option>
          <option value="Florida">777</option>
          <option value="New York">000</option>
           
          </select>

          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
