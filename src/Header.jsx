import React from 'react';
import './css/Header.css';
import logo from './images/logo2.png';

class Header extends React.Component{
   render(){
      return(
        <React.Fragment>
        <a href="/">
        <header>
            <div className="logo">
                
                <img src={logo} alt={this.props.title} title={this.props.title}></img>

            </div>
        </header>
        </a>
        </React.Fragment>
      );
    }
}

export default Header;