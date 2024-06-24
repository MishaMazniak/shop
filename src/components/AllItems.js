import React from 'react';
import OneItem from './OneItem';

export default function AllItems(props) {
    return (
        <main>
            <div>{props.items.map(el => (
                <OneItem key={el.id} item={el} onAdd={props.onAdd} onShowItem={props.onShowItem} />
            ))}</div>
        </main>
    );
}
