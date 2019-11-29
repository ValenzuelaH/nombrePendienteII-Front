import React from 'react';
import './Opinion.css';
import {deleteMessage } from '../api';

class OpinionCard extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            input: "",
            date: "",
            time: "",
            showOp: true
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.deleteInput = this.deleteInput.bind(this);
        this.deleteOpinion = this.deleteOpinion.bind(this);
        this.editOpinion = this.editOpinion.bind(this);
        this.deleting = this.deleting.bind(this);
    }

    handleInputChange(e) {
        this.setState({input: e.target.value, date: this.date, time: this.time, showOp: this.showOp});
    }

    deleteInput() {
        this.setState({
            input: "",
            date: "",
            time: "",
            showOp: this.showOp
        })
    }

    deleteOpinion() {
            this.setState({
                input: "",
                date: "",
                time: "",
                showOp: false
            })
    }

    editOpinion(e) {
        //decidir como hacerlo..

        //yo pienso que lo mejor es tener un flag para hacer programacion defensiva
        //y directamente setearlo en true aca y cuando se termina de editar la opinion,
        //volverlo a setear en false (para que no se siga viendo el modo de edicion).

    }
	
	deleting(){
        deleteMessage({id:this.props.opinion.id})
        this.props.delete()
    }
    
    render(){
        const user = localStorage.getItem('user');
        return(
            <div className="card">
                <br></br>
                <div className="card-header">
                {this.props.opinion.date} {"     " +  this.props.opinion.user.userName + "  dijo: "} 
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p><cite>{this.props.opinion.msj}</cite></p>
                        {this.props.opinion.user.userName == user && <button onClick={this.deleting.bind(this)} className="btn btn-outline-danger izq" >Borrar</button>}
                        {this.props.opinion.user.userName == user && <button href="#" className="btn btn-outline-success der">Editar</button>}
                    </blockquote>
                </div>
                <br></br>
            </div>    
       )}
}

export default OpinionCard;


