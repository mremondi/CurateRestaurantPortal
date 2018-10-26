import React, { Component } from 'react';
import navbar_icon from './navbar_icon.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <span className="imageHelper"></span><img src={navbar_icon} className="Navbar-logo" alt="logo" />
          <p>Curate</p>
        </a>
        <ul>
          <button className="signUp" onClick={function() { alert('click'); }}>
            <li> Sign Up</li>
          </button>
          <button className="login" onClick={function() { alert('click'); }}>
            <li> Log In</li>
          </button>
        </ul>
      </div>
    );
  }
}

export default Navbar;
