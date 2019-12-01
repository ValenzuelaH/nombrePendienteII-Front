import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {topN} from '../api'


let styles = {
    margin: 'auto',
    width: '500px'
  };


export default class TopN extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            top:[]
        }
    }

    componentDidMount(){
		topN().then(res=>console.log(res))
		topN().then(res=>this.setState({top:res}))
    }

    render() {
        return(
			<div>
				<h3 style={{"color":"blue"}}>Los mas votados!</h3>
        			<div style={styles}>
		    			<Carousel>
						    <div>
						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Libro 1" />
						    	<p className="legend">Libro 1</p>
						    </div>
						    <div>
						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Libro 2"/>
						    	<p className="legend">Libro 2</p>
						    </div>
						    <div>
						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Libro 3"/>
						    	<p className="legend"> Libro 3</p>
						    </div>
						    <div>
						    	<img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Libro 4"/>
						    	<p className="legend">Libro 4</p>
						    </div>
		    			</Carousel>
	    			</div>
			</div>)
    }   
}