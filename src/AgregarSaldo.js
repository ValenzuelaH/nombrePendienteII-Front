import React from 'react'
import './AgregarSaldo.css'
import {addSaldo} from "./api";

export default class AgregarSaldo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            saldo: ''
        };
    this.addSaldo = this.addSaldo.bind(this);
    this.handleRes = this.handleRes.bind(this);
    this.setSaldo = this.setSaldo.bind(this);
    }

    addSaldo(){
        const user = localStorage.getItem('user');
        addSaldo({
            username: user,
            saldo: this.state.saldo
        }).then(res => this.handleRes(res))
    }
    handleRes(res){
        this.props.history.push('user')
    }
    setSaldo(event){
        this.setState({saldo: event.target.value})
    }
    render() {
        return(
            <div className="container-saldo">
                Agregar Saldo
                <div>
                    <input id= "saldo" className="cash-in" placeholder="$" type="text" onChange={this.setSaldo}/>
                </div>
                <div className="button-container">
                    <button className="add-cancel" onClick={this.addSaldo}>ADD</button>
                    <button className="add-cancel" onClick={this.handleRes}>Volver</button>
                </div>
            </div>
        )
    }
}