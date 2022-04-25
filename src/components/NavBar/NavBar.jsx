import React from 'react';
import CartWdidget from '../CartWidget/CartWidget';
import './NavBar.css';

let contador = 0;
function sumarContador() {
    contador++;
    console.log(contador)
}


function NavBar() {
    return (
        <nav className='nav'>
            <span>
                FitMat
            </span>

            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Usuario</a></li>
            </ul>

            <CartWdidget funcionSumar={sumarContador} contador='3'/>
        </nav>
    )
}

export default NavBar;