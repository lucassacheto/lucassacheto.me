import React from "react";
import Menu from "./Menu";
import Profile from "./Profile";
import SwitchTheme from "./SwitchTheme";

function Sidebar(props){
    return (
        <div className="sidebar">
            <h1><a href="/">L</a></h1>
            <cite>v0.2 beta</cite>             
            <Menu changeSection={props.changeSection} />
            <SwitchTheme changeTheme={props.changeTheme} currentTheme={props.currentTheme} />
            <Profile />
        </div>
    )
}

export default Sidebar;