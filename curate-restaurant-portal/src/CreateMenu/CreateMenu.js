import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

import './CreateMenu.css';

class CreateMenu extends Component {
    render() {
        const { match } = this.props;
        return (
            <Router>
                <div className="CreateMenu">
                    <h1>This is the create menu screen!</h1>
                </div>
            </Router>
        );
    }
}

export default CreateMenu;