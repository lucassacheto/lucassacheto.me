import React from "react";
import ListWorks from "./ListWorks";
import {CSSTransition} from "react-transition-group";

function Works(){
    return (

        <CSSTransition in={true} timeout={350} classNames="fade" appear>

            <section className="works">
                <h1>Works</h1>
                <ListWorks />
            </section>
        </CSSTransition>

    )
}

export default Works;