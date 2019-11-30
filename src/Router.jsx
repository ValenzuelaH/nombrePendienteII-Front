
import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Content from './Content';
import AboutUs from './AboutUs';
import SwitcherLogInRegister from "./SwitcherLogInRegister";
import UserProfile from "./UserProfile"
import Contact from './Contact';
import AgregarSaldo from "./AgregarSaldo";

export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/content" component={Content} />
            <Route exact path="/app" component={App} />
            <Route exact path="/about_us" component={AboutUs} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/user" component={UserProfile} />
            <Route exact path="/main_page" component = {App} />
            <Route exact path="/agregarSaldo" component = {AgregarSaldo} />
            <Route exact path="/" render={ props => <SwitcherLogInRegister {...props} /> } />
          </Switch>
      </BrowserRouter>
    );
  }
}
