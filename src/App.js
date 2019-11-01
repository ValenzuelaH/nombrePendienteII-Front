import React from 'react';
//import { books, findBookbyId, findBookByName, newBook } from './api';
import './App.css';
import { Books } from './Books.json';
import Navigation from './components/Navigation';
import Footer from './Footer';
import BookPage from './BookPage';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Books,
      title: "Books 3 1/4",
      showList: true,
      showBook: false,
      go:1
    }
    this.handleAddBook = this.handleAddBook.bind(this);
  
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
    //               Search by ID
    //findBookbyId({id:1}).then(response => console.log(response))
    //               List of books
    //books().then(response => console.log(response))
    //               Create a new book
    //newBook(
    //{
    //  "name": "Ficciones",
    //  "authorName": "Jorge Luis Borges",
    //  "releaseYear": 1944,
    //  "amountOfPages": 137,
    //  "priceInPesos": 888
    //}
    //).then(response => console.log(response))
    //               Search by Name
    //findBookByName({"name": "1984"}).then(response => console.log(response))

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
                    { this.state.showBook && <BookPage id={this.state.go}/> }
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default App;
