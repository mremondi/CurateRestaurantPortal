import React, { Component } from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

import './CreateRestaurant.css';
import CreateMenu from '../CreateMenu/CreateMenu.js'

class CreateRestaurant extends Component {
    render() {
        const { match } = this.props;
        console.log('CreateRestaurant: ' + match.path);

        return (
            <Router>
                <div className="CreateRestaurant">                    
                    <Switch>
                        <Route exact={true} path={`${match.path}`} component={CreateRestaurantView} />
                        <Route path={`${match.path}/create-menu`} component={CreateMenu} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

class CreateRestaurantView extends Component {
    render() {
        const {match} = this.props;
        return (
            <div>
                <h1>This is the create restaurant page</h1>
                <button>
                        <Link to={`${match.url}/create-menu`}>Create Menu</Link>
                </button>
            </div>
        );
    }
}

export default CreateRestaurant;