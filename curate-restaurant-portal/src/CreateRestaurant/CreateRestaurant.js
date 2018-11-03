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

                <RestaurantFields />
                <Link to={`${match.url}/create-menu`}>
                    <button>
                        Create Restaurant
                    </button>
                </Link>

               
            </div>
        );
    }
}

const RestaurantFields = () => {
    return(
        <form>
            <input type="text" placeholder="Name" /> <br/>
            <input type="text" placeholder="Address" /> <br/>
            <input type="text" placeholder="Website URL" /> <br/>
            <input type="text" placeholder="Logo URL" /> <br/>
            <input type="text" placeholder="Zipcode" /> <br/>
        </form>
    );
}

export default CreateRestaurant;