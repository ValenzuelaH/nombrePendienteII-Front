import React from 'react';
import { Link } from 'react-router-dom';
import '../navigationFachero.css';

export default class NavBarItem extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            user: ''
        }
        this.state.user = this.props.user;
    }

    render(){
        return(
            <li className="nav-item">
                <Link id="white" className={this.props.class}
                //"nav-link" 
                to={this.props.route}>
                    { this.props.name }
                </Link>
            </li>);
    }
}