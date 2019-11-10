import React from 'react';

class CriteriaDropdown extends React.Component{
    render(){
        return(
            <div>
                <select className ="btn btn-secondary dropdown-toggle"type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <option selected value="origin">    -- Seleccione un criterio --</option>
                    <option value="name">               Nombre (libro)</option>
                    <option value="author">             Nombre (autor)</option>
                    <option value="id">                 ID</option>
                    <option value="genre">              Género</option>
                </select>
            </div>
       )}
}

export default CriteriaDropdown;