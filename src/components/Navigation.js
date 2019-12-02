import React from 'react';
import SearchForm from './SearchForm';
import NavBarItem from './Navbaritem';
import '../navigationFachero.css';

var items = [ {"code":"0", "name":"Home",           "route":"/app",  "class":"home-container"},
              {"code":"1", "name":"Quienes somos?", "route":"/about_us",  "class":"quien-container"},
              {"code":"2", "name":"Contacto",       "route":"/contact",   "class":"contacto-container"},
              {"code":"3", "name":"Perfil",        "route":"/user",       "class":"perfil-container"}
            ]
            
class Navigation extends React.Component{
    render(){
      return (
          <nav className="navigation-container navbar navbar-expand-lg"> 
            
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li>
                <span className="badge badge-pill badge-danger  ml-2">
                  {this.props.fromComponent === '/home' || this.props.fromComponent === '/about_us'?  "En Stock: " : "Resultados: " } { this.props.books.length}
                </span>
              </li>
              {items.map(function(currentValue, index){
                return <NavBarItem key={index}
                                   name={currentValue.name}
                                   route={currentValue.route}
                                   class={currentValue.class}/>;  
              })}
            </ul>
            <SearchForm/>
            </nav>
            );
          }
}

export default Navigation;