import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Orders from './Orders';

export default function Header(props) {
    const [cartOpen, setStartOpen] = useState(false);
    function showOrders() {
        let summa = 0;
        props.orders.forEach(el => summa += Number.parseFloat(el.price));
        return (
            <div>
                {props.orders.map(el => (
                    <Orders key={el.id} item={el} onDelete={props.onDelete} />
                ))}
                <p className='summa'>Summa: {new Intl.NumberFormat().format(summa)}$</p>
            </div>
        );
    }
    function showNothing() {
        return <div className='empty'><h2>Cart is empty</h2></div>;
    }
    return (
        <header>
            <div>
                <span className='logo'>Our travels</span>
                <ul className='nav'>
                    <li>Gallery</li>
                    <li>About us</li>
                    <li>Contact</li>
                </ul>
                <FaShoppingCart onClick={() => setStartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />
                {cartOpen && (<div className='shop-cart'>
                    {props.orders.length > 0 ? showOrders() : showNothing()}
                </div>)}
            </div>
            <div className='presentation'></div>
        </header>
    );
}
