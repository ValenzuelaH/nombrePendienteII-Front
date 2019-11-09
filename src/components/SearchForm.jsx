import { React } from 'react';
import { Redirect } from 'react-router-dom';
//import CriteriaDropdown from './CriteriaDropdown'

export default class SearchForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      q: '',
      evaluate: false,
      redirect: false
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

render() {
  if (this.state.redirect){
    window.location.reload();
  }
  if (this.state.evaluate && this.state.q !== ''){
      this.setState({q: '', redirect: true, evaluate: false});
      return <Redirect to={{pathname: '/content',
      state:{q : this.state.q }}}/>
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
                      <button type="submit" className="btn btn-outline-light">Buscar!</button>
                   
              </form>
            </div>
          );
  
      }
}