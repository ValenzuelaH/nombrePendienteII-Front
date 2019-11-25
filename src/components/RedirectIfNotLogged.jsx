import { Redirect } from 'react-router-dom';
import React, { Fragment } from 'react';

class RedirectIfNotLogged extends React.Component {
    constructor(props) {
        super(props);
        this.redirectIfNotLogged = this.redirectIfNotLogged.bind(this);
    }
    redirectIfNotLogged() {
        if (localStorage.getItem('user') === null) {
            return <Redirect to='/'></Redirect>
        }
    }
    
    render(){
        return(
            <Fragment>
                {this.redirectIfNotLogged()}
            </Fragment>
        )
    }
}

export default RedirectIfNotLogged;