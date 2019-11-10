import React from 'react';
import { Link } from 'react-router-dom';

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
                <Link className="nav-link" to={this.props.route}>
                    {this.props.name === "Usuario"? this.props.user : this.props.name }
                </Link>
            </li>);
    }
}