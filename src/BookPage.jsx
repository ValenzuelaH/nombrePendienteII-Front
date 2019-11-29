import React from 'react';
import './App.css';
import './BookPage.css'
import {agregarACarrito, findBookbyId, upvote} from "./api";
import {downvote} from "./api";
import {agregarADeseados } from "./api";
import ListOpinion from './components/ListOpinion';
import AuthorCarousel from './components/AuthorCarousel';


const genres = [{"k": "SCIFI" , "v": "Ciencia ficción"}, 
               {"k": "FANTASTIC", "v": "Fantástico/Épico"},
               {"k": "TERROR", "v": "Terror"},
               {"k": "PINKNOVEL", "v": "Novela rosa"},
               {"k": "THEATER", "v": "Teatro"},
               {"k": "DETECTIVESTORY", "v": "Novela negra/Policial"},
               {"k": "POETRY", "v": "Poesia"},
               {"k": "DRAMA", "v": "Drama"},
               {"k": "DYSTOPIAN", "v": "Distópico"},
               {"k": "ESSAY", "v": "Ensayo"},
               {"k": "STORY", "v": "Ficción"},
               {"k": "COMEDY", "v": "Comedia"}
                ]

class BookPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            votes: 0
        };

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
        this.addToWishList = this.addToWishList.bind(this);
        this.addToCarrito = this.addToCarrito.bind(this);
        this.updateVotes = this.updateVotes.bind(this);
    }
    upvote(){
        const idBook = this.props.book.id;
        upvote({id: idBook}).then(res => this.updateVotes(res))
    }
    downvote(){
        const idBook = this.props.book.id;
        downvote({id: idBook}).then(res => this.updateVotes(res))
    }
    updateVotes(objectBook){
        this.setState({
            votes: objectBook.votes
        })
    }
    addToCarrito(){
        const username = localStorage.getItem('user');
        const bookname = this.props.book.name;
        agregarACarrito({
            username: username,
            bookName: bookname
        }).then(res => console.log(res))
    }
    addToWishList(){
        const username = localStorage.getItem('user');
        const bookname = this.props.book.name;
        agregarADeseados({
            username: username,
            bookName: bookname
        }).then(res => console.log(res));
    }
    
    render(){
        return (
        <div className="col-md-12">
        <AuthorCarousel book={this.props.book} changeToBookById={this.props.changeToBookById}></AuthorCarousel>
        <div className="Book-Container">        
            <div className="Book-name">
               {this.props.book.name}
            </div>
            <div className="Info-Container-BookPage">
                <div id  = "autor"> {this.props.book.authorName} </div>
                <div> Edición {this.props.book.releaseYear} </div>
                <div> Género: {genres.find(genre => genre.k === this.props.book.genre).v} </div>
                 <div> {this.props.book.amountOfPages} páginas </div>
                <div> Votos {this.state.votes} </div>
                <div id = "money"> ${this.props.book.priceInPesos} </div>
                <div>
                    <button id="botton-wishlist" type="button" className="btn btn-primary" onClick={this.addToWishList}>Agregar a deseados</button>
                    <button id="botton-wishlist" type="button" className="btn btn-primary" onClick={this.addToCarrito}>Agregar al carrito</button>
        </div>
            </div>
        </div>

        <ListOpinion bybook={this.props.book}/>
        <div className="last">
        </div>
             <div className="footer">
                 ¿Ya lo leiste?
                 <button type="button" className="Accept-Button" onClick={this.upvote}>Si, esta bueno!</button>
                 <button type="button" className="Cancel-Button" onClick={this.downvote}>Prefiero la peli</button>
             </div>
             <div>
                 <button id="botton-back" type="button" className="btn btn-primary" onClick={this.props.back}>Atrás</button>
             </div>
        </div>
      )
  }
}

export default BookPage;
