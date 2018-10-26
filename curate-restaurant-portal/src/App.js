import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar.js';
import { Query } from "react-apollo";
import gql from "graphql-tag";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
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
    const user = {name: "Mike Remondi"};
    return (
      <div>
        <Navbar user={user}/>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <div>
              {restaurants.map(restaurant =>
                <p key={restaurant.userId}>{restaurant.userId}</p>
              )}
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
