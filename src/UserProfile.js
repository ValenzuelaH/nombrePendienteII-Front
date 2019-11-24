import React from "react";
import './UserProfile.css';
import {buscarUsuario} from "./api";
import RedirectIfNotLogged from './components/RedirectIfNotLogged';

export default class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: '',
            wishlist: [],
            birthday_date: '',
            email: ''
        }
        this.logOut = this.logOut.bind(this);
        this.handleRes = this.handleRes.bind(this);
    }
    logOut(){
        localStorage.clear();
        this.props.history.push('/')
    }

    componentDidMount() {
        const user = localStorage.getItem('user');
        buscarUsuario({
            username: user
        }).then(res => this.handleRes(res))
    }

    handleRes(userObject){
        this.setState({
            userName: userObject.userName,
            wishlist: userObject.wishlist,
            birthday_date: userObject.birthday_date,
            email: userObject.email
        })
        console.log(userObject)
    }
    render() {

        const booksInWishlist = this.state.wishlist.map((book, index) => {
            return(
                <div> {book.name}</div>
            )
        });
        return(
            <div className="user-container">
            <RedirectIfNotLogged></RedirectIfNotLogged>
                <div className="user-name">
                    {this.state.userName}
                </div>
                <div className="info-container">
                    <div> cumpleaños: {this.state.birthday_date} </div>
                    <div> email: {this.state.email} </div>
                    <div> {booksInWishlist}</div>
                    <div>
                        <button className="button" onClick={this.logOut}> log out </button>
                    </div>
                </div>
            </div>
        )
    }
}