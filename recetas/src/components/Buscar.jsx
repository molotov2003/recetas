import React, { useState } from 'react';

const Buscar = () => {
    const [busqueda,setBusqueda] = useState("");
    
    const buscarPelicula = (e) =>{
         let busqueda  = e.target.value;
         console.log(busqueda);

         setBusqueda(busqueda)
    }
    return ( 
       <>
       <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={buscarPelicula} />
            <button className="btn btn-outline-success" type="submit" id='search'>
              Search
            </button>
          </form>
       </>
     );
}
 
export default Buscar;