 import React from 'react';

 const Alerta = ({ msg, category }) => {

     return ( 
         <div className={`alert ${category}`}>
             { msg }
         </div>
      );
 }
  
 export default Alerta;