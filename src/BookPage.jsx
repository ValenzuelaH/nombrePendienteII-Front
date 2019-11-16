import React from 'react';
import './App.css';
import './BookPage.css'
import {upvote} from "./api";
import {downvote} from "./api";

const genres = [{"k": "SCIFI" , "v": "Ciencia ficción"}, 
               {"k": "FANTASTIC", "v": "Fantástico/Épico"},
               {"k": "TERROR", "v": "Terror"},
               {"k": "PINKNOVEL", "v": "Novela rosa"},
               {"k": "THEATER", "v": "Obra de teatro"},
               {"k": "STORY", "v": "Ficción"},
               {"k": "DETECTIVESTORY", "v": "Novela negra/Policial"},
               {"k": "POETRY", "v": "Poesía"},
               {"k": "DRAMA", "v": "Drama"},
               {"k": "DYSTOPIAN", "v": "Distópico"},
               {"k": "ESSAY", "v": "Ensayo"},
               {"k": "COMEDY", "v": "Comedia"}]


class BookPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }

    upvote(){
        upvote({id: 1}).then(res => console.log(res))
    }
    downvote(){
        downvote({id: 1}).then(res => console.log(res))
    }

  render(){
     return (
         <div>
        <div className="Book-Container">
        
            <div className="Book-name">
               {this.props.book.name}
            </div>
            <div className="Info-Container">
                <div id  = "autor"> {this.props.book.authorName} </div>
                <div> Edición {this.props.book.releaseYear} </div>
                <div> {genres.find(genre => genre.k === this.props.book.genre).v} </div>
                <div> {this.props.book.amountOfPages} páginas </div>
                <div id = "money"> ${this.props.book.priceInPesos} </div>
                <div>
        <button id="botton-back" type="button" class="btn btn-primary" onClick={this.props.back}>Atrás</button>
        </div>
            </div>

            <div className="footer">
                Have you read this book? Do you like it?
                    <button type="button" className="Accept-Button" onClick={this.upvote}>I Love this Book!</button>
                    <button type="button" className="Cancel-Button" onClick={this.downvote}>I prefer the movie</button>
            </div>
        </div>
        </div>
      )
  }
}

export default BookPage;
