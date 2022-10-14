import {React, useContext} from 'react';
import {CartContext} from "../CartContext/CartContext";


const CartWidget = () => {
    const { calcularCantidades } = useContext(CartContext);

    return(
        <div>
        <i className="bi bi-cart">
            <span>{calcularCantidades()}</span>
        </i>
    </div>
    );
}

export default CartWidget;




