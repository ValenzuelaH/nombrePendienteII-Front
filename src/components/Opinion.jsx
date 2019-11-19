import React from 'react';
import './Opinion.css';

class Opinion extends React.Component{
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
            var day = new Date().getDate();
            var month = new Date().getMonth();
            var year = new Date().getFullYear();
    
            var hours = new Date().getHours();
            var minutes = new Date().getMinutes();
            var seconds = new Date().getSeconds();
    
            this.setState({
                input: this.input,
                date: day + '/' + month + '/' + year,
                time: hours + ':' + minutes + ':' + seconds
            });
    
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

        if (this.state.showOp) {
            opinion = 
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        {/* <img src="..." class="card-img-top" alt="..."></img> */}
                        <div class="card-body">
                            <h5 class="card-title">Opinión #3</h5>
                            <p class="card-text">La trama es interesante, pero no creo que el precio por página sea adecuado. Con un 25% de descuento, sería un muy buen regalo.</p>
                            <a href="#" class="btn btn-outline-danger izq" onClick={(e) => { this.deleteOpinion(); }}>Borrar</a>
                            <a href="#" class="btn btn-outline-success der" onClick={(e) => { this.editOpinion(e); }}>Editar</a>
                        </div>
                    </div>
                </div>
        }

        return(
            <React.Fragment>
                <div class="row">
                    <div class="col-sm-6 col-md-4">
                        <div class="card">
                            {/* <img src="..." class="card-img-top" alt="..."></img> */}
                            <div class="card-body">
                                <h5 class="card-title">Opinión #3</h5>
                                <p class="card-text">La trama es interesante, pero no creo que el precio por página sea adecuado. Con un 25% de descuento, sería un muy buen regalo.</p>
                                <a href="#" class="btn btn-outline-danger izq" onClick={(e) => { this.deleteOpinion(); }}>Borrar</a>
                                <a href="#" class="btn btn-outline-success der" onClick={(e) => { this.editOpinion(e); }}>Editar</a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-6 col-md-4">
                        <div class="card">
                            {/* <img src="..." class="card-img-top" alt="..."></img> */}
                            <div class="card-body">
                                <div class="input-group mb-3">
                                    <input type="text" class="form-control" placeholder="Título de la opinión" aria-label="Titulo opinion" aria-describedby="basic-addon1"></input>
                                </div>
                                <div class="input-group marginBottom">
                                    <textarea class="form-control" value ={this.state.input} onChange={this.handleInputChange} placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"></textarea>
                                </div>
                                <a href="#" class="btn btn-outline-primary izq" onClick={(e) => { this.handleSendClick(e); }}>Enviar</a>
                                <a href="#" class="btn btn-outline-danger der" onClick={(e) => { this.deleteInput(); }}>X</a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
       )}
}

export default Opinion;


