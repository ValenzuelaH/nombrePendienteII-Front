import React from 'react';
//import { findBookbyId } from './api';
import './App.css';
import './BookPage.css'


class BookPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            //bookId = props.id
        }
    }


  render(){
     return (
        <div className="Book-Container">
            <div className="Book-name">
               {this.props.book.name}
            </div>
            <div className="Info-Container">
                <div> Amount Of Pages: {this.props.book.amountOfPages} </div>
                <div> Release year: {this.props.book.releaseYear} </div>
                <div> Author: {this.props.book.authorName} </div>
                <div id = "money"> Price in pesos: {this.props.book.priceInPesos} </div>
            </div>

            <div className="footer">
                Have you read this book? Do you like it?
                    <button type="button" className="Accept-Button">I Love this Book!</button>
                    <button type="button" className="Cancel-Button">I prefer the movie</button>
            </div>
        </div>
      )
  }
}

export default BookPage;
