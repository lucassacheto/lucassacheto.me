import React from "react";
import MenuItems from "./MenuItems";
import siteMenu from "../SiteMenu";

function Menu(props){
    
    
    return (
        
        <ul className="menu">            
            {siteMenu.map(m => <MenuItems changeSection={props.changeSection} key={m.id} name={m.name} url={m.url} imgURL={m.imgURL} /> )}
        </ul>
    )
}

export default Menu;