import React from 'react'

import './AllCss/Login.css';
import logo from '../Components/Assets/logo.png';

const Login = () => {

  const navigate = () => {
    window.location.href = './signup';
  };

  return (
    <div className='login'>
      <div className="login-form">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h2>Log In</h2>
        <form>
          <div className="form-groupp">
            <input type="email" id="email" placeholder='Type Your Email Account' required />
          </div>
          <div className="form-groupp">
            <input type="password" id="password" placeholder='Type Your Password' required />
          </div>
          <div className="btn">
            <button type="submit">Login</button>
          </div>
        </form>
        <p>Create an account! <a href="#" onClick={navigate}>SignUP</a></p>
      </div>
    </div>
  )
}

export default Login
