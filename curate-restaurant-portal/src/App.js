import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar.js';
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

  render() {
    const restaurants = this.state.restaurants;
    console.log(restaurants);

    return (
      <div>
      <Navbar user={ "Mike Remondi" }/>
        <div className="App">
          <div>
            {restaurants.map(restaurant =>
              <p key={restaurant.userId}>{restaurant.userId}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

//Declare state change logic outside component.
//See functionalSetState: https://medium.freecodecamp.org/functional-setstate-is-the-future-of-react-374f30401b6b


export default App;
