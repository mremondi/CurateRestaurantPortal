import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar.js';
import RestaurantHomePage from "./RestaurantHomePage/RestaurantHomePage.js"
//Import Apollo
import { Query } from "react-apollo";
import gql from "graphql-tag";
//Import React Router
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: [],
      loggedIn: false,
    };
  }

  componentDidMount(){
    this.props.client.query({
      query: gql`
      {
        items(name: "bacon", userDistance:{latitude:42.444862, longitude:-71.147893}){
          id
          name
        }
      }
    `}).then(response => console.log(response.data))
  };

  handleRestaurantLogin = () => {
    this.setState(loginRestaurant);
    console.log("Logged in?" + this.state.loggedIn);
  }

  handleRestaurantLogout = () => {
    this.setState(logoutRestaurant);
  }

  render() {
    const restaurants = this.state.restaurants;
    console.log(restaurants);
    const user = {name: "Mike Remondi"};
    return (
      <Router>
        <div>
        <Navbar user={user}/>
          <div className="App">
            <div>
              {restaurants.map(restaurant =>
                <p key={restaurant.userId}>{restaurant.userId}</p>
              )}

              <div className="container">
                {!this.state.loggedIn && 
                  <button className="login-button" onClick={this.handleRestaurantLogin}>
                    <Link to="/myrestaurants">Login to my restaurant</Link>
                  </button>
                }

                { this.state.loggedIn &&
                  <div> 
                    <h2 className="temp-loggedIn"> You are now logged in </h2>
                    <button className="logout-button" 
                            onClick={this.handleRestaurantLogout}>
                            <Link to="/">Logout</Link>
                    </button>
                  </div>
                }

              </div>
            </div>

          <Route path="/myrestaurants" exact={true} component={RestaurantHomePage} />
          <Route path="/" exact={true} component={Main} />
                
          </div>
        </div>
      </Router>
    );
  }
}

//Declare state change logic outside component.
//See functionalSetState: https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b
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

export default App;
