import React from 'react';

var dropDownItems = [ {"code":"0", "name":"Nombre (libro)", "route":"/contact"},
                      {"code":"2", "name":"Nombre (Autor)"},
                      {"code":"1", "name":"ID"},
                      {"code":"3", "name":"Género"}
                    ]

class CriteriaDropdown extends React.Component{
    render(){
        return(
            <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i>-- Seleccione un criterio --</i> 
            </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button class="dropdown-item active" type="button">       Nombre <i>(libro)</i></button>
                    <button class="dropdown-item" type="button">       Nombre <i>(Autor)</i></button>
                    <button class="dropdown-item" type="button">       ID</button>
                    <button class="dropdown-item" type="button">       Género</button>
                 </div>
            </div>
       )}
}

export default CriteriaDropdown;