import React, { Component } from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';

import './CreateMenu.css';
import CreateMenuItems from '../CreateMenuItems/CreateMenuItems.js'

class CreateMenu extends Component {
    render() {
        const { match } = this.props;
        console.log("CrMenu: " + match.url);
        return (
            <Router>
                <div>
                {/* render={(props) => <Dashboard {...props} isAuthed={true} />} */}
                    <Switch>
                            <Route exact={true} path={`${match.path}`} component={CreateMenuView} />
                            <Route path={`${match.path}/menu-items`} component={CreateMenuItems} />
                    </Switch>

                </div>
            </Router>
        );
    }
}

const CreateMenuView = (match) => {
    console.log("match crmenuview: " + match.url);
    return (
        <div>
            <h1>This is the create menu screen!</h1>
            <MenuNameInput />
            <CreateMenuButton match={match}/>
        </div>
    );
}

const MenuNameInput = () => {
    return(
        <form>
            <input type="text" placeholder="Menu Name" /> <br/>
        </form>
    );
}

const CreateMenuButton = (match) => {
    return(
        <Link to={`/myrestaurants/create-restaurant/create-menu/menu-items`}>
            <button>
                Create Menu
            </button>
        </Link>
    );
}

export default CreateMenu;