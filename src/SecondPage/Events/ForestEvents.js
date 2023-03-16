import { useState } from "react";
import "./events.css"



export default function ForestEvents(){
    let [participant,setParticipant] = useState(0);
    let forestsEvents = [
        {id:"1",place:"Zeytun's Forest",date:"5/20/2023", time:"4:00 p.m.",participantsLimit:10},
        {id:"2",place:"Abovyan's Forest",date:"5/10/2023", time:"11:00 a.m.",participantsLimit:30},
        {id:"3",place:"Kentron's Forest",date:"5/15/2023", time:"12:00 p.m.",participantsLimit:10},
        {id:"4",place:"Nor Nork's Forest",date:"5/18/2023", time:"6:00 p.m.",participantsLimit:20},
        {id:"5",place:"Davtashen's Forest",date:"5/13/2023", time:"8:00 a.m.",participantsLimit:7}
    ]



    return(
        <>
            {forestsEvents.map(value => {
                return(
                    <div key={value.id} className="forestevents-container">
                        <div className="forestevents-container-top">
                            <h3>Place To Clean: {value.place}</h3>
                            <p>{`Participants: ${participant} /${value.participantsLimit}`}</p>
                        </div> 
                        <div className="forestevents-container-top">
                            <button className="forest-event_join-button"
                            onClick={() => {
                                setParticipant(participant = participant + 1);
                            }}>J O I N</button>
                            <p>{"Event Date: "+value.date +"  "+value.time}</p>
                        </div>
                </div>
                )
            })}
        </>
    )
}