 import React from 'react';

 const Alerta = ({ msg, categoria }) => {

     return ( 
         <div className={`alerta ${categoria}`}>
             { msg }
         </div>
      );
 }
  
 export default Alerta;