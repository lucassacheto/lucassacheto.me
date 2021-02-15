import React from "react";

function Hero(){

const openSign = "(){";
const openTag = "<";
const closeTag="/>";

    return (
        <div>                 
            <div className="hero">
                
                <div className="codeTitle">
                    <div className="function">function</div>
                    <h2>Lucas Sacheto</h2>
                    <div className="openSign"> {openSign}   </div>
                    <div className="return"> return </div>
                    <div className="openSign2">(</div>
                    <div className="openTag">{openTag}</div>
                    <div className="title">Front End Developer</div>
                    <div className="closeTag">{closeTag}</div>
                    <div className="closeSign">)</div>
                    <div className="closeSignFinal">}</div>
                </div> 


                <div className="buttonEffectContainer">
                    <form action="https://linkedin.com/in/lucassacheto">
                        <button type="submit" formTarget="_blank" className="btnCheckProfile" aria-label="check my profile">request my resume </button>
                        <span></span>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Hero;