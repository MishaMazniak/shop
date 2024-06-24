import React from 'react';
import { useState } from "react";

export default function Categories(props) {
    const [categories, setCategories] = useState([
        {
            key: "all",
            name: "All"
        },
        {
            key: "together",
            name: "Together"
        },
        {
            key: "single",
            name: "Single"
        }
    ]);
    return (
        <div className='categories'>{categories.map(el => (
            <div key={el.key} onClick={() => props.chooseCategory(el.key)}>{el.name}</div>
        ))}</div>
    );
}
