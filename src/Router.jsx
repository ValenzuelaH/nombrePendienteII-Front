
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/about_us" component={App} />
            <Route exact path="/contact" component={App} />
            <Route exact path="/user" component={App} />
          </Switch>
      </BrowserRouter>
    );
  }
}