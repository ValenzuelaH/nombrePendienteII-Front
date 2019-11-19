import React from "react";
import './UserProfile.css';

export default class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
        this.logOut = this.logOut.bind(this);
    }
    logOut(){
        this.props.history.push('/')
    }
    render() {
        return(
            <div className="user-container">
                <div className="user-name">
                    Gonzalo
                </div>
                <div className="info-container">
                    <div> cumpleaños: 12-12-12 </div>
                    <div> email: gonzaloguasch@hotmail.com </div>
                    <div>
                        <button className="button" onClick={this.logOut}> log out </button>
                    </div>
                </div>
            </div>
        )
    }
}