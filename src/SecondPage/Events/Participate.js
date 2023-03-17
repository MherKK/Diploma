import { useState } from "react";

export default function Participate({Value, participantInfo}){
    let [disable,setDisable] = useState(false);
    let [buttonSwitcher,setButtonSwitcher] = useState("join")
    return(
        <div key={Value.id} className="forestevents-container">
            <div className="forestevents-container-top">
                <h3>Place To Clean: {Value.place}</h3>
                <p>{`Participants: ${Value.participants} /${Value.participantsLimit}`}</p>
            </div> 
            <div className="forestevents-container-top">
                {
                    buttonSwitcher === "join" ? <button className="forest-event_join-button" disabled={disable}
                    onClick={() => {
                        if(Value.participant === Value.participantsLimit -1){
                            setDisable(true)
                        }else{
                            setDisable(false)
                        }
                        Value.participants = Value.participants + 1
                        setButtonSwitcher("leave");      
                    }}>J O I N</button> :
                    <button className="forest-event_join-button" disabled={disable}
                    onClick={() => {
                        (Value.participant = Value.participant - 1);
                        setButtonSwitcher("join");
                        console.log(participantInfo);
                    }}>L E A V E</button>
                }
                <p>{"Event Date: "+Value.date +"  "+Value.time}</p>
            </div>
        </div>
    )
}