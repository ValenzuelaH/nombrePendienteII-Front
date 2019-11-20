import { Redirect } from 'react-router-dom';
import React from 'react';
import { newOpinion } from '../api';

export default class OpinionForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      message: '',
      user: this.props.user
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.message)
  } 
  
  handleInput(e){
   const { value, name } = e.target;
    this.setState({
        [name]: value
    })
  }

  handleInputChange(e) {
        this.setState({input: e.target.value, date: this.date, time: this.time, showOp: this.showOp});
   }

   //    <input 
//        className="form-control mr-sm-2" 
//        aria-label="Search"
//        type="text"
//        name="q"
//        onChange={this.handleInput}
//        placeholder="Ingrese texto de busqueda" 
//    />
////</div>
//<div>
//  <CriteriaDropdown action={this.handleCriteria}/>
//</div>
//<div>
//  <button type="submit" className="btn btn-outline-light">Buscar!</button>
//</div>
//</form>


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
              <blockquote className="blockquote mb-0">
                <p><cite><textarea rows="8" cols="8" maxlength="100"className="form-control mr-sm-2" type="text" value ={this.state.message} name="message" onChange={this.handleInput} placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"></textarea></cite></p>
                <button type="submit" value="submit" className="btn btn-outline-primary izq">Enviar</button>
                <button type="reset" value="reset" className="btn btn-outline-danger der">X</button>
              </blockquote>
            </div>
          </div>
        </div>  
      </form>
    </div>);
  }
}




//<form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
//<div className="col-sm-6">
//  <div className="card">
//    <div className="card-body">
//      <div className="input-group marginBottom">
//        <div className="form-group">
//       <textarea class="form-control" value ={this.state.input} onChange={this.handleInputChange} placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"></textarea>
//          <buttom href="#" className="btn btn-outline-primary izq" onClick={(e) => { this.handleSendClick(e); }}>Enviar</buttom>
//          <buttom href="#" className="btn btn-outline-danger der" onClick={(e) => { this.deleteInput(); }}>X</buttom>
//        </div>
//      </div>
//    </div>
//  </div>
//</div>
//</form>
//
//
//<React.Fragment>
//<div className="col-sm-6 col-md-4">
//                   <div className="card">
//                       {/* <img src="..." class="card-img-top" alt="..."></img> */}
//                       <div className="card-body">
//                           <div className="input-group mb-3">
//                               <input type="text" class="form-control" placeholder="Título de la opinión" aria-label="Titulo opinion" aria-describedby="basic-addon1"></input>
//                           </div>
//                           <div className="input-group marginBottom">
//                               <textarea className="form-control" value ={this.state.input} onChange={this.handleInputChange} placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"></textarea>
//                           </div>
//                           <a href="#" className="btn btn-outline-primary izq" onClick={(e) => { this.handleSendClick(e); }}>Enviar</a>
//                           <a href="#" className="btn btn-outline-danger der" onClick={(e) => { this.deleteInput(); }}>X</a>
//                       </div>
//                   </div>
//               </div>
//</React.Fragment>
//