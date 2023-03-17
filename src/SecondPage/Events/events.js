import { useEffect, useState } from "react";
import HowItWorks from "../../main/howitworks/howitworks";
import ForestEvents from "./ForestEvents";

export default function Events({userDetails}){
  
    let [participantInfo,setParticipantInfo] = useState();
    let participant = localStorage.getItem("name");
    useEffect(() =>{
        userDetails.map((value ,index) => {
            if(value.Username === participant){
                setParticipantInfo(userDetails[index]);
            }
        })
    })
    return (
        <div className="event-container">
            <div className="events_buttons">
                <button>RIVERS</button>
                <button >LAKES</button>
                <button >FORESTS</button>
            </div>
            <ForestEvents participantInfo={participantInfo}/>
            <HowItWorks />
        </div>
    )
}