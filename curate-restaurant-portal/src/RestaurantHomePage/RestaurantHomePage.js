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
    render() {
        const { match } = this.props;
        return (
            <div>
                <button className="createRestaurant">
                    <Link to={`${match.path}/create-restaurant`}>Create Restaurant</Link>
                </button>

                <h1> This is the restaurant home page </h1>
                <li> Restaurant 1 </li>
                <li> Restaurant 2 </li>
                <li> Restaurant 3 </li>
            </div>
        );
    }
}

export default RestaurantHomePage;