import React from "react";
import Particles from "react-particles-js";


function Hero(){

    const particlesOptions = {
        particles: {
        number: {
            value: 100,
            density: {
            enable: true,
            value_area: 600,
            
            }
        },
        color: {
            value: "#fff"
        },
        line_linked: {
            enable: "true",
            color: "#fff"
        }
        }
    }

    return (
        <div>                 
            <div className="hero">
                <Particles params={particlesOptions} className="bgParticles" />   
                <h2>Lucas Sacheto</h2>
                <p>Front End Developer</p>
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