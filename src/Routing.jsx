import React from "react";
import { BrowserRouter,Routes ,Route } from "react-router-dom";
import About from "./About";
import Menu from "./Menu";
import Gallery from "./Gallery";

const Deliver = () =>{
    return(
        <Routes>
            <Route path="/About" element = {<About/>}/>
            <Route path="/Menu" element = {<Menu/>}/>
            <Route path="/Gallery" element = {<Gallery/>}/>
        </Routes>
    )
}
 export default Deliver;