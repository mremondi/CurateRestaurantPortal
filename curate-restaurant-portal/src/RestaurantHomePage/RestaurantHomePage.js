import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import './RestaurantHomePage.css'
import CreateRestaurant from '../CreateRestaurant/CreateRestaurant.js';

class RestaurantHomePage extends Component {
    render() {
        const { match } = this.props;
        console.log("RestaurantHomePage path: " + match.path);

        return (
            <Router>
                <div className="RestaurantHomePage">
                    <Switch>
                        <Route exact={true} path={`${match.path}`} component={RestaurantsView} />
                        <Route path={`${match.path}/create-restaurant`}
                         component = {CreateRestaurant} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

class RestaurantsView extends Component {
    state = {
        restaurants: [
            {name: 'Ristorante One', description: "A standard restaurant"},
            {name: 'Loco Taqueria', description: "Decent tacos"},
            {name: 'Bell in Hand Tavern', description: "Expensive beers"}
        ]
    }

    render() {
        const { match } = this.props;

        return (
            <div>
                <button className="createRestaurant">
                    <Link to={`${match.path}/create-restaurant`}>Create Restaurant</Link>
                </button>

                <h1> This is the restaurant home page </h1>

                {this.state.restaurants.map(restaurant => {
                    return (<li>{restaurant.name}: {restaurant.description}</li>)
                })}

            </div>
        );
    }
}

export default RestaurantHomePage;