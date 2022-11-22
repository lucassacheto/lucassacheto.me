import React, {useState} from "react";
import Sidebar from  "./Sidebar";
import Home from "./Home";
import Works from "./Works";
import About from "./About";
import { Route } from "react-router-dom";

function App(){
    
    
    const [theme, setTheme] = useState("dark");
    document.body.classList = (theme);


    function changeTheme(event){
        const {value} = event.target;
        value === "dark" ? setTheme("light") : setTheme("dark");
        //console.log(event.target.value);
    }

    return (
        <div className="container">
            <div className={theme}>
                <Sidebar changeTheme={changeTheme} currentTheme={theme} />
                <Route path="/" exact component={Home} />
                <Route path="/works" component={Works} />
                <Route path="/about" component={About} />
            </div>
        </div>
    )
}

export default App;