import React from 'react';
import OpinionCard from './OpinionCard';
import {ReactComponent} from 'react';

class ListOpinion extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
            opinions: [],
            showOp : true
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
            showOp: this.showOps
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


        const myOpinions = this.state.opinions.map((opinion, i) => {
            return(
              <div className="col-md-4" key={i}>
                <OpinionCard opinion={opinion}/>
              </div>
              )
          })

          return (
            <div className="App">
                <div className="container">
                        { this.state.showList && myOpinions }
                        {myOpinions.length === 0 && <NoResultOpinion/>}
                      </div>
                  </div>
          )
    }
}

     //   return(
     //  //Form
     //               <div class="col-sm-6 col-md-4">
     //                   <div class="card">
     //                       {/* <img src="..." class="card-img-top" alt="..."></img> */}
     //                       <div class="card-body">
     //                           <div class="input-group mb-3">
     //                               <input type="text" class="form-control" placeholder="Título de la opinión" aria-label="Titulo opinion" aria-describedby="basic-addon1"></input>
     //                           </div>
     //                           <div class="input-group marginBottom">
     //                               <textarea class="form-control" value ={this.state.input} onChange={this.handleInputChange} placeholder="Ingrese su opinión aqui" aria-label="Texto opinion"></textarea>
     //                           </div>
     //                           <a href="#" class="btn btn-outline-primary izq" onClick={(e) => { this.handleSendClick(e); }}>Enviar</a>
     //                           <a href="#" class="btn btn-outline-danger der" onClick={(e) => { this.deleteInput(); }}>X</a>
     //                       </div>
     //                   </div>
     //               </div>
     //   )}
//

export default ListOpinion;

class NoResultOpinion extends React.Component{
    render(){
        return(
            <h3 style={{color:"white", paddingTop: "80px", padding: "80px"}}> No hay opiniones todavia para este libro. ¿Por qué no nos contas que te parecio?</h3>
        )
    }
}