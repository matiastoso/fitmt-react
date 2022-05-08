import React, { Component, useState } from 'react';
import './ItemListContainer.css';

function ItemCount({ stock, initial,  onAdd}) {
    const [count, setCount] = useState(initial);

    function handleMinusButton() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function handlePlusButton() {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    return (
        <div className="agregarProductos">
            <button onClick={handleMinusButton}>-</button>
            <input type="text" value={count} />
            <button onClick={handlePlusButton}>+</button>
        </div>
    )
}

export default ItemCount;