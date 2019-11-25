import React from "react";
import './UserProfile.css';
import {buscarUsuario} from "./api";

export default class UserProfile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            birthday: '',
            saldo: '',
            wishlist: []
        }
        this.logOut = this.logOut.bind(this);
        this.handleRes = this.handleRes.bind(this);
        this.agregarSaldo = this.agregarSaldo.bind(this);
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
            username: userObject.userName,
            email: userObject.email,
            birthday: userObject.birthday_date,
            wishlist: userObject.wishlist,
            saldo: userObject.saldo
        });
    }
    agregarSaldo(){
        this.props.history.push('/agregarSaldo')
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
                    {this.state.username}
                </div>
                <div className="info-container">
                    <div> {this.state.birthdate} </div>
                    <div> email: {this.state.email} </div>
                    <div> saldo: {this.state.saldo} </div>
                    <div>WishList:</div>
                    <div> {booksInWishlist}</div>
                </div>
                    <div>
                        <button className="button" onClick={this.logOut}> log out </button>
                        <button onClick={this.agregarSaldo}> Agregar saldo </button>
                    </div>
                </div>
        )
    }
}