import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      restaurants: []
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({restaurants: [json]});
      })
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
