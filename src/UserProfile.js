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
            wishlist: [],
            carrito: [],
            tienecompra: false,
            teAlcanzaLaPlata: false
        }
        this.logOut = this.logOut.bind(this);
        this.handleRes = this.handleRes.bind(this);
        this.agregarSaldo = this.agregarSaldo.bind(this);
        this.costeCarrito = this.costeCarrito.bind(this);
        this.comprarCarrito = this.comprarCarrito.bind(this);
    }
    logOut(){
        this.props.history.push('/')
    }

    componentDidMount() {
        const user = localStorage.getItem('user');
        console.log("skere")
        buscarUsuario({
            username: user
        }).then(res => this.handleRes(res))
    }

    handleRes(userObject){
        console.log(userObject)
        this.setState({
            username: userObject.userName,
            email: userObject.email,
            birthday: userObject.birthday_date,
            wishlist: userObject.wishlist,
            carrito: userObject.carrito,
            saldo: userObject.saldo
        });
    }
    comprarCarrito(){
        const coste_de_carrito = this.costeCarrito()
        if(coste_de_carrito === 0){
            this.setState({tienecompra: true})
            return;
        }
        if(coste_de_carrito > this.state.saldo){
            this.setState({teAlcanzaLaPlata: true})
            return;
        }
    }
    agregarSaldo(){
        this.props.history.push('/agregarSaldo')
    }
    costeCarrito(){
        let costetotal = 0;
        this.state.carrito.map((book, index) => {
            costetotal += book.priceInPesos
        });
        return costetotal;
    }
    render() {

        const booksInWishlist = this.state.wishlist.map((book, index) => {
            return(
                <div> {book.name}</div>
             )
        });

        const carrito = this.state.carrito.map((book, index) => {
             return (
                <div>{book.name}</div>
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
                    <div>Carrito: {carrito}</div>
                    <div> Coste total carrito: ${this.costeCarrito()}</div>
                    <div> {this.state.tienecompra && "No tenes libros en tu carrito"}</div>
                    <div> {this.state.teAlcanzaLaPlata && "No tienes la plata necesaria, haz un recargo de saldo"}</div>
                </div>
                    <div>
                        <button className="button" onClick={this.logOut}> log out </button>
                        <button onClick={this.agregarSaldo}> Agregar saldo </button>
                        <button className="button" onClick ={this.comprarCarrito}>Comprar todo el carrito</button>                                                       
                    </div>
                </div>
        )
    }
}