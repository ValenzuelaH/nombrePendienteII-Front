import React from 'react'
//import {mySearch} from '../../api/api'


export default class Content extends React.Component{

    constructor(props){
        super(props);
        this.state={
            toShow: [],
            mustBeRender:false

        }
    }


    componentDidMount(){
        const { query } = this.props.location.state
        console.log(query)
       // if (query !== ''){
       //         mySearch(query)
       //         .then(result => { 
       //             this.setState({toShow: result, mustBeRender:true})});
       // }
    }   

    render(){
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