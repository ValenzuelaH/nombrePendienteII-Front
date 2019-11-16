import React from 'react';
import './App.css';
import './BookPage.css'
import {upvote} from "./api";
import {downvote} from "./api";

class BookPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        };

        this.upvote = this.upvote.bind(this);
        this.downvote = this.downvote.bind(this);
    }

    upvote(){
        const idBook = this.props.book.id;
        upvote({id: idBook}).then(res => console.log(res))
    }
    downvote(){
        const idBook = this.props.book.id;
        downvote({id: idBook}).then(res => console.log(res))
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
                <div>  {this.props.book.genre} </div>
                <div> {this.props.book.amountOfPages} páginas </div>
                <div> Votos {this.props.book.votes} </div>
                <div id = "money"> ${this.props.book.priceInPesos} </div>
                <div>
        <button id="botton-back" type="button" class="btn btn-primary" onClick={this.props.back}>Atrás</button>
        </div>
            </div>

            <div className="footer">
                ¿Ya lo leiste?
                    <button type="button" className="Accept-Button" onClick={this.upvote}>Si, esta buenardo!</button>
                    <button type="button" className="Cancel-Button" onClick={this.downvote}>Prefiero la peli</button>
            </div>
        </div>
        </div>
      )
  }
}

export default BookPage;
