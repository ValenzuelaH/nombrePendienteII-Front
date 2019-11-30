import React from 'react';
import ContactForm from './components/ContactForm';
import Navigation from './components/Navigation';
import { newMessage, enviarMail } from "./api";
import Header from './Header';
import Footer from './Footer';
import RedirectIfNotLogged from './components/RedirectIfNotLogged';


class ContentContact extends React.Component {
  render(){
    return(
      <div>
          <h3 className="title"> Contacto </h3>
            <div className="contact-top">
              <div className="container">
                <div className="contact-info">
                  <h4>Lineas rotativas: </h4>
                    <div style={{ width: "450px" , height: "170px"}}>
                        <p style={{textAlign: "left"}}>Teléfono: +54 011 1234-5678</p>
                        <p style={{textAlign: "left"}}>FAX: +54 011 2345-6789</p>
                        <p style={{textAlign: "left"}}>E-mail: <a href="mailto:info@example.com">mail@example.com</a></p>
                        <p style={{textAlign: "left"}}> Calle Falsa 123 CP 1826 Bs.As. Argentina.</p>
                    </div>	  
                </div>
                <div className="map" style={{padding:"20px 0px"}}>
                    <h4>Ubicación:</h4>
                    <div style={{width: "50%"}}><iframe title={"map"} width="100%" height="400" src="https://maps.google.com/maps?width=100%&height=600&hl=es&q=corrientes%20800+(BOOK34)&ie=UTF8&t=&z=14&iwloc=B&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe></div><br />                   
                </div> 
            </div>
      </div>
      </div>      
    );
  }
}

export default class Contact extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      flag: false
    }
    this.send = this.send.bind(this);
  }

  send(msj) {
    newMessage(msj).then(res => this.setState({
      flag: true
    }))
    enviarMail({
      to: 'booksninethreequarters@gmail.com',
      message: this.state.message,
      subject: "El usuario " + this.state.name + " ha enviado un mensaje"
    }).then(res => console.log(res))
  }

  render(){
        return(
          <div>
            <RedirectIfNotLogged></RedirectIfNotLogged>
            <div>
              <h1>ACA</h1>
            </div>
            <div>  
                <Header/>
                <Navigation books={{}}/>
                <ContentContact/>
                {!this.state.flag && <ContactForm send={this.send}/>}
                {this.state.flag && <div className="alert alert-danger" role="alert">  Su informacion esta siendo procesada! </div>}
                
                <Footer/>
           </div>
          ></div>);
    }
}
