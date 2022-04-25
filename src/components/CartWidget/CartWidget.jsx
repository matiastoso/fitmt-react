import React from 'react';
import './CartWidget.css';
let colorBlanco = {
    color:'white'
}

const CartWdidget = ( {funcionSumar, contador} ) => {
    return (
        <>
            <div>
                <i onClick={funcionSumar} id="carritoBoton" className='icono fa-solid fa-cart-shopping' />
                <span style={colorBlanco}> {contador} </span>
            </div>
        </>
    );
}

export default CartWdidget;