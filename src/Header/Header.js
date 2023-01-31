import logo from "./logo2.png"
import  "./Header.css"
import { useState } from "react";
import {  Link, useLocation } from 'react-router-dom';
import SideBar from '../SideBarMenu/SideBarMenuButton';
import SideBarMenu from "../SideBarMenu/SideBarMenu";
export default function Header (){
    let location = useLocation();
    let [sideBar,setSideBar] = useState(true)
    return (
        <div className="header-container">
            <Link to="/"><img alt="" src={logo}></img></Link>
            { location.pathname === "/terms" || location.pathname ==="/privacy" ? " " : <div id="header-middle" className="header-container_middle">
                <p>Clean up with #Teamarm and track our progress</p>
                <Link target="_blank" to="signup">Sign Up</Link>
            </div>}
            {sideBar === true ? <SideBar setBar={setSideBar}/> : <SideBarMenu setBar={setSideBar}/> }
             
        </div>
    )
} 