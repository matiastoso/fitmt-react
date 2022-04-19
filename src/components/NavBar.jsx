import React from 'react';
import './NavBar.css';

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
        </nav>
    )
}

export default NavBar;