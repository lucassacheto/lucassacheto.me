import React from "react";
import Hero from "./Hero";
import HomeContent from "./HomeContent";
import {CSSTransition} from "react-transition-group";



function Home(){
    
    return (
        <div className="content">
            <CSSTransition in={true} timeout={350} classNames="heroAni" appear>
                <Hero />
            </CSSTransition>
            <HomeContent />
        </div>
    )

}

export default Home;