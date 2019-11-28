import React from 'react'
import './navigationFachero.css'

export default class NavigationFachero extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }
        render() {
            return(
                <div className="navigation-container">
                    <ul>
                        <li id="white">En Stock: {this.props.books_length}</li>
                        <li><a className="home-container" href="/app">Home</a></li>
                        <li><a className="quien-container" href="/about_us">¿Quienes somos?</a></li>
                        <li><a className="contacto-conteiner" href="/contact">Contacto</a></li>
                        <li><a className="perfil-container" href="/user">perfil </a></li>

                    </ul>
                </div>
            )
        }

}