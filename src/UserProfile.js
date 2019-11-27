import React from "react";
import './UserProfile.css';
import {buscarUsuario} from "./api";
import RedirectIfNotLogged from './components/RedirectIfNotLogged';

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
        localStorage.clear();
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
            <RedirectIfNotLogged></RedirectIfNotLogged>
                <div className="info-container">
                    <div className="titles-values">
                        <div className="child"> email</div>
                        <div className="child"> saldo</div>
                        <div className="child">WishList</div>
                        <div className="child"> Carrito</div>
                        <div className="child">Coste total </div>
                    </div>
                    <div className="titles-values">
                        <div className="child"> {this.state.email}</div>
                        <div className="child"> {this.state.saldo}</div>
                        <div className="child"> {booksInWishlist.length} </div>
                        <div className="child"> {carrito.length} </div>
                        <div className="child"> ${this.costeCarrito()} </div>
                    </div>
                    <div> {this.state.tienecompra && "No tenes libros en tu carrito"}</div>
                    <div> {this.state.teAlcanzaLaPlata && "No tienes la plata necesaria, haz un recargo de saldo"}</div>
                </div>
                    <div>
                        <button className="button-saldo" onClick={this.agregarSaldo}> Agregar saldo </button>
                        <button className="button-carro" onClick ={this.comprarCarrito}>Comprar todo el carrito</button>
                        <button className="button-log" onClick={this.logOut}> log out </button>
                    </div>
                </div>
        )
    }
}