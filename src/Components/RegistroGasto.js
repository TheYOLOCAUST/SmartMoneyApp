import React, { Fragment } from 'react';

const ListGasto = () => {
    const onSubmitForm = async e =>{
      e.preventDefault();
      try {
        const response = await fetch('http://localhost:4000/registro', {
          method: "GET",
          headers: { "Content-Type": "application/json"},
          
         
      });
      console.log(response);
      
      } catch (err) {
        console.error(err.message);
      }
    }
      
    return (
      <Fragment>
        <h1>NuevoGasto</h1>
        
          <form onSubmit={onSubmitForm}>
          {/* <input type="number" placeholder="Valor" value={valor} onChange={e => setvalor(e.target.value)} />
          <br></br>
          <input type="text" placeholder="Tipo Gasto" value={tipog} onChange={e => settipog(e.target.value)} /> 
         <br></br>
         <input type="text" placeholder="Descripcion" value={infog} onChange={e => setinfog(e.target.value)} />
         <br></br>
         <input type="text" placeholder="Moneda" value={tipom} onChange={e => settipom(e.target.value)} />
         <br></br>  */}
          <button>SUBMIT</button>
          </form>
  
      </Fragment>
    )
  }
  
  export default ListGasto;

  