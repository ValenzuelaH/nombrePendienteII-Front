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
        let opinion = undefined;
        return(
            <div class="card">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <buttom href="#" class="btn btn-outline-danger izq" >Borrar</buttom>
                        <buttom href="#" class="btn btn-outline-success der">Editar</buttom>
                    </blockquote>
                </div>
            </div>    
       )}
}

export default OpinionCard;


