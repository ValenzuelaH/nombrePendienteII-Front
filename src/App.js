import React from 'react';
import  { Redirect } from 'react-router-dom'
import './App.css';
import './App_card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Books } from './Books.json';
import {allbooks} from "./api";
import Navigation from './components/Navigation';
import Footer from './Footer';
import BookPage from './BookPage';
import Header from './Header';
import RedirectIfNotLogged from './components/RedirectIfNotLogged';

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
            <div className="card-container">
                <div  className="title-name">{book.name}</div>
                <div className="author-container">{book.authorName}</div>
              <div>{"Paginas: " + book.amountOfPages}</div>
              <div className="price-container">${book.priceInPesos}</div>
              <button className="ver-mas-button" onClick={this.readDescription.bind(this, i)}>
                Ver más!
              </button>
        </div>
        )
      })
      
      return (
        <div className="App">
          <RedirectIfNotLogged></RedirectIfNotLogged>
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
