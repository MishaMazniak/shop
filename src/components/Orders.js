import React from 'react';
import { FaTrash } from "react-icons/fa";

export default function Orders(props) {
    return (
        <div className='item'>
            <img src={"./img/" + props.item.img} />
            <h2>{props.item.title}</h2>
            <p>{props.item.price}$</p>
            <FaTrash className='delete-item' onClick={() => props.onDelete(props.item.id)} />
        </div>
    );
}
