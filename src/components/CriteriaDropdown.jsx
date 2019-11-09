import React from 'react';

var dropDownItems = [ {"code":"0", "name":"-- Seleccione un criterio --"},
                      {"code":"1", "name":"ID"},
                      {"code":"2", "name":"Nombre (libro)"},
                      {"code":"3", "name":"Nombre (Autor)"},
                      {"code":"4", "name":"Género"}
                    ]

class CriteriaDropdown extends React.Component{

    constructor(props){
        super(props);
        this.state={
            select: 0
        }
        this.select = this.select.bind(this)
    }

    select(index){
        this.setState({select:index})
    }

    render(){
        return(
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                     {dropDownItems.find(e => e.code == this.state.select).name}
            </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item" type="button" onClick={this.select(0)}>       <i>-- Seleccione un criterio --</i></button>
                    <button class="dropdown-item" type="button" onClick={this.select(1)}>       ID</button>
                    <button class="dropdown-item" type="button" onClick={this.select(2)}>       Nombre <i>(libro)</i></button>
                    <button class="dropdown-item" type="button" onClick={this.select(3)}>       Nombre <i>(Autor)</i></button>
                    <button class="dropdown-item" type="button" onClick={this.select(4)}>       Género</button>
                 </div>
            </div>
       )}
}

export default CriteriaDropdown;


