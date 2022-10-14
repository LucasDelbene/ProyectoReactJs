import { useState, createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([]);

    //AGREGAR PRODUCTO A CARRITO
    const addItem = (productos, cantidad) => {
        setCartList([...cartList, productos]);

        if (isInCart(productos.id)) {
          setCartList(cartList.map(item => {
            return item.id === productos.id ? {...item, cantidad: item.cantidad + cantidad} : item
          }));
        } else{
          setCartList([...cartList, {...productos, cantidad}])
        }
    }

    //FUNCION GLOBAL
    const calcularCantidades = () => {
      let cantidades = cartList.map((item) => item.cantidad);
      return cantidades.reduce(((previousValue, currentValue) => previousValue + currentValue), 0);
    }
     
    //PRECIO TOTAL DE PRODUCTOS
    const precioTotal = () =>{
      let totalPrecio= cartList.map((item) => item.cantidad * item.precio);
      return totalPrecio.reduce((acumulador, item) => acumulador + item, 0);
    }
    
    //PRODUCTO TOTAL
    const productoTotal = () => {
      let totalProducto = cartList.map((item) => item.cantidad);
      return totalProducto.reduce((acumulador, productoActual) => acumulador + productoActual, 0)
    }

    //VERIFICACION SI EL PRODUCTO YA EXISTE
     const isInCart = (id) => {
      return cartList.find((item) => item.id === id) ? true : false;
    };
    
    //BORRAR PRODUCTOS DEL CARRITO
    const borrarCarrito = () => {
      setCartList([]);
      alert("PRODUCTOS BORRADOS");
    };

    //REMOVER UN ITEM DE CARRITO
    const removeItem = (id) => {
      setCartList(cartList.filter((item) => item.id !== id));
    };

    return(
        <CartContext.Provider value={{cartList, addItem, borrarCarrito, isInCart, removeItem, precioTotal, productoTotal, calcularCantidades}}>
            {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider; 






/*
CODIGOS QUE USE 

<<<PRECIO TOTAL (OPCIONES)>>>

(OPCION 1)
 const precioTotal = () =>{
    let totalPrecio= cartList.map((item) => item.cantidad * item.precio);
    return totalPrecio.reduce((acumulador, item) => acumulador + item, 0);
  }

(OPCION 2)
const precioTotal = () => {
  let total = 0;
  cartList.forEach((item) => {
    total += (item.cantidad * item.precio);
  })
  return total;
}


<<<TOTAL DE PRODUCTOS (OPCIONES)>>>

(OPCION 1)
const productoTotal = () => {
  let totalProducto = cartList.map((item) => item.cantidad);
  return totalProducto.reduce((acumulador, productoActual) => acumulador + productoActual, 0)
}

(OPCION 2)
const productoTotal = () => {
  let cantidad = 0;
  cartList.forEach((item) => {
    cantidad += item.cantidad;
  });
  return cantidad;
}
*/







