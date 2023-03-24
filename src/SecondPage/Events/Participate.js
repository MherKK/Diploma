import { useState } from "react";
import Axios from "axios";

export default function Participate({Value,participantInfo,ForestData,setForestEventData}){
    let [disable,setDisable] = useState(false);
   
    const updateParticipant = () => {
        Axios.put("http://localhost:5000/update",{ 
            participants: +Value.participants + 1,
            id: Value.id       
    })

    }
 
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
                        if(Value.participants === Value.participantsLimit ){
                            setDisable(true)
                        }else{
                            updateParticipant()
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