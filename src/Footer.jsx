import React from 'react';
import './css/Footer.css';

export default () =>  (
  
        <div className="footer">
          <div className="grid-footer-container">
              <div className="col-md-3 footer-left">
                <h4>Direccion</h4>
                <ul>
                  <li>Buenos Aires Argentina</li>
                  <li>Calle Falsa 1234</li>
                  <li>Bs As. CP 666</li>
                  <li>CUIT: 03 - 03456</li>
                </ul>				
              </div>
              <div className="col-md-3 footer-left">
                <h4>Blaaa</h4>
                <ul>
                  <li>Bla bla bla</li>
                  <li>Bla bla bla</li>
                  <li>Bla bla bla</li>
                </ul>
              </div>
              <div className="col-md-3 footer-left">
                <h4>Blaa Blaa</h4>
                <ul>
                  <li><a href="/us">Bla</a></li> 
                  <li><a href="/contact">Bla</a></li>
                </ul>
              </div>
              <div className="col-md-3 footer-right">
                <p>© 2019 ar.edu.unq.eis Powered by <a href="https://github.com/">nombrePendienteII</a></p>
                <div className="icons">
                  <ul>
                    <li><a href="https://twitter.com/?lang=es" className="twitter"> </a></li>
                    <li><a href="https://web.facebook.com/MorfApp-490615881686201/?modal=admin_todo_tour" className="twitter facebook"> </a></li>
                    <li><a href="https://www.google.com/search?client=ubuntu&channel=fs&q=morfapp&ie=utf-8&oe=utf-8" className="twitter chrome"> </a></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
      );
