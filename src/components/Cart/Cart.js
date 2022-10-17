import { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from 'react-router-dom'
import { serverTimestamp, doc, setDoc, collection, updateDoc, increment} from "firebase/firestore";
import { db } from '../../utils/firebaseConfig'
import "./Cart.css";

const Cart = () => {

  const {cartList, borrarCarrito, removeItem, precioTotal} = useContext(CartContext);

  const crearOrden = async () => {

    let itemsForDB = cartList.map(item => ({
      id: item.id,
      title: item.title,
      precio: item.precio,
      cantidad: item.cantidad
    }))

    let orden = {
      comprador:{
        name: "Lucas Delbene",
        email: "lucasdelbene@gmail.com",
        phone: "3435233460"
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: precioTotal()
    }
    const nuevaOrden = doc(collection(db, "orders"))
    await setDoc(nuevaOrden, orden);
    cartList.borrarCarrito()
  
    //ACTUALIZANDO UN DOCUMENTO
    itemsForDB.map(async (item) => {
      const itemRef = doc(db, "productos", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.cantidad)
      });
    })
  }
 
  if (cartList.length === 0){
    return(
      <>
       <h1 className="titleCart">TU CARRITO 🛒</h1>
        <div className="botonesCart">
          <button className="botonBorrarProductos" onClick={borrarCarrito}><h2>BORRAR TODOS LOS PRODUCTOS</h2></button>
          <Link to="/"><button className="botonContinuarComprando"><h2>CONTINUAR COMPRANDO</h2></button></Link>
        </div>
        <div className="parrafoNoHayProductos"><h2>⛔NO HAY PRODUCTOS EN EL CARRITO⛔</h2></div>
      </>
    );
  }

  return(
      <>
     
        <div className="cart">
          <h1 className="titleCart">TU CARRITO 🛒</h1>
          <div className="botonesCart">
           <button className="botonBorrarProductos" onClick={borrarCarrito}><h2>BORRAR TODOS LOS PRODUCTOS</h2></button>
           <Link to="/"><button className="botonContinuarComprando"><h2>SEGUIR COMPRANDO</h2></button></Link>
          </div>
          {
            cartList.map((item) => {
              return(
                <div className="itemCart">
                  <img src={item.imagen} alt={item.title}/>
                  
                  <div className="titlePrecio">
                    <li>{item.title}</li>
                    <li>€{item.precio}</li>
                    <br></br>
                    <p>CANTIDAD: {item.cantidad}</p>
                    <p>SUBTOTAL: €{item.cantidad * item.precio}</p>
                  </div>
                  <br></br>
        
                  <button className="botonRemover" onClick={() => {removeItem(item.id);}}>
                    <i>BORRAR PRODUCTO</i>
                  </button>
                </div>
              )
            })
          }
        </div>
        
        <div className="totalYFinalizarCompra">
          <p>TOTAL: €{precioTotal()}</p>
          <Link><button className="botonFinalizarCompra" onClick={crearOrden}><h2>FINALIZAR COMPRA</h2></button></Link>
        </div>
      </>
  )
}


export default Cart;





