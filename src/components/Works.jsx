import React from "react";
import ListWorks from "./ListWorks";


function Works(props){
    return (
        <section className={props.currentSection}>
            <ListWorks />            
        </section>
    )
}

export default Works;