import React from 'react'
import { findBookbyId, findBookByAuthorName, findBookByName } from './api';
import Navigation from './components/Navigation';
import BookPage from './BookPage';
import Footer from './Footer';
import imagenPrueba from './images/snorlax.png';  
import RedirectIfNotLogged from './components/RedirectIfNotLogged';
import './App.css';
import './App_card.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Header from './Header';

class  NoResult extends React.Component{
  render(){
    return(
        <div>
          <h1 style={{"color":"blue"} }>No hay nada que mostrar</h1>
          <img src={imagenPrueba} alt="snorlax"/>
        </div>
    )
  }
}

export default class Content extends React.Component{

    constructor(props){
        super(props);
        this.state={
            showBook: false,
            mustBeRender: false,
            toShow: [],
            go: 0
        }
        this.callToBack = this.callToBack.bind(this);
    }

    readDescription(index) {
        this.setState({
          showBook: true,
          mustBeRender: false,
          go:index
        })
      }

    callToBack(){
        this.setState(
            {
              showBook: false,
              mustBeRender: true
            }
          )
    }
    
    componentDidMount(){
        const  query  = this.props.location.state.q
        const  criteria = this.props.location.state.criteria
          if (query !== '' && criteria !==''){
            if(criteria === 'origin' || criteria === 'name'){
                findBookByName(query).then(result => result !== null && this.setState({toShow: [result], mustBeRender:true}));
            }
            if(criteria === 'author'){
                findBookByAuthorName(query).then(result => {this.setState({toShow: result, mustBeRender:true})});
            }
            if(criteria === 'id'){
                findBookbyId(query).then(result => {result !== null && this.setState({toShow: [result], mustBeRender:true})});
            }
        }
     }   

    render(){
      const myBooks = this.state.toShow.map((book, i) => {
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
                <Navigation title = {this.state.title} books={this.state.toShow} fromComponent="/content"/>
                <div className="container">
                 <div className="row mt-4">
                    <div className="col-md-12">
                      <div className="row">
                        { this.state.mustBeRender && myBooks }
                        { this.state.toShow.length === 0 && <NoResult/>}
                        { this.state.showBook && <BookPage back={this.callToBack} book={this.state.toShow.find(elem => elem.id == this.state.go)} changeToBookById={this.switchToBook}/> }
                      </div>
                  </div>
                </div>
              </div>
                <Footer title = {this.state.title}/>
            </div>
          )
      }
}
  
  