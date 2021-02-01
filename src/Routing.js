import React from "react";
import {BrowserRouter as Router, Link , Switch, Route} from "react-router-dom";


export default function Routing(){
    

    
        return(
            <Router>
            <div>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/contact">CONTACT</Link>
                </li>
                <li>
                    <Link to="/about">ABOUT</Link>
                </li>
            </ul>
            
            
{/* switch component issue- if the path is / and it is above all other ROute component then it will always be active no matter the path. so the solution is to put the Route Component with path / below all other path router*/}
        
        
        <Switch>
                <Route path="/home">
                    <Home/>
                </Route>
                <Route path="/contact">
                    <Contact/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
            </Switch>
        </div>

        </Router>
        )
    
}


function Home(){
    return <h3 style={{color: "red", fontWeight: "bold"}}>HOME</h3>
}

function Contact(){
    return <h3 style={{color: "red", fontWeight: "bold"}}>CONTACT</h3>
}

function About(){
    return <h3 style={{color: "red", fontWeight: "bold"}}>ABOUT</h3>
}
