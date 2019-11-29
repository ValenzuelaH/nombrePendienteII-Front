import React from 'react'
import './Login.css'
import {login} from "./api";
export default class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: '',
            errormessage: '',
            passwordError: '',
            nameError: '',
        };
        this.handleName = this.handleName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.checkLogIn = this.checkLogIn.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateName = this.validateName.bind(this);
    }

    componentDidMount() {
        localStorage.clear();
    }

    handleName(event){
        if (!event.target.value.includes('@')) {
            this.setState({nameError: ""});
        }

        this.setState({userName: event.target.value})

        if (this.state.passWord) {
            this.setState({errormessage: ""});
        }
    }
    handlePassword(event){
        if(event.target.value.length >= 4) {
            this.setState({passwordError: ""});
        }

        this.setState({passWord: event.target.value});

        

        if (this.state.userName) {
            this.setState({errormessage: ""});
        }
    }
    validatePassword(event){
        if (event.target.value.length < 4) {
            this.setState({passwordError: "Password demasiado corto, minimo 4 caracteres."});
        } else {
            this.setState({passwordError: ""});
        }
    }
    validateName(event){
        if (event.target.value.includes('@')) {
            this.setState({nameError: "Ingrese un nombre, no un email. El caracter '@' no es admitido."});
        } else {
            this.setState({nameError: ""});
        }
    }

    checkLogIn(){
        if (this.state.passwordError || this.state.nameError) {
            return;
        }

        if (!this.state.userName || !this.state.passWord) {
            this.setState({errormessage: "Complete todos los campos por favor."});
            return;
        }

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
            localStorage.setItem('user', this.state.userName);
            this.goToMainPage()
        }else{
            this.showError()
        }
    }
    render(){
            return(
                <div className="Login-Container">
                    <div className="Welcome-Container">
                        Welcome to Books 3/4
                    </div>
                    <div className="h2-info-container">
                        Please log in!
                    </div>
                    <div className="Flex-container">
                        <input className="UserNameText-Container" type="text" placeholder="Your user name" onChange={this.handleName} onBlur={this.validateName}/>
                        <span className="Validation-Error">
                            {this.state.nameError}
                        </span>
                    </div>
                    <div >
                        <input type="password" className="UserNameText-Container" placeholder="Your password" onChange={this.handlePassword} onBlur={this.validatePassword}/>
                        <span className="Validation-Error">
                            {this.state.passwordError}
                        </span>
                    </div>
                    <div className="Button-Container">
                        <div><button type="button" className="LogInButton" onClick={this.checkLogIn}>
                            Log in!
                        </button>
                        </div>
                        <div>
                            <button type = "button" className="registerButton" onClick={this.props.changeRegister}>
                                Register here
                            </button>
                        </div>
                    </div>
                    <div className="Error">
                        {this.state.errormessage}
                    </div>
                </div>
            )
    }

}