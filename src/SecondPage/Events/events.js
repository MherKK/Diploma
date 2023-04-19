import { useEffect, useState } from "react";
import HowItWorks from "../../main/howitworks/howitworks";
import ForestEvents from "./ForestEvents";
import forestImage from "../../Assets/forest.webp"
import riverImage from "../../Assets/river.webp"
import lakeImage from "../../Assets/lake.webp"
import LakeEvents from "./LakeEvents";
import RiverEvents from "./RiverEvents";
export default function Events({userDetails,setBackImage}){
  
    let [participantInfo,setParticipantInfo] = useState({});
    let participant = localStorage.getItem("name");
    let [eventSwitcher, setEventSwitcher] = useState("Lakes");

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
                    setEventSwitcher("Rivers")
                }}>RIVERS</button>
                <button onClick={() => {
                    setBackImage(lakeImage)
                    setEventSwitcher("Lakes")
                }}>LAKES</button>
                <button onClick={() => {
                    setBackImage(forestImage)
                    setEventSwitcher("Forest")
                }}>FORESTS</button>
            </div>
            {eventSwitcher === "Lakes" ? <LakeEvents participantInfo={participantInfo}/> : eventSwitcher === "Forest" ? <ForestEvents participantInfo={participantInfo}/> : <RiverEvents participantInfo={participantInfo}/>}
            <HowItWorks />
        </div>
    )
}