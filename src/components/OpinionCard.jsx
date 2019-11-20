import React from 'react';
import './Opinion.css';

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
        this.handleSendClick = this.handleSendClick.bind(this);
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
        //borrar la opinion en el back

        //if (borro == "200") {
            this.setState({
                input: "",
                date: "",
                time: "",
                showOp: false
            })
        // }
    }

    editOpinion(e) {
        //decidir como hacerlo..

        //yo pienso que lo mejor es tener un flag para hacer programacion defensiva
        //y directamente setearlo en true aca y cuando se termina de editar la opinion,
        //volverlo a setear en false (para que no se siga viendo el modo de edicion).

    }
	
	handleSendClick(e) {
        if (! this.state.input.trim() == "" ){
            
    
        //pasar valores al backend
    
        //borrar el texto del input
        this.deleteInput();
    
        //mostrar mensaje de "opinion enviada"
    
        // if (respuesta == "200") {
            alert("La opinión fue enviada con éxito.");
            e.preventDefault();
            // }
        }
    }
    
    render(){
        return(
            <div class="card">
                <br></br>
                <div className="card-header">
                {this.props.opinion.date} {"     " +  this.props.opinion.user.userName + "  dijo: "} 
                </div>
                <div className="card-body">
                    <blockquote class="blockquote mb-0">
                        <p><cite>{this.props.opinion.msj}</cite></p>
                        <button href="#" class="btn btn-outline-danger izq" >Borrar</button>
                        <button href="#" class="btn btn-outline-success der">Editar</button>
                    </blockquote>
                </div>
                <br></br>
            </div>    
       )}
}

export default OpinionCard;


