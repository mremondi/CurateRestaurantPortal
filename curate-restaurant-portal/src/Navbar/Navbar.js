import React, { Component } from 'react';
import navbar_icon from './navbar_icon.png';
import './Navbar.css';
import RestaurantHomePage from "../RestaurantHomePage/RestaurantHomePage.js"
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Navbar extends Component {
  constructor(props) {
      super(props);
      this.state = {
        user: null,
        loggedIn: false
      };
    }

  
  handleRestaurantLogin = () => {
    this.setState(loginRestaurant);
    console.log("Logged in?" + this.state.loggedIn);
  }

  handleRestaurantLogout = () => {
    this.setState(logoutRestaurant);
  }

  render() {
    return (
      <Router>
        <div className="Navbar">
          <div className="container">
            {!this.state.loggedIn && 
              <button className="login" onClick={this.handleRestaurantLogin}>
                <Link to="/myrestaurants">Login to my restaurant</Link>
              </button>
            }

            { this.state.loggedIn &&
              <div> 
                <button className="login" 
                        onClick={this.handleRestaurantLogout}>
                        <Link to="/">Logout</Link>
                </button>
              </div>
            }

          </div>

          <Route path="/myrestaurants" exact={true} component={RestaurantHomePage} />
          <Route path="/" exact={true} component={Main} />

        </div>
      </Router>
    );
  }
}

const loginRestaurant = (state, props) => {
  console.log("loginRestaurant function...");
  return {
    loggedIn: true
  }
}

const logoutRestaurant = (state) => {
  return {
    loggedIn: false
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
