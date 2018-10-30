import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import './RestaurantHomePage.css'
import CreateRestaurant from '../CreateRestaurant/CreateRestaurant.js';

class RestaurantHomePage extends Component {

    render() {
        const { match } = this.props;
        return (

            <Router>
                <div className="RestaurantHomePage">
                    <Switch>
                        <Route exact={true} path={`${match.path}/create-restaurant`}
                         component = {CreateRestaurant} />
                        <Route exact={true} path={`${match.path}`} component={RestaurantsView} />
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
                <li> Item 1 </li>
                <li> Item 2 </li>
                <li> Item 3 </li>
            </div>
        );
    }
}

export default RestaurantHomePage;