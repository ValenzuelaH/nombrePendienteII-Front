import React from 'react';

class Navigation extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-dar bg-dark"> 
            <a href="" className="text-white">
              {this.props.title}
              <span className="badge badge-pill badge-danger  ml-2">
                {"En Stock: " + this.props.books.length}
              </span>
            </a>
            </nav>
        )
    }
}

export default Navigation;
