import React from "react";
import SiteProfile from "../SiteProfile";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { CSSTransition } from "react-transition-group";
import works from "../works";

function About(){

    return (
        <section className="about">

            <CSSTransition in={true} timeout={350} classNames="aboutHeaderAni" appear>
            <div className="aboutHeader">
                <div className="imgAbout">
                    { SiteProfile.map(m => <img key={m.id} src={m.avatarURL} alt="Lucas Sacheto" />)}
                </div>
                <div className="infoAbout">
                    <div className="updateAbout"><span>Updated:</span> 2 days ago</div>
                    <div className="titleAbout">Lucas Sacheto</div>
                    <div className="descAbout">Front End Developer</div>
                </div>
            </div>
            </CSSTransition>

            <CSSTransition in={true} timeout={350} classNames="slideRight" appear>
            <div className="aboutExtra">
                <p><FontAwesomeIcon className="mapMarker" icon={faMapMarkerAlt} /> <span>Toronto, ON</span></p>
                <p> <a href="mailto:hi@lucassacheto.me"> <FontAwesomeIcon className="envelope" icon={faEnvelope} /> <span>hi@lucassacheto.me</span> </a></p>
            </div>
            </CSSTransition>

            <CSSTransition in={true} timeout={650} classNames="slideRight" appear>
            <div className="aboutLatest">
                <p>Latest Accomplishments</p>
                <div className="list">
                    { works.map( m =>  
                        <div className="item" key={m.id}>
                            <div className="itemDate">{ m.day }</div>
                            <div className="itemBullet"><FontAwesomeIcon icon={faCircle} /></div>
                            <div className="itemDesc">{m.name}</div>
                        </div>
                    )}
                </div>
            </div>
            </CSSTransition>

        </section>
    )
}

export default About;