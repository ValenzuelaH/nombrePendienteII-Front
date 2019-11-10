
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Prueba from './Prueba';
import Content from './Content';

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/content" component={Content} />
            <Route exact path="/about_us" component={Prueba} />
            <Route exact path="/contact" component={Prueba} />
            <Route exact path="/user" component={Prueba} />
            <Route exact path="/" component={App} />
          </Switch>
      </BrowserRouter>
    );
  }
}