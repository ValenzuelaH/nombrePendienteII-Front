import React from 'react';
import './css/AboutUs.css';
import Header from './Header';
import Footer from './Footer';
import { Books } from './Books.json';
import Navigation from './components/Navigation';
import './App.css';

class AboutUs extends React.Component{
    render(){
        const title = "Books 3 1/4"

        return(
            <React.Fragment>
                <Header title = {title}></Header>
                 <Navigation title = {title} books={Books} fromComponent="/about_us"/>
                <body className="aboutUs">
                    <div class="container">
                            <h1 class="title-aboutus">Nuestra misión es: Proveer de buena lectura y accesible, tanto a los fanáticos del formato físico, como a los del digital.</h1>
                            <h2 class="description-aboutus">Ya sea con un buscador por criterios optimizado para facilitar la búsqueda de los libros de interés del usuario,
                             como brindando el mejor precio-calidad del mercado a nuestros clientes,
                             estamos orgullosos de nuestro trabajo cotidiano y del valor que tiene para nuestra sociedad.
                             Porque sabemos lo importante que es la lectura para nuestra sociedad y es eso lo que nos impulsa a superarnos día a día en esta labor.</h2>
                        <div class="row">
                            <section id="timeline">
                                <article>
                                    <div class="inner">
                                    <span class="date">
                                        <span class="year">2009</span>
                                        <span class="month">Jul</span>
                                        {/* <span class="day">25</span> */}
                                    </span>
                                    <h2>Inicios</h2>
                                    <p>En los inicios nos abrumaba la necesidad de hacer accesibles aquellos libros a los que tanto afecto les teníamos, pero que también nos recordaban que el conocimiento no era tan gratuito como imaginábamos (al menos no en el formato físico). A partir de aquel sentimiento creamos el sitio para poder publicar, y potencialmente vender, los libros a los que ya no les dábamos el uso que alguna vez habían recibido.</p>
                                    </div>
                                </article>
                                <article>
                                    <div class="inner">
                                    <span class="date">
                                        <span class="year">2011</span>
                                        <span class="month">Abr</span>
                                        {/* <span class="day">7</span> */}
                                    </span>
                                    <h2>Crecimiento</h2>
                                    <p>Hubo un punto en el que notamos que podíamos llegar a crecer (ya prácticamente no nos quedaban libros para publicar), entonces empezamos a comprar libros usados y los reacondicionamos para poder publicarlos para una nueva venta. Ese fue nuestro negocio de allí en más y duró años.</p>
                                    </div>
                                </article>
                                <article>
                                    <div class="inner">
                                    <span class="date">
                                        <span class="year">2015</span>
                                        <span class="month">Mar</span>
                                        {/* <span class="day">13</span> */}
                                    </span>
                                    <h2>Avance Tecnológico</h2>
                                    <p>Con el paso del tiempo, y por sobre todo el avance de las tecnologías digitales, nos notamos relegados y consideramos necesario un cambio en el negocio..fue entonces que nos incursionamos en el formato digital. Sin demasiado conocimiento y con bastas dudas, averiguamos sobre la compra-venta de libros en formato digital. Fue asi que dimos con los viejos y conocidos "floppy disks" (disquetes para muchos de nosotros, los que para nosotros de alguna forma conectaban lo físico y tangible de los libros con lo abstracto y digital de los e-books.</p>
                                    </div>
                                </article>
                                <article>
                                    <div class="inner">
                                    <span class="date">
                                        <span class="year">2015</span>
                                        <span class="month">May</span>
                                        {/* <span class="day">22</span> */}
                                    </span>
                                    <h2>Prueba y Error</h2>
                                    <p>En aquel entonces intentamos comprar e-books y venderlos en diferentes dispositivos de almacenamiento (mayormente disquetes y cd-roms), pero fue un fracaso rotundo. Fue la combinación de las 2 ideas de negocio la que nos permitió continuar con nuestro sitio y llegar hasta donde estamos, ya que optamos finalmente por vender en formato tanto digital como físico, y ambos a la vez (este fue el gran atino).</p>
                                    </div>
                                </article>
                                <article>
                                    <div class="inner">
                                    <span class="date">
                                        <span class="year">2017</span>
                                        <span class="month">Oct</span>
                                        {/* <span class="day">5</span> */}
                                    </span>
                                    <h2>Estrella</h2>
                                    <p>Y asi llegamos a vender nuestro producto estrella, que con un toque vintage (por los disquetes) logró ser acuñado por un buen grupo de lectores a los que orgullosamente llamamos hoy nuestros clientes.</p>
                                    </div>
                                </article>
                            </section>
                        </div>

                    </div>
                </body>
                <Footer title = {title}></Footer>
            </React.Fragment>
        );
    }
}

export default AboutUs;

// pero no así de sus precios de venta. Además de brindar un acceso al formato digital de ciertos libros que ya no se consiguen en formato físico, o de un valor muy elevado.