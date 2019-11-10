import React from 'react'
import { findBookbyId, findBookByAuthorName, findBookByName } from './api';


export default class Content extends React.Component{

    constructor(props){
        super(props);
        this.state={
            toShow: [],
            mustBeRender:false
        }
    }

    componentDidMount(){
        const  query  = this.props.location.state.q
        const  criteria = this.props.location.state.criteria
        console.log(query)
        console.log(criteria)
        if (query !== '' && criteria !==''){
            if(criteria === 'origin' || criteria === 'name'){
                findBookByName(query).then(result => {this.setState({toShow: result, mustBeRender:true})});
            }
            if(criteria === 'author'){
                findBookByAuthorName(query).then(result => {this.setState({toShow: result, mustBeRender:true})});
            }
            if(criteria === 'id'){
                findBookbyId(query).then(result => {this.setState({toShow: result, mustBeRender:true})});
                //Y si no es un numero? Contemplar ese caso
            }
        }
     }   

    render(){
        console.log(this.state.toShow)
        return(
            <div>
                <h1>Contenido</h1>
            </div>
        )
    }

}
//     render(){
//              return (
//                this.state.mustBeRender && <Page child={this.state.toShow} id="6"/>
//              );
//    }