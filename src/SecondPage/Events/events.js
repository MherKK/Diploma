import { useEffect, useState } from "react";
import HowItWorks from "../../main/howitworks/howitworks";
import ForestEvents from "./ForestEvents";
import forestImage from "../../Assets/forest.webp"
import riverImage from "../../Assets/river.webp"
import lakeImage from "../../Assets/lake.webp"

export default function Events({userDetails,setBackImage}){
  
    let [participantInfo,setParticipantInfo] = useState({});
    let participant = localStorage.getItem("name");


    useEffect(() =>{
        userDetails.map((value ,index) => {
            if(value.Username === participant){
                setParticipantInfo(userDetails[index]);
            }
                return index;        
        })      
    })

    return (
        <div className="event-container">
            <div className="events_buttons">
                <button onClick={() => {
                    setBackImage(riverImage)
                }}>RIVERS</button>
                <button onClick={() => {
                    setBackImage(lakeImage)
                }}>LAKES</button>
                <button onClick={() => {
                    setBackImage(forestImage)
                }}>FORESTS</button>
            </div>
            <ForestEvents participantInfo={participantInfo}/>
            <HowItWorks />
        </div>
    )
}