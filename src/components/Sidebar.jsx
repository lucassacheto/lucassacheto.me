import React from "react";
import Menu from "./Menu";
// import Profile from "./Profile";
import SwitchTheme from "./SwitchTheme";
import {CSSTransition} from "react-transition-group";
import {Link} from "react-router-dom";

function Sidebar(props){
    
    return (
        <CSSTransition in={true} timeout={350} classNames="sideBarAni" appear>
            <div className="sidebar">
                <h1><Link to="/">L</Link></h1>
                <cite>v1.0 beta</cite>
                <Menu />
                <SwitchTheme changeTheme={props.changeTheme} currentTheme={props.currentTheme} />
                {/* <Profile /> */}
            </div>
        </CSSTransition>
    )
}

export default Sidebar;