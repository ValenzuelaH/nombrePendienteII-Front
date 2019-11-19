
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Prueba from './Prueba';
import Content from './Content';
import AboutUs from './AboutUs';
import SwitcherLogInRegister from "./SwitcherLogInRegister";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/content" component={Content} />
            <Route exact path="/app" component={App} />
            <Route exact path="/about_us" component={AboutUs} />
            <Route exact path="/contact" component={Prueba} />
            <Route exact path="/user" component={Prueba} />
            <Route exact path="/main_page" componenet = {App} />
            <Route exact path="/" component={App} />
            {/* <Route exact path="/" render={ props => <SwitcherLogInRegister {...props} /> } /> */}
          </Switch>
      </BrowserRouter>
    );
  }
}
