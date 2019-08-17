import React from "react";
import s from "./itemList.module.css";

export default props => {
    const list = props.items.map( item => {
        const Component = props.component;
        return (
            <li className={s.itemListElement} key={item.id}>
                <Component {...item}/>
            </li>
        )
    });

    return (
        <ul className={s.itemList}>
            { list }
        </ul>
    )
}
