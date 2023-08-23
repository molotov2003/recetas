import React, { useState, useEffect } from 'react';

const FrmAgregar = ({datos,setDatos}) => {

//este mtodo obtiene la data del form, crea un objeto y setea el estado del componente 
   //metodo que almacenara las pelis en local storage
    const salvarLocal = (valoresFrm) => {

      let elementos = JSON.parse(localStorage.getItem("pelicula"))
      //agregamos al localstorage
      if(Array.isArray(elementos)){
       elementos.push(valoresFrm) //verifica que sea un arreglo  y agrega  un elemento al final
      }else{
       elementos = [valoresFrm] //crea el arreglo local por primera vez
      }
      setDatos(elementos);
      localStorage.setItem("pelicula",JSON.stringify(elementos));
     }
     const getDatosFrm = (e)=>{
      e.preventDefault();  //para evitar la recarga automatica de el form
      let nombre =  e.target.nombre;
      let ingredientes = e.target.ingredientes;
      let preparacion = e.target.preparacion
      let data = {
        id : new Date().getTime(), //truco para crear un id randomico
        
        nombre:nombre.value,
        ingredientes:ingredientes.value,
        preparacion:preparacion.value,
      }
      setDatos(data)
      console.log(data);
      console.log(datos);
      salvarLocal(data);
     }
  
     
    //renderdel modulo
    return (
        <>
        <div className="add">
        <form>
              <div class="mb-3">
                <label for="text" class="form-label">
                  Agregar Plato
                </label>
                <hr />
                <label for="text" class="form-label">
                  Nombre
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label for="text" class="form-label">
                  Ingredientes
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <label for="text" class="form-label">
                  Preparacion
                </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <button type="submit" class="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
        </div>

        </>
      );
}
 
export default FrmAgregar;