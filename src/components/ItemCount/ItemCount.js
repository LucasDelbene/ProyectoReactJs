import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "./ItemCount.css";

export const ItemCount = ({stock=0, initial=1, onAdd}) => {
    const[contar, setCount] = useState(1);

    const restar = () => {
        setCount(contar - 1)
    }

    const sumar = () => {
        setCount(contar + 1)
    }

    return(
        <div className='itemCount'>
            <button className='boton' onClick={restar} disabled={contar <= 1}>-</button>
            <span>{contar}</span>
            <button className='boton' onClick={sumar} disabled={contar >= 5}>+</button>
            
            <div>
             <button className='botonAgregar' onClick={() => onAdd(contar)}>
                <Link className='nameBoton'>AGREGAR A CARRITO</Link>
             </button>
            </div>
        </div>
    );
}
   
export default ItemCount;



