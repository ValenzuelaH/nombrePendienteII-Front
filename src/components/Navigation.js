import React from 'react';
import SearchForm from './SearchForm';
import NavBarItem from './Navbaritem';

var items = [ {"code":"0", "name":"Quienes somos?", "route":"/about_us"},
              {"code":"1", "name":"Contacto",       "route":"/contact"},
              {"code":"2", "name":"Usuario",        "route":"/user"}
            ]
            
class Navigation extends React.Component{
    render(){
      return (
          <nav className="navbar navbar-dar navbar-expand-lg navbar-dark bg-dark">
            
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a className="navbar-brand" href="">
                {this.props.title}
            </a>
            <span className="badge badge-pill badge-danger  ml-2">
              En Stock: { this.props.books.length}
            </span>
            
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              {items.map(function(currentValue, index){
                return <NavBarItem key={currentValue.code}
                                   name={currentValue.name}
                                   route={currentValue.route}
                                   user ={"aUserName"}/>;  
              })}
            </ul>
            </div>
            <SearchForm/>
            </nav>
            );
          }
}

export default Navigation;