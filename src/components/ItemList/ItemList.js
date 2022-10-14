import React from 'react'
import "./ItemList.css";
import Item from '../Item/Item';

function ItemList({ items }) {
    return(
        <div className='cardContainer'>
            {
         items.map( producto => (
             <Item
             id={producto.id}
             title={producto.title}
             stock={producto.stock}
             precio={producto.precio}
             imagen={producto.imagen}
             />
         ))
        } 
        </div>
    );
  }

export default ItemList;




