import React, { Component } from 'react';
import navbar_icon from './navbar_icon.png';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <img src={navbar_icon} className="Navbar-logo" alt="logo" />
        <h1>Curate</h1>
      </div>
    );
  }
}

export default Navbar;
