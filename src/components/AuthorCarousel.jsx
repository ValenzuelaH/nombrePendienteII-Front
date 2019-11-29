import React, { Fragment, useState } from 'react';
import '../css/AuthorCarousel.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import imagenPrueba from '../images/snorlax.png';
import Slider from "react-slick";
import axios from 'axios';
import {findBookByAuthorName} from '../api'
import App from '../App';

export default class AuthorCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            authorBooks:[],
            bookImages:[],
            bookId:0
        }

        this.switchToBook = this.switchToBook.bind(this);
    }

    componentDidMount() {
        if (this.state.bookId != this.props.book.id) {
            this.setState({bookId:this.props.book.id});
            findBookByAuthorName(this.props.book.authorName).then(res => this.setAuthorBooks(res));
        }
    }

    componentDidUpdate() {
        if (this.state.bookId != this.props.book.id) {
            this.setState({bookId:this.props.book.id})
            findBookByAuthorName(this.props.book.authorName).then(res => this.setAuthorBooks(res));
        }
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

    setAuthorBooks(authorBooksArray) {
        let filteredArray = authorBooksArray.filter(elem => elem.id != this.props.book.id)
        if (filteredArray.length > 0) {
            this.setState({authorBooks:filteredArray});
        }
    }

    switchToBook(id) {
        this.setState({authorBooks:[]})
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
                {this.state.authorBooks.length==0?(
                    // <div className="noHayMasLibrosDeEseAutor">
                    //     <span> No hay más libros de este autor.</span>
                    // </div>
                    <span></span>
                ):(
                    <Slider {...settings}>
                        {this.state.authorBooks.map(current=>(
                            <div className="out" key={current.id}>
                                <div className="card card-carousel">
                                    <img className="rounded-circle" alt={"libro del mismo autor"} src={"https://source.unsplash.com/featured/?book,"+current.id} height={150} width={150} onClick={this.switchToBook} id={current.id}></img>
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
                )}
            </Fragment>
        )
    }
}