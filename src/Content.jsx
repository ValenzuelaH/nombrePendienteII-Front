import React from 'react'
import { findBookbyId, findBookByAuthorName, findBookByName } from './api';
import Navigation from './components/Navigation';
import BookPage from './BookPage';
import Footer from './Footer';

import Header from './Header';

class  NoResult extends React.Component{
  render(){
    return(
        <div>
          <h1>No hay nada que mostrar</h1>
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
    
    componentWillMount(){
        const  query  = this.props.location.state.q
        const  criteria = this.props.location.state.criteria
          if (query !== '' && criteria !==''){
            if(criteria === 'origin' || criteria === 'name'){
                findBookByName(query).then(result => {result !== null && this.setState({toShow: [result], mustBeRender:true})});
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
      const title = "Books 3 1/4";  
        const searchResult = this.state.toShow.map((book, i) => {
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
              <Header title = {title}></Header>
              <Navigation title = {"Books 3/4"} books={this.state.toShow} fromComponent="/content"/>
                <div className="container">
                 <div className="row mt-4">
                    <div className="col-md-3 text-center">
                    </div>
                    <div className="col-md-8">
                      <div className="row">
                          { (this.state.mustBeRender && searchResult) || <NoResult />}
                        { this.state.showBook && <BookPage back={this.callToBack} book={this.state.toShow[this.state.go]}/> }
                      </div>
                  </div>
                </div>
              </div>
              <Footer title = {this.state.title}></Footer>
            </div>
          )
      }
}



