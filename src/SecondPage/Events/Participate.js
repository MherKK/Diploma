import { useState } from "react";

export default function Participate({Value,participantInfo}){
    let [disable,setDisable] = useState(false);
 
    return(
        <div key={Value.id} className="forestevents-container">
            <div className="forestevents-container-top">
                <h3>Place To Clean: {Value.address}</h3>
                <p>{`Participants: ${Value.participants} /${Value.participantsLimit}`}</p>
            </div> 
            <div className="forestevents-container-top">
                {
                    Value.participants !== participantInfo.Username ? <button className="forest-event_join-button" disabled={disable}
                    onClick={() => {
                        if(Value.participants === Value.participantsLimit -1){
                            setDisable(true)
                        }else{
                            setDisable(false)
                        }
                    }}>J O I N</button> :
                    <button className="forest-event_join-button" disabled={disable}
                    onClick={() => {
                    }}>L E A V E</button>
                }
                <p>{"Event Date: "+Value.date +"  "+Value.time}</p>
            </div>
        </div>
    )
}