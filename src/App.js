import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Books } from './Books.json';
import {allbooks} from "./api";
import Navigation from './components/Navigation';
import Footer from './Footer';
import BookPage from './BookPage';
import Header from './Header';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Books,
        books: [],
      title: "Books 3/4",
      showList: true,
      showBook: false,
      go:1
    };
    this.handleAddBook = this.handleAddBook.bind(this);
    this.callToBack = this.callToBack.bind(this);
    this.setBooks = this.setBooks.bind(this);
  }

  componentDidMount() {
      allbooks({}).then(res => this.setBooks(res));
  }

    setBooks(allBooks){
        this.setState({
            books: allBooks
        })
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

    const myBooks = this.state.books.map((book, i) => {
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
          <Header title = {this.state.title}></Header>
          <Navigation title = {this.state.title} books={this.state.books} fromComponent="/home"/>
            <div className="container">
             <div className="row mt-4">
                <div className="col-md-3 text-center">
                </div>
                <div className="col-md-8">
                  <div className="row">
                      { this.state.showList && myBooks }
                    { this.state.showBook && <BookPage back={this.callToBack} book={this.state.books[this.state.go]}/> }
                  </div>
              </div>
            </div>
          </div>
            { this.state.showList && <Footer title = {this.state.title}></Footer> }
        </div>
      )
  }
}

export default App;
