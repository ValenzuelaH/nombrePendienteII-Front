import React from 'react';
//import { findBookbyId } from './api';
import './App.css';
import {Books} from './Books.json';


class BookPage extends React.Component {

  render(){
     return (
        <div className="App">
            <div className="container">
             <div className="row mt-4">
                <div className="col-md-3 text-center">
                  <p>
                    Hola
                  </p>
                  <p>
                    {this.props.id}
                  </p>
                </div>
                <div className="col-md-8">
                  <div className="row">
                  </div>
              </div>
            </div>
          </div>
        </div>
      )
  }
}

export default BookPage;
