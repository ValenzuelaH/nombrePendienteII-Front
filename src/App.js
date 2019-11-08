import React from 'react';
import {Fragment} from 'react';
import axios from 'axios';
import { books, findBookbyId, findBookByName, newBook } from './api';
import './App.css';
import { Books } from './Books.json';
import Navigation from './components/Navigation';
import Footer from './Footer';
import BookPage from './BookPage';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Books,
      title: "Books 3 1/4",
      showList: true,
      showBook: false,
      go:1
    };
    this.handleAddBook = this.handleAddBook.bind(this);
    this.callToBack = this.callToBack.bind(this);
  }

  callToBack(){
    this.setState(
      {
        showBook: false,
        showList: true
      }
    )
  }

  readDescription(index) {
    this.setState({
      showBook: true,
      showList: false,
      go:index
    })
  }

  handleAddBook(book) {
    this.setState({
      Books: [...this.state.Books, book]
    })
  }

  render(){

    const myBooks = this.state.Books.map((book, i) => {
      return(
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-headercard-title text-center">
              <h5>{book.name}</h5>
            </div>
            <div className="card-body">
              <p>{"Autor: " + book.authorName}</p>
              <p><mark>{"Paginas: " + book.amountOfPages}</mark></p>
              <p><mark>{"Precio: $" + book.priceInPesos}</mark></p>
              <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.readDescription.bind(this, i)}>
                Ver más!
              </button>
            </div>
            </div>  
          </div>
        </div>
        )
    })

    return (
        <div className="App">
          <Navigation title = {this.state.title} books={this.state.Books}/>
            <div className="container">
             <div className="row mt-4">
                <div className="col-md-3 text-center">
                </div>
                <div className="col-md-8">
                  <div className="row">
                      { this.state.showList && myBooks }
                    { this.state.showBook && <BookPage back={this.callToBack} book={this.state.Books[this.state.go]}/> }
                  </div>
              </div>
            </div>
          </div>
          <Footer title = {this.state.title}></Footer>
        </div>
      )
  }
}

export default App;
