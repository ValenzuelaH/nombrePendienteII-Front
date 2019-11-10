import { Redirect } from 'react-router-dom';
import React from 'react';
import CriteriaDropdown from './CriteriaDropdown'

export default class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      q: '',
      criteria: '',
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
  if (this.state.redirect){
    window.location.reload();
  }
  const memento = {
      q: this.state.q,
      criteria: this.state.criteria
  }
  console.log(memento)
  if (this.state.evaluate && this.state.q !== '' && this.state.criteria !== ''){
      return <Redirect to={{pathname: '/content',
      state:{memento}}}/>
      }
  return (
        <div>
            <form onSubmit={this.handleSubmit} className="form-inline my-2 my-lg-0">
                      <div className="form-group">
                          <input 
                              className="form-control mr-sm-2" 
                              aria-label="Search"
                              type="text"
                              name="q"
                              onChange={this.handleInput}
                              placeholder="Ingrese texto de busqueda" 
                          />
                      </div>
                      <div>
                        <CriteriaDropdown action={this.handleCriteria}/>
                      </div>
                      <div>
                        <button type="submit" className="btn btn-outline-light">Buscar!</button>
                      </div>
              </form>
            </div>
          );
  
      }
}