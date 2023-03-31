import { useEffect, useState } from "react";
import "./events.css"
import  Axios  from "axios";

export default function ForestEvents({participantInfo}){
    let [disable,setDisable] = useState(false);
    let [forestEventData,setForestEventData] =useState([]);
    let [count,setCount] = useState();
    // getting data from database
    useEffect(() =>{
        Axios.get("http://localhost:5000/forestApi").then(
            response => setForestEventData(response.data)
            )
        },[])

        const updateParticipant = (id,participant) => {
            Axios.put("http://localhost:5000/update",{ 
                participants: count,
                id: id       
        }).then(res => {
            setForestEventData(forestEventData.map((val) => {
                return val.id == id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:count} : val
           
        }))
        })
            
        }
    return(
        <>
            {
                    forestEventData.map((Value ,index) => {
                        return(
                            <>
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
                                                    updateParticipant(Value.id,Value.participants)
                                                    setCount(+Value.participants + 1);
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
                            </>
                        )
                    })
            }
        </>
    )
}