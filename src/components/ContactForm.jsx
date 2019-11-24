import React from 'react';
import { newMessage } from "../api";

export default class ContactForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      name: '',
      tel: '',
      address: '',
      email: '',
      message: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.send(this.state);
    this.setState({
      name: '',
      tel: '',
      address: '',
      email: '',
      message: ''
    });
  }

 

handleInput(e){
   const { value, name } = e.target;
   this.setState({
        [name]: value
   })
}

reset(){
  this.setState({
    name: '',
    tel: '',
    address: '',
    email: '',
    message: ''
});
}
  
  render() {
      return (
        <div>
          <div className="card mr-4 md-4 mt-4">
                  <form onSubmit={this.handleSubmit} className="card-body">
                      <div className="form-group">
                          <input 
                              type="text"
                              name="name"
                              onChange={this.handleInput}
                              className="form-control"
                              placeholder="Name" 
                          />
                      </div>
                      <div className="form-group">
                         <input 
                              type="text"
                              name="tel"
                              onChange={this.handleInput}
                              className="form-control"
                              placeholder="Tel" 
                          />
                      </div>
             <div className="form-group">
                      <input 
                          type="text"
                          name="email"
                          className="form-control"
                          placeholder="email" 
                          onChange={this.handleInput}
                      />
              </div>
              <div className="form-group">
                      <input 
                          type="text"
                          name="address"
                          className="form-control"
                          placeholder="direccion" 
                          onChange={this.handleInput}
                      />
              </div>
              <div className="form-group">
                      <textarea rows="4" cols="4" maxLength="1000" className="form-control mr-sm-2" 
                          type="text" value ={this.state.message} name="message" 
                          onChange={this.handleInput} 
                          placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"/>
              </div>
             <button type="submit" className="btn btn-primary">
              Enviar!
              </button>
              <button action={this.reset} type="reset" className="btn btn-primary">
              Limpiar!
              </button>
              </form>
          </div>
          </div>)
    }
}