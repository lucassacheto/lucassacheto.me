import React, {useState} from "react";
import Works from "../works";


function ListWorks(){
    
    const [activeFilter, setFilter] = useState("all");

    function changeFilter(event){
        setFilter(event.target.name);        
        //console.log(event.target.name);
    }

    const FilterWorks = [...new Set(Works.map(x => x.type ))];
    //console.log([...new Set(Works.map(x => x.type))])    
    //console.log(FilterWorks);

    return (
        <div className="listWorks">
            <h1>Works</h1>
            <div className="filterListWorks">
                <p><button name="all" key="10" onClick={changeFilter} className={ activeFilter === "all" ? "selected" : undefined }>all</button></p>
                {                
                    FilterWorks.map((w,index) => <p key={index}><button name={w} onClick={changeFilter} className={ activeFilter === w ? "selected" : undefined }>{w}</button></p>)
                }
            </div>
            <ul>
                {
                activeFilter === "all" ? Works.map(w => 
                <li key={w.id}>
                    {/* <img src={w.imgURL} alt={w.name} /> */}
                    <div className="info">
                        <h2>{w.name}</h2>
                        <p>{w.description}</p>
                        <div className="icons">
                            {w.html && <img src={w.html} alt="" /> }
                            {w.css && <img src={w.css}  alt="" /> }
                            {w.js && <img src={w.js}  alt="" /> }
                            {w.github && <img src={w.github}  alt=""/> }
                            {w.bootstrap && <img src={w.bootstrap} alt="" /> }
                            {w.node && <img src={w.node} alt="" /> }
                            {w.photoshop && <img src={w.photoshop} alt="" /> }
                            {w.react && <img src={w.react} alt="" /> }
                            {w.sass && <img src={w.sass} alt="" /> }
                            {w.wordpress && <img src={w.wordpress} alt="" /> }
                        </div>
                        <div className="worksActions">
                            {w.url !== "" && <div className="buttonEffectContainer">
                                <form action={w.url}>
                                <button className="btnOpenWorks" type="submit" formTarget="_blank">open</button>
                                <span className="bgOpenWorks"></span>
                                </form>
                            </div>}
                            {w.source !== "" && <div className="buttonEffectContainer">
                                <form action={w.source}>
                                <button className="btnCodeWorks" type="submit" formTarget="_blank">view code</button>
                                <span className="bgCodeWorks"></span>
                                </form>
                            </div>}
                        </div>
                    </div>
                </li>) : Works.map(w => w.type === activeFilter && 
                <li key={w.id}>
                    {/* <img src={w.imgURL} alt={w.name} /> */}
                    <div className="info">
                        <h2>{w.name}</h2>
                        <p>{w.description}</p>
                        <div className="icons">
                            {w.html && <img src={w.html} alt="" /> }
                            {w.css && <img src={w.css}  alt="" /> }
                            {w.js && <img src={w.js}  alt="" /> }
                            {w.github && <img src={w.github}  alt=""/> }
                            {w.bootstrap && <img src={w.bootstrap} alt="" /> }
                            {w.node && <img src={w.node} alt="" /> }
                            {w.photoshop && <img src={w.photoshop} alt="" /> }
                            {w.react && <img src={w.react} alt="" /> }
                            {w.sass && <img src={w.sass} alt="" /> }
                            {w.wordpress && <img src={w.wordpress} alt="" /> }
                        </div>
                        <div className="worksActions">
                            {w.url !== "" && <div className="buttonEffectContainer">
                                <form action={w.url}>
                                <button className="btnOpenWorks" type="submit" formTarget="_blank">open</button>
                                <span className="bgOpenWorks"></span>
                                </form>
                            </div>}
                            {w.source !== "" && <div className="buttonEffectContainer">
                                <form action={w.source}>
                                <button className="btnCodeWorks" type="submit" formTarget="_blank">view code</button>
                                <span className="bgCodeWorks"></span>
                                </form>
                            </div>}
                        </div>
                    </div>
                </li>)                    
                }
            </ul>
        </div>
    )
}

export default ListWorks;