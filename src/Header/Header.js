import logo from "./logo2.png"
import  "./Header.css"
import { useState } from "react";
import {  Link, useLocation } from 'react-router-dom';
import SideBar from '../SideBarMenu/SideBarMenuButton';
import SideBarMenu from "../SideBarMenu/SideBarMenu";
export default function Header ({User,setSignUp}){
    let location = useLocation();
    let [sideBar,setSideBar] = useState(true)
    let root2 = document.body;
    return (
        <div className="header-container">
            <Link to="/"><img alt="" src={logo}></img></Link>
            { location.pathname === "/terms" || location.pathname ==="/privacy" ? " " :
            User.userName === "" ? 
            <div id="header-middle" className="header-container_middle">
                <p>Clean up with #Teamarm and track our progress</p>
                <button onClick={() =>{
                    setSignUp(false)
                    root2.style.overflowY = "hidden";
                }}>Sign Up</button>
            </div> :
            <div>
            <p>Clean up with #Teamarm and track our progress</p>
            <div>Welcome {User.userName}</div>
            </div>
            }
            {sideBar === true ? <SideBar setBar={setSideBar}/> : <SideBarMenu setBar={setSideBar}/> }
             
        </div>
    )
} 