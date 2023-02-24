import { useEffect, useState } from "react";
import logo from "../Assets/orgLogo.png"
import "../App.css"
import { dataRef } from "../firebase";
export default function Topmain(){

    let [kgs,setKgs] = useState([]);
    useEffect(() =>{
        dataRef.ref().child("Donators").on('value', data =>{
            const getData = Object.values(data.val()).map(value => value.kg);            
            setKgs(getData)
        })
    },[])

    let totalmountOfkgsRemoved = kgs.reduce((prev,next) => prev + +next ,0);

    return(
        <div className="main-top" style={{padding:"20px"}}>
            <img className="main-top-logo" alt="Logo" src={logo} style={{width:"70px"}} />
            <h3 style={{fontSize:"40px",letterSpacing:"3px",lineHeight:"0px",marginTop:"10px"}}>#TEAM
                <span style={{color:"red"}}>A</span>
                <span style={{color:"blue"}}>R</span>
                <span style={{color:"orange"}}>M</span>
            </h3>
            <p className="main-top-p">Come back anytime you feel like removing some trash!</p>
            <h1 className="pound-amount">{totalmountOfkgsRemoved} </h1>
            <p className="main-top-p" >KILOGRAMS REMOVED</p>
        </div>
    )
}