import React from 'react'
import './Login.css'
import {login} from "./api";
export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            errormessage: ''
        };
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.checkLogIn = this.checkLogIn.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    handleName(event){
        this.setState({userName: event.target.value})
    }
    handlePassword(event){
        this.setState({passWord: event.target.value});
    }
    checkLogIn(){
        const name = this.state.userName;
        const password = this.state.passWord;
        login({
            'username': name,
            'password': password
        }).then(res => this.handleResponse(res))
    }

    goToMainPage(){
        this.props.history.push("/app")
    }
    showError(){
        this.setState({errormessage: "Usuario o contraseña incorrecta"})
    }
    handleResponse(res){
        if(res){
            this.goToMainPage()
        }else{
            this.showError()
        }
    }
    render(){
            return(
                <div className="Login-Container">
                    <div className="Welcome-Container">
                        Welcome to Books 9 3-4, Please log in!
                    </div>
                    <div className="UserName-Container">
                        User name:
                    </div>
                    <div className="Flex-container">
                        <input className="UserNameText-Container" type="text" placeholder="Your user name" onChange={this.handleName}/>
                    </div>
                    <div className="Password-container">
                        Password:
                    </div>
                    <div >
                        <input type="text" className="UserNameText-Container" placeholder="Your password" onChange={this.handlePassword}/>
                    </div>
                    <div className="Button-Container">
                        <div><button type="button" className="LogInButton" onClick={this.checkLogIn}>
                            Log in!
                        </button>
                        </div>
                        <div>
                            <button type = "button" className="registerButton" onClick={this.props.changeRegister}>
                                Don't have an account? Register here.
                            </button>
                        </div>
                    </div>
                    <div className="Error-Container">
                        {this.state.errormessage}
                    </div>
                </div>
            )
    }

}