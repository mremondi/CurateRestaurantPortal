import React, { Component } from 'react';
import './Navbar.css';

class SignedOutButtonRow extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: null,
      };
    }

  render() {
    return (
      <ul>
        <button className="signUp" onClick={this.props.signUpClick.bind(this)}>
          <li>Sign Up</li>
        </button>
        <button className="login" onClick={this.props.loginClick.bind(this)}>
          <li> Log In</li>
        </button>
      </ul>
    );
  }
}

export default SignedOutButtonRow;
