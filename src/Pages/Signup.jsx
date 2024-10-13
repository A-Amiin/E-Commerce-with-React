import React from 'react';
import './AllCss/Signup.css';
import logo from '../Components/Assets/logo.png';

const Signup = () => {

  const navigate = () => {
    window.location.href = './Login';
  };

  return (
    <div className='signup'>
      <div className="signup-form">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h2>Sign Up</h2>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" placeholder='Type Your Full Name' required />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder='Type Your Email Account' required />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder='Type A Strong Password' required />
          </div>
          <div className="form-group">
            <label for="confirm-password">Confirm Password</label>
            <input type="password" id="confirm-password" placeholder='Rewrite Your Password' required />
          </div>
          <div className="btn">
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <p>Already have an account? <a href='#' onClick={navigate}>Login</a></p>
      </div>
    </div>
  )
}

export default Signup
