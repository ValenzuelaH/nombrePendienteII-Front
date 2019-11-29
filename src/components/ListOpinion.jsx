import React from 'react';
import OpinionCard from './OpinionCard';
import OpinionForm from './OpinionForm';
import {findAllOpinionsForABook, deleteMessage} from '../api';


class ListOpinion extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            opinions: [],
            showOp: false,
            noResult: false
        };
        this.setOpinions = this.setOpinions.bind(this);
        this.handleAddOpinion = this.handleAddOpinion.bind(this);
        this.handleDeleteOpinion =this.handleDeleteOpinion.bind(this);
    }

    componentDidMount() {
        findAllOpinionsForABook(this.props.bybook.id).then(res => this.setOpinions(res));
    }
  
    setOpinions(allOpinion){
        this.setState({
            showOp: true,
            noresult: allOpinion.length == 0,
            opinions: allOpinion
        })
    }


    handleDeleteOpinion(opinion_index){
        this.setState({
            opinions: this.state.opinions.filter((e, i) => {
              return i !== opinion_index
            })
          });
    }

    handleAddOpinion(opinion) { 
        this.setState({
          opinions: [...this.state.opinions, opinion]
        })
    }
   
    render(){
        const myOpinions = this.state.opinions.map((opinion, i) => {
            return(
              <div key={i}>
                <OpinionCard delete={this.handleDeleteOpinion.bind(this, i)}opinion={opinion} style={{}}opinion={opinion}/>
              </div>
              )
    })

          return (
            <div className="App">
                <div className="container">
                        <br></br><br></br>
                        {<OpinionForm book={this.props.bybook} onClick={this.handleAddOpinion.bind(this)}/>}
                        {/* <br></br><br></br> */}
                        {this.state.noResult && <NoResultOpinion/>}
                        {/* <br></br><br></br> */}
                        {this.state.showOp && myOpinions}
                </div>
            </div>
          )
    }
}


export default ListOpinion;

class NoResultOpinion extends React.Component{
    render(){
        return(
            <h3 style={{color:"black", paddingTop: "80px", padding: "80px"}}> No hay opiniones todavia para este libro. ¿Por qué no nos contas que te parecio?</h3>
        )
    }
}