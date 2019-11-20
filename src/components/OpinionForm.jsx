import { Redirect } from 'react-router-dom';
import React from 'react';

export default class OpinionForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      q: '',
      criteria: 'origin',
      evaluate: false,
      redirect: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCriteria = this.handleCriteria.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
        evaluate: true
    });  
  } 
  
  handleInput(e){
   const { value, name } = e.target;
   this.setState({
        [name]: value
   })
}

  handleCriteria(e){
    this.setState({criteria: e.target.value})
  }

render() {
  if (this.props.fromComponent==='/content' || this.state.redirect){
    window.location.reload();
  }
  if (this.state.evaluate && this.state.q !== ''){
      this.setState({q: '', redirect: true, evaluate: false});
      return <Redirect to={{pathname: '/content',
      state:{
        q: this.state.q,
        criteria: this.state.criteria}}}/>
      }
  return (
    <div class="col-sm-6 col-md-4">
      <div class="card">
        <div class="card-body">
          <div class="input-group marginBottom">
            <textarea class="form-control" value ={this.state.input} onChange={this.handleInputChange} placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"></textarea>
          </div>
            <a href="#" class="btn btn-outline-primary izq" onClick={(e) => { this.handleSendClick(e); }}>Enviar</a>
            <a href="#" class="btn btn-outline-danger der" onClick={(e) => { this.deleteInput(); }}>X</a>
        </div>
      </div>
    </div>
          );
  
      }
}