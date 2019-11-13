import React from 'react'
import './Register.css'
import {Fragment} from 'react'
import {register} from './api'

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            birthdate: '',
            password: '',
            errormessage: ''
        }
        this.sendForm = this.sendForm.bind(this);
        this.setDate = this.setDate.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setName = this.setName.bind(this);
        this.setpassword = this.setpassword.bind(this);
        this.handleResponse = this.handleResponse.bind(this);
    }

    sendForm(){
        const email = this.state.email;
        const name = this.state.name;
        const birth = this.state.birthdate;
        const password = this.state.password;
        register({
            "name": "a",
            "email": "alfredito_69@gmail",
            "birth": "2019-10-15",
            "password": "a"
        }).then(res => this.handleResponse(res))
    }

    handleResponse(response){
        console.log(typeof  response)
        console.log(response)
        if(response == 200){
            console.log("asd")
            console.log(this.props.history);
            this.props.history.pop()
        }else{
            this.setState({errormessage: "Error al registrar, llene el formulario de nuevo porfavor"})
        }
    }
    setName(event){
        this.setState({name: event.target.value})
    }
    setpassword(event){
        this.setState({password: event.target.value})
    }
    setDate(event){
        this.setState({birthdate: event.target.value})
    }
    setEmail(event){
        this.setState({email: event.target.value})
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
                    <input type="text" className="Generic-Input" onChange={this.setName}/>
                </div>
                <div>
                    Email:
                </div>
                <div>
                    <input type="text" className="Generic-Input" onChange={this.setEmail}/>
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
                    <input type="text" className="Generic-Input" onChange={this.setpassword}/>
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