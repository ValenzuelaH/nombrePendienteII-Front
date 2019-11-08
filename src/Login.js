import React from 'react'
import './Login.css'

export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: ''
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
                    <input className="UserNameText-Container" type="text" placeholder="Your user name"/>
                </div>
                    <div className="Password-container">
                        Password:
                    </div>
                <div className="Flex-container">
                    <input type="text" className="UserNameText-Container" placeholder="Your password"/>
                </div>
                <div className="Button-Container">
                    <div><button type="button" className="LogInButton">
                        Log in!
                    </button>
                    </div>
                    <div>
                        <button type = "button" className="registerButton">
                            Don't have an account? Register here.
                        </button>
                    </div>

                </div>
            </div>
        )
    }

}