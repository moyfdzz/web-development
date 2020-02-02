import React from 'react';

function NuevoHoby(props) {

    function click(event) {
        event.preventDefault();
        let nuevoHoby = {
            nombre: event.target.nuevo.value
        };
        props.agregaHoby(nuevoHoby);
    }

    return (
        <form onSubmit={(event) => click(event)} id="hobyForm">
            <label htmlFor="hobyNuevo"> Nuevo hobby : </label>
            <input type="text" id="hobyNuevo" name="nuevo" />
            <button type="submit">
                Agregar
            </button>
        </form>
    )
}

export default NuevoHoby;