import { Redirect } from 'react-router-dom';
import React from 'react';
import { newOpinion, buscarUsuario } from '../api';

export default class OpinionForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      message: '',
      user: undefined
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteInput = this.deleteInput.bind(this);
    this.handleRes = this.handleRes.bind(this);
  }

  componentDidMount() {
    const user = localStorage.getItem('user');
    buscarUsuario({
        username: user
    }).then(res => this.handleRes(res))
  }

  handleRes(userObject){
    this.setState({user:userObject})
 // const userLog = {
 //   username: userObject.userName,
 //     email: userObject.email,
 //     birthday: userObject.birthday_date,
 //     wishlist: userObject.wishlist,
 //     carrito: userObject.carrito,
 //     saldo: userObject.saldo
 // }
  //  this.setState({
    //  user: userLog
  //});
  }

  handleSubmit(e) {
    e.preventDefault();
    if(!this.state.message.trim() == '' ){
   //   console.log("Se va a handlear la Opinion")
   //   const pseudo_opinion = {
   //     "msj":this.state.message,
   //     "user":{
   //       "id": 1,
   //       "birthday_date": "14/04/1987",
   //       "email": "h@h.com.ar",
   //       "userName":"H"
   //     },
   //     "book":this.props.book
   //   }
         const pseudo_opinion = {
        "msj":this.state.message,
        "user": this.state.user,
        "book":this.props.book
      }

      console.log(pseudo_opinion.book)
      console.log(pseudo_opinion.user)
      console.log(pseudo_opinion)
      newOpinion(pseudo_opinion).then(res => this.props.onClick(res));
      this.deleteInput()
    }
  } 
  
  handleInput(e){
   const { value, name } = e.target;
    this.setState({
        [name]: value
    })
  }

  deleteInput() {
    this.setState({
          message: ''
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="card">
              <div className="card-header">
                {"Nos interesa saber que pensas"} 
              </div>
              <div className="card-body">
                {/* <blockquote className="blockquote mb-0"> */}
                  <p><textarea rows="4" cols="4" maxLength="200" className="form-control mr-sm-2" type="text" value ={this.state.message} name="message" onChange={this.handleInput} placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"></textarea></p>
                  <button type="submit" value="submit" className="btn btn-outline-primary izq">Enviar</button>
                  <button type="reset" value="reset" className="btn btn-outline-danger der" onClick={this.deleteInput}>X</button>
                {/* </blockquote> */}
              </div>
            </div>
          </div>  
        </form>
      </div>);
  }
}