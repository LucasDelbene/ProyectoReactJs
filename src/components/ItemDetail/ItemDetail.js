import React, {useContext, useState} from 'react'
import "./ItemDetail.css";
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../CartContext/CartContext';
import {Link} from 'react-router-dom'


function ItemDetail({ item }){
  const {addItem} = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (cantidad) => {
    addItem(item, cantidad)
    alert(`AGREGASTE ${cantidad} PRODUCTOS AL CARRITO`);
    setItemCount(item)
  };

  return(
    <>
      <div className="productos">
       <div className="producto">
        
         <div className='imagen'>
          <img src={item.imagen} alt={item.id}></img>
         </div>
    
         <div className="productoFooter">
          <h2>{item.title}</h2>
          <div className="precioStock">
            <p>PRECIO: €{item.precio}</p>
            <p>STOCK: {item.stock}</p>
          </div>
         </div>

         {
          itemCount === 0
          ? <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
          : <div className='botonFinalizarCompra'><Link to='/cart' className='titleFinalizarCompra'>FINALIZAR COMPRA</Link></div>
         }

       </div>
      </div>
    </>
  ); 
}


export default ItemDetail;

