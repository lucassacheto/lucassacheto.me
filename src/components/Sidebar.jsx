import React, {useState} from "react";
import Menu from "./Menu";
import Profile from "./Profile";
import SwitchTheme from "./SwitchTheme";
import {CSSTransition} from "react-transition-group";

function Sidebar(props){
    
    const [display, seDisplay] = useState(true)

    return (
        <CSSTransition in={display} timeout={350} classNames="sideBarAni" appear>
            <div className="sidebar">
                <h1><a href="/">L</a></h1>
                <cite>v1.0 beta</cite>
                <Menu changeSection={props.changeSection} />
                <SwitchTheme changeTheme={props.changeTheme} currentTheme={props.currentTheme} />
                <Profile />
            </div>
        </CSSTransition>
    )
}

export default Sidebar;