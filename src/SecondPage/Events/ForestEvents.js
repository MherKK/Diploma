import { useEffect, useState } from "react";
import { dataRef } from "../../firebase";
import "./events.css"
import Participate from "./Participate";



export default function ForestEvents({participantInfo}){

    //getting data for forest events
    let [da,setda] = useState();

    useEffect(() => {
        dataRef.ref().child("Events/Forest-Events").on("value" , data => {
        const getObj = Object.values(data.val());
        setda(getObj);
    })
    },[])
    console.log(da);
    return(
        <>
            {da.map(value => {
                return(
                    <>
                        <Participate key={value.place} Value={value} participantInfo={participantInfo}/>
                    </>
                )
            })}
        </>
    )
}