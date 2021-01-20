import React, {useState} from "react";
import Sidebar from  "./Sidebar";
import Home from "./Home";
import Works from "./Works";

function App(){
    
    const [section, setSection] = useState("home");    
    const [theme, setTheme] = useState("dark");
    document.body.classList = (theme);

    function changeSection(event){
        setSection(event.target.name);
    }

    function changeTheme(event){
        const {value} = event.target;
        value === "dark" ? setTheme("light") : setTheme("dark");
        //console.log(event.target.value);
    }

    return (
        <div className="container">
            <div className={theme}>
                <Sidebar currentSection={section} changeSection={changeSection} changeTheme={changeTheme} currentTheme={theme} />
                { section === "home" && <Home />}            
                { section === "works" && <Works currentSection={section} />}
            </div>
        </div>
    )
}

export default App;