import React from 'react'
import './Register.css'
import {Fragment} from 'react'
import {register} from './api'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            birthdate: '',
            password: '',
            errormessage: '',
            passwordError: '',
            emailError: '',
            nameError: ''
        }
        this.sendForm = this.sendForm.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setName = this.setName.bind(this);
        this.setpassword = this.setpassword.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
        this.validatePassword = this.validatePassword.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateName = this.validateName.bind(this);
    }

    sendForm(){
        if (this.state.passwordError || this.state.emailError || this.state.nameError) {
            return;
        }

        if (!this.state.name || !this.state.email || ! this.state.birthdate || ! this.state.password) {
            this.setState({errormessage: "Complete todos los campos por favor."});
            return;
        }

        const email = this.state.email;
        const name = this.state.name;
        const birth = this.state.birthdate;
        const password = this.state.password;

        register({
            "name": name,
            "email": email,
            "birth": birth,
            "password": password
        }).then(res => this.handleResponse(res))
    }

    handleResponse(response){
        localStorage.setItem('user', response.userName);
        this.props.history.push("/app")
        //this.setState({errormessage: "Error al registrar, llene el formulario de nuevo porfavor"})

    }
    setName(event){
        if (!event.target.value.includes('@')) {
            this.setState({nameError: ""});
        }

        this.setState({name: event.target.value})

        if (this.state.email && this.state.birthdate && this.state.password) {
            this.setState({errormessage: ""});
        }
    }
    setpassword(event){
        if (event.target.value.length >= 4){
            this.setState({passwordError: ""})
        };

        this.setState({password: event.target.value})

        if (this.state.name && this.state.email && this.state.birthdate) {
            this.setState({errormessage: ""});
        }
    }
    setDate(event){
        this.setState({birthdate: event.target.value})

        if (this.state.name && this.state.email && this.state.password) {
            this.setState({errormessage: ""});
        }
    }
    setEmail(event){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (event.target.value.match(mailformat)) {
            this.setState({emailError: ""})
        }

        this.setState({email: event.target.value})

        if (this.state.name && this.state.birthdate && this.state.password) {
            this.setState({errormessage: ""});
        }
    }

    validatePassword(event){
        if (event.target.value.length < 4) {
            this.setState({passwordError: "Password demasiado corto, minimo 4 caracteres."})
        } else {
            this.setState({passwordError: ""})
        }
    }

    validateEmail(event){
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (event.target.value.match(mailformat)) {
            this.setState({emailError: ""})
        } else {
            this.setState({emailError: "Formato de email invalido."})
        }
    }

    validateName(event){
        if (event.target.value.includes('@')) {
            this.setState({nameError: "Ingrese un nombre, no un email. El caracter '@' no es admitido."});
        } else {
            this.setState({nameError: ""});
        }
    }

    render() {
        return(
            <Fragment>
            <div className="Register-Container">
                <div className="Info-Container">
                    Please, fill with your info!
                </div>
                <div className="a">
                    Name: 
                </div>
                <div>
                    <input type="text" className="Generic-Input" onChange={this.setName} onBlur={this.validateName}/>
                </div>
                <div>
                    Email:
                </div>
                <div>
                    <input type="text" className="Generic-Input" onChange={this.setEmail} onBlur={this.validateEmail}/>
                    <span className="Validation-Error">
                        {this.state.emailError}
                    </span>
                </div>
                <div>
                    Date of birth:
                </div>
                <div>
                    <input type="date" className="Generic-Input"
                           min="1920-01-01" max="2020-01-01" onChange={this.setDate}/>
                </div>
                <div>
                    Password:
                </div>
                <div>
                    <input type="password" className="Generic-Input" onChange={this.setpassword} onBlur={this.validatePassword}/>
                    <span className="Validation-Error">
                        {this.state.passwordError}
                    </span>
                </div>
                <div className="Button-container">
                    <div className="SendButton-container">
                        <button onClick={this.sendForm}>Send</button>
                    </div>
                    <div className="CancelButton-container">
                        <button onClick={this.props.changeLogin}>Cancel</button>
                    </div>
                </div>
                <div className="Error">
                    {this.state.errormessage}
                </div>
            </div>
            </Fragment>

        )
    }
}