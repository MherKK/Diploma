import { useEffect, useState } from "react";
import HowItWorks from "../../main/howitworks/howitworks";
import ForestEvents from "./ForestEvents";

export default function Events({userDetails}){
  
    let [participantInfo,setParticipantInfo] = useState({});
    let participant = localStorage.getItem("name");
    let [forestEventData,setForestEventData] =useState([]);

    useEffect(() =>{
        userDetails.map((value ,index) => {
            if(value.Username === participant){
                setParticipantInfo(userDetails[index]);
            }
                return index;        
        })      
    })
    
    // getting data from database
    useEffect(() =>{
    fetch("http://localhost:5000/forestApi").then(
        response => response.json()
        ).then(
        data => {
        setForestEventData(data)
        }
    )
    },[])

    return (
        <div className="event-container">
            <div className="events_buttons">
                <button>RIVERS</button>
                <button >LAKES</button>
                <button >FORESTS</button>
            </div>
            <ForestEvents forestData={forestEventData} participantInfo={participantInfo}/>
            <HowItWorks />
        </div>
    )
}