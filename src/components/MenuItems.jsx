import React from "react";
import { Link } from "react-router-dom";

function MenuItems(props){
    return (
        <li className={props.name}>
            <Link to={props.url} aria-label={props.name}><img src={props.imgURL} alt={props.name} />{props.name}</Link>
        </li>
    )
}

export default MenuItems;
