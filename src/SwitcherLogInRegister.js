import React from 'react'
import Login from "./Login";
import Register from "./Register";

export default class SwircherLogInRegister extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
            showRegister: false
        }
        this.changeRegister = this.changeRegister.bind(this);
        this.changeLogIn = this.changeLogIn.bind(this);
    }
    changeLogIn(){
        this.setState({
            showLogin: true,
            showRegister: false
        })
    }
    changeRegister(){
        this.setState({
            showLogin: false,
            showRegister: true
        })
    }
    render() {
        return(
                <div>
                    {this.state.showLogin && <Login changeRegister = {this.changeRegister} />}
                    {this.state.showRegister && <Register changeLogin = {this.changeLogIn} />}
                </div>
        )
    }
}