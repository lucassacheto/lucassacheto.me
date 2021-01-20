import React from "react";

function MenuItems(props){
    return (
        <li className={props.name}>
            <form action={props.url}>
            <button type="submit" formTarget="_blank" aria-label={props.name} name={props.name}><img src={props.imgURL} alt={props.name} />{props.name}</button>
            </form>
        </li>
    )
}

export default MenuItems;
