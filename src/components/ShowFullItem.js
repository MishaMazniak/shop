import React from 'react';

export default function ShowFullItem(props) {
    return (
        <div className='full-item'>
            <div>
                <img src={"./img/" + props.item.img} onClick={() => props.onShowItem(props.item)} />
                <h2>{props.item.title}</h2>
                <p>{props.item.price}$</p>
                <div className='add-to-cart' onClick={() => props.onAdd(props.item)}>+</div>
            </div>
        </div>
    );
}
