import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ApolloClient from "apollo-boost";
import { BrowserRouter } from 'react-router-dom'

const client = new ApolloClient({
  uri: "http://curate-staging.appspot.com/graphql"
});

ReactDOM.render((
  <BrowserRouter>
    <App client={client}/>
  </BrowserRouter>)
  ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
