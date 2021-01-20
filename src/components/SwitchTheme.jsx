import React from "react";

function switchTheme(props){
    return(
        <div className="switchTheme">
            {props.currentTheme === "dark" ? <cite>LIGHT ON</cite> : <cite>LIGHT OFF</cite>  }
            <label>
                <input type="checkbox" onChange={props.changeTheme} value={props.currentTheme}></input>
                <span className="slider"></span>
            </label>
        </div>
    )
}

export default switchTheme;