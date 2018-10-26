import React, { Component } from 'react';
import navbar_icon from './navbar_icon.png';
import AccountDropDown from './AccountDropDown';
import SignedOutButtonRow from './SignedOutButtonRow';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: null,
      };
    }

  render() {
    var buttonRow;
    if (this.props.user){
      buttonRow = <AccountDropDown user={this.props.user}/>
    } else {
      buttonRow = <SignedOutButtonRow loginClick={this.handleLogInClick} signUpClick={this.handleSignUpClick}/>
    }
    return (
      <div className="Navbar">
        <a href="/" rel="noopener noreferrer">
          <span className="imageHelper"></span><img src={navbar_icon} className="Navbar-logo" alt="logo" />
          <p>Curate</p>
        </a>
        {buttonRow}
      </div>
    );
  }

  handleLogInClick = () => {
    alert('click');
  }

  handleAccountClick = () => {
    alert('click');
  }

  handleSignUpClick = () => {
    alert('click');
  }
}

export default Navbar;
