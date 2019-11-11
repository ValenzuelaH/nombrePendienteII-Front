import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import Navigation from './components/Navigation';
import Register from './Register'
import Router from './Router'; 
import * as serviceWorker from './serviceWorker';
import Login from "./Login";
import SwircherLogInRegister from "./SwitcherLogInRegister";
import Prueba from './Prueba';

ReactDOM.render(<SwircherLogInRegister />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
