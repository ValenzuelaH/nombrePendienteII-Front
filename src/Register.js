import React from 'react'
import './Register.css'
import {Fragment} from 'react'

export default class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {

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
                    <input type="text" className="Generic-Input"/>
                </div>
                <div>
                    Email:
                </div>
                <div>
                    <input type="text" className="Generic-Input"/>
                </div>
                <div>
                    Date of birth:
                </div>
                <div>
                    <input type="date" className="Generic-Input"
                           min="1920-01-01" max="2020-01-01" />
                </div>
                <div>
                    Password:
                </div>
                <div>
                    <input type="text" className="Generic-Input"/>
                </div>
                <div className="Button-container">
                    <div className="SendButton-container">
                        <button>Send</button>
                    </div>
                    <div className="CancelButton-container">
                        <button>Cancel</button>
                    </div>
                </div>
            </div>
            </Fragment>

        )
    }
}