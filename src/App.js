import React, { Fragment } from 'react';
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
//import NavigationFachero from "./NavigationFachero";
import RedirectIfNotLogged from './components/RedirectIfNotLogged';
import TopN from './components/TopN';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Books,
        books: [],
      title: "Books 3/4",
      showList: true,
      showBook: false,
      go:1,
      allBooksStatic: []
    };
    this.handleAddBook = this.handleAddBook.bind(this);
    this.callToBack = this.callToBack.bind(this);
    this.setBooks = this.setBooks.bind(this);
    this.readDescription = this.readDescription.bind(this);
    this.switchToBook = this.switchToBook.bind(this);
  }

  componentDidMount() {
      allbooks({}).then(res => this.setBooks(res));
  }

    setBooks(allBooks){
        this.setState({
            books: allBooks,
            allBooksStatic: allBooks
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

  readDescription(id) {
    this.setState({
      showBook: true,
      showList: false,
      go:id
    })
  }

  switchToBook(event) {
    this.callToBack();
    this.readDescription(event.target.id);
  }

  handleAddBook(book) {
    
    this.setState({
      Books: [...this.state.Books, book]
    })
  }

  render(){
    
    const myBooks = this.state.books.map((book, i) => {
      return(
            <div className="card-container" key={i}>
                <img className="rounded-circle" alt={book.name} title={book.name} src={"https://source.unsplash.com/featured/?book,"+book.id} height={100} width={100} onClick={this.readDescription.bind(this, book.id)}></img>
                <div  className="title-name">{book.name}</div>
                <div className="author-container">{book.authorName}</div>
              <div>{"Paginas: " + book.amountOfPages}</div>
              <div className="price-container">${book.priceInPesos}</div>
              <button className="ver-mas-button" onClick={this.readDescription.bind(this, book.id)}>
                Ver más!
              </button>
        </div>
        )
      })
      
      return (
        <div id="fondo" className="App">
          <RedirectIfNotLogged></RedirectIfNotLogged>
          <Header title= {this.state.title}></Header>
            <Navigation title = {this.state.title} books={this.state.books} fromComponent="/home"/>
          {/*<NavigationFachero title={this.state.title} books_length = {this.state.books.length} />*/}
            <div className="container">
             <div className="row mt-4">
                {/* <div className="col-md-3 text-center">
                </div> */}
                <div className="col-md-12">
                  <div className="row">
                      { this.state.showList && 
                      <Fragment>
                        <div className="col-md-12">
                          <TopN changeToBookById={this.switchToBook}/>
                        </div>
                        {myBooks} 
                      </Fragment>
                      }
                    { this.state.showBook && 
                      <Fragment>
                        <BookPage back={this.callToBack} book={this.state.allBooksStatic.find(elem => elem.id == this.state.go)} changeToBookById={this.switchToBook}/> 
                      </Fragment>
                    }
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
