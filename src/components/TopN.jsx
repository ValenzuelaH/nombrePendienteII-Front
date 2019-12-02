// import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import {topN} from '../api'


// let styles = {
//     margin: 'auto',
//     width: '500px'
//   };


// export default class TopN extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             top:[]
//         }
//     }

//     componentDidMount(){
		
// 		// topN().then(res=>console.log("respuestaaaa: ", res))
// 		topN().then(res=>this.setState({top:res}))
		
//     }

//     render() {
//         return(
// 			<div>
// 				<h3 style={{"color":"blue"}}>Los mas votados!</h3>



//         			{/* <div style={styles}>
// 		    			<Carousel>
// 						    <div>
// 						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Libro 1" />
// 						    	<p className="legend">Libro 1</p>
// 						    </div>
// 						    <div>
// 						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Libro 2"/>
// 						    	<p className="legend">Libro 2</p>
// 						    </div>
// 						    <div>
// 						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Libro 3"/>
// 						    	<p className="legend"> Libro 3</p>
// 						    </div>
// 						    <div>
// 						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Libro 4"/>
// 						    	<p className="legend">Libro 4</p>
// 						    </div>
// 		    			</Carousel>
// 	    			</div> */}
// 			</div>)
//     }   
// }




import React, { Fragment, useState } from 'react';
import '../css/AuthorCarousel.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imagenPrueba from '../images/snorlax.png';
import Slider from "react-slick";
import axios from 'axios';
import App from '../App';
import {topN} from '../api'

export default class TopN extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            mostVoted:[],
            bookImages:[],
			bookId:0
        }

        this.switchToBook = this.switchToBook.bind(this);
    }

    componentDidMount() {
		topN().then(res=>this.setState({mostVoted:res}))
        // if (this.state.bookId != this.props.book.id) {
        //     this.setState({bookId:this.props.book.id});
		// 	findBookByAuthorName(this.props.book.authorName).then(res => this.setAuthorBooks(res));
        // }
    }

    componentDidUpdate() {
		// topN().then(res=>this.setState({top:res}))

        // if (this.state.bookId != this.props.book.id) {
        //     this.setState({bookId:this.props.book.id})
		// 	findBookByAuthorName(this.props.book.authorName).then(res => this.setAuthorBooks(res));
        // }
    }

    // getRandomImages() {
    //     let imagesArray = []

    //     axios.get('https://source.unsplash.com/collection/430456')
    //     .then(response => {
    //         console.log("Respuesta: ", response);
    //     })
    //     .catch(e => {
    //         console.log(e);
    //     })
    // }

    // setAuthorBooks(topVoted) {
    //     let filteredArray = topVoted.filter(elem => elem.id != this.props.book.id)
    //     if (filteredArray.length > 0) {
    //         this.setState({authorBooks:filteredArray});
    //     }
    // }

    switchToBook(id) {
		// this.setState({authorBooks:[]})
        this.props.changeToBookById(id);
    }

    render() {

        let settings = {
            infinite: false,
            speed: 1500,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 3
        }

        return(
            <Fragment>
                {this.state.mostVoted.length==0?(
                    // <div className="noHayMasLibrosDeEseAutor">
                    //     <span> No hay más libros de este autor.</span>
                    // </div>
					<span></span>
                ):(
					<Fragment>
						<h3>Los mas votados!</h3>
						<Slider {...settings}>
							{this.state.mostVoted.map(current=>(
								<div className="out" key={current.id}>
									<div className="card card-carousel">
										<img className="rounded-circle" alt={"libros mas votados"} src={"https://source.unsplash.com/featured/?book,"+current.id} height={150} width={150} onClick={this.switchToBook} id={current.id}></img>
										<div className="card-body">
											<h5 className="card-title">{current.name}</h5>
											<small className="card-text text-sm-center text-muted">${current.priceInPesos}</small>
											<br/>
											<button className="ver-mas-button" onClick={this.switchToBook} id={current.id}>Ver más!</button>
										</div>
									</div>
								</div>
							))}
						</Slider>
					</Fragment>
                )}
            </Fragment>
        )
    }
}