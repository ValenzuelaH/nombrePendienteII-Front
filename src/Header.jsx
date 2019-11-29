import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import './css/Header.css';
import logo from './images/logoAzul2.png';

class Header extends React.Component{
  constructor(props) {
		super(props);
		this.state = {
			expanded: false,
			value: ''
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }
	
	expand() {
		this.setState({ expanded: true });
	}
	
	collapse() {
		this.setState({ expanded: false });
	}
	
	handleItemClick(e) {
		this.setState({
			expanded: false,
			value: e.target.innerText
    });
	}
	
	handleTriggerClick() {
		this.setState({ expanded: !this.state.expanded });
  }
  
  render(){
		let dropdown = undefined;
		if (this.state.expanded) {
			dropdown = (
				<div className="content">
          {
            // this.props.options.map(item => {
            // 	return <div onClick={(e) => { this.handleItemClick(e); }} className="item">{item.name}</div>;
            // })
          }
          <a href="/" className="item">
            <div className="item-wrapper" onMouseDown={(e) => { e.preventDefault(); localStorage.clear();}}>
              Desloguear
            </div>
          </a>
          <hr className="noMargin"></hr>
          <a href="/user" className="item">
            <div className="item-wrapper" onMouseDown={(e) => { e.preventDefault(); }}>
              Mi Perfil
            </div>
          </a>
				</div>
			);
    }

    return(
      <React.Fragment>
      <header>
          <div id="nav-icon1" className={`dropdown ${this.state.expanded ? 'open' : ''}`}
            tabIndex="0"
            onBlur={() => { this.collapse(); }}
            onClick={() => {this.state.expanded ? this.collapse() : this.expand()}}
            >
            <span></span>
            <span></span>
            <span></span>
            <div className="trigger" onClick={() => { this.handleTriggerClick(); }}>
            </div>
            {dropdown}
          </div>
          <div className="logo">
          <a href="/app">
              
              <img src={logo} alt={this.props.title} title={this.props.title}></img>

          </a>
          </div>
      </header>
      </React.Fragment>
    );
  }
}

export default Header;