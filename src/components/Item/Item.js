import React from "react";
import "./Item.css";
import {Link} from 'react-router-dom'

function Item({id, title, stock, precio, imagen}){
  return(
    <>
    <div className="productos">
      <div className="producto">
        
        <div className="imagen">
          <img src={imagen} alt=""/>
        </div>

       <div className="productoFooter">
         <h2>{title}</h2>
         <div className="precioStock">
           <p>PRECIO: €{precio}</p>
           <p>STOCK: {stock}</p>
         </div>
       </div>

       <div className="botonDetalle">
        <Link to={`/item/${id}`} className="titleDetalle">DETALLES</Link>
       </div>
       
      </div>
    </div>
    </>
  );
}

export default Item;

