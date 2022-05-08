// import React from 'react';
import './CartWidget.css';
import React, {component, useState} from 'react';

const CartWdidget = ( ) => {
    const [count, setCount] = useState(0);

    return (
        <>
            <div>
                <i onClick={() => setCount(count + 1)} id="carritoBoton" className='icono fa-solid fa-cart-shopping' />
                <span> {count} </span>
            </div>
        </>
    );
}

export default CartWdidget;