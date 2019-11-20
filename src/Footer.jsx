import React from 'react';
import './css/Footer.css';

class Footer extends React.Component{
   render(){
      return(
        <React.Fragment>
        <footer className="footer-distributed">
          
          <div className="footer-right">
    
            <a href="https://www.facebook.com"><i className="fa fa-facebook"></i></a>
            <a href="https://www.twitter.com"><i className="fa fa-twitter"></i></a>
            <a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a>
            <a href="https://www.github.com/"><i className="fa fa-github"></i></a>
    
          </div>
    
          <div className="footer-left">
    
            <p className="footer-links">
              <a className="link-1" href="/app">Inicio</a>
    
              <a href="#">Blog</a>
    
              <a href="#">Pricing</a> 
    
              <a href="/about_us">Quienes Somos</a>
    
              <a href="#">Faq</a>
    
              <a href="/contact">Contact</a> 
            </p>
    
            <p>{this.props.title} &copy; 2019</p>
            <p>Powered by <strong>nombrePendienteII</strong></p>
          </div>
  
        </footer>
        </React.Fragment>
      );
    }
}

export default Footer;