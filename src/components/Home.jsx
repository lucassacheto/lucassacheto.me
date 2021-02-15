import React, {useState} from "react";
import Hero from "./Hero";
import HomeContent from "./HomeContent";
import {CSSTransition} from "react-transition-group";



function Home(){
    const [display, seDisplay] = useState(true)
    return (
        <div className="content">
            <CSSTransition in={display} timeout={350} classNames="heroAni" appear>
                <Hero />
            </CSSTransition>
            <HomeContent />
        </div>
    )

}

export default Home;