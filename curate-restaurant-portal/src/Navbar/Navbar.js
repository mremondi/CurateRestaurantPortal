import React, { Component } from 'react';
import navbar_icon from './navbar_icon.png';
import './Navbar.css';
import RestaurantHomePage from "../RestaurantHomePage/RestaurantHomePage.js"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: props.name,
        loggedIn: false
      };
    }

  
  handleRestaurantLogin = () => {
    this.setState(loginRestaurant);
  }

  handleRestaurantLogout = () => {
    this.setState(logoutRestaurant);
  }

  render() {

    var loginLogoutButton = null;

    if (!this.state.loggedIn) {
      loginLogoutButton = (
        <button className="login" onClick={this.handleRestaurantLogin}>
          <Link to="/myrestaurants">Login to my restaurant</Link>
        </button>
      );
    } else {
      loginLogoutButton = (
        <button className="login" onClick={this.handleRestaurantLogout}>
          <Link to="/">{this.state.user}: Log Out</Link>
        </button>
      );
    }
  
    return (
      <Router>
        <div className="Navbar">
          <img alt="" src={navbar_icon}/>
          {loginLogoutButton}

          <Route path="/myrestaurants" component={RestaurantHomePage} />
          <Route exact={true} path="/" component={Main} />
        </div>
      </Router>
    );
  }
}

const loginRestaurant = (state, props) => {
  return {
    loggedIn: true,
    user: "Mike Remondi"
  }
}

const logoutRestaurant = (state) => {
  return {
    loggedIn: false,
    user: ""
  }
}

const Main = () => {
  return (
    <div className="landing-page">
      <h1>Landing Page</h1>
    </div>
  );
}

export default Navbar;
