import React from "react";
import './UserProfile.css';
import {buscarUsuario} from "./api";

export default class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: null,
            wishlist: []
        }
        this.logOut = this.logOut.bind(this);
        this.handleRes = this.handleRes.bind(this);
    }
    logOut(){
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
            user: userObject,
            wishlist: userObject.wishlist
        })

        console.log(this.state.user.wishlist)
    }
    render() {

        const booksInWishlist = this.state.wishlist.map((book, index) => {
            return(
                <div> {book.name}</div>
            )
        });
        return(
            <div className="user-container">
                <div className="user-name">
                    Gonzalo
                </div>
                <div className="info-container">
                    <div> cumpleaños: 12-12-12 </div>
                    <div> email: gonzaloguasch@hotmail.com </div>
                    <div> {booksInWishlist}</div>
                    <div>
                        <button className="button" onClick={this.logOut}> log out </button>
                    </div>
                </div>
            </div>
        )
    }
}