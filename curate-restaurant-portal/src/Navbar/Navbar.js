import React, { Component } from 'react';
import navbar_icon from './navbar_icon.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <a href="/" rel="noopener noreferrer">
          <span className="imageHelper"></span><img src={navbar_icon} className="Navbar-logo" alt="logo" />
          <p>Curate</p>
        </a>
        <ul>
          <button className="signUp" onClick={this.handleSignUpClick.bind(this)}>
            <li> Sign Up</li>
          </button>
          <button className="login" onClick={this.handleLogInClick.bind(this)}>
            <li> Log In</li>
          </button>
        </ul>
      </div>
    );
  }

  handleLogInClick = () => {
    alert('click');
  }

  handleSignUpClick = () => {
    alert('click');
  }
}

export default Navbar;
