import { useEffect, useRef, useState } from "react";
import "./events.css"
import  Axios  from "axios";

export default function ForestEvents({participantInfo}){

    let [forestEventData,setForestEventData] =useState([]);
    let [zData,setZData] = useState([]);
    let [dData,setDData] = useState([]);

    const joinButtonHandler = useRef();
    // getting data from database
    useEffect(() =>{
        Axios.get("http://localhost:5000/forestApi").then(
            response => setForestEventData(response.data)
            )

        Axios.get("http://localhost:5000/forestApi/Zparticipants").then( result => {
            setZData(result.data)
        })

        Axios.get("http://localhost:5000/forestApi/Dparticipants").then( result => {
            setDData(result.data)
        })
        
       

        },[forestEventData.length])

       

        const  updateParticipant =  (id,value,partCount) => {   
        
        Axios.put("http://localhost:5000/update",{ 
                participants: partCount,
                id: id       
        })       
        
        if(partCount === value.participantsLimit) {
            setForestEventData(forestEventData.map((val) => {
                return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:"",participate:val.participate} : val 
        }))
        }else{
            setForestEventData(forestEventData.map((val) => {
                return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:"dadw",participate:val.participate} : val 
            }))
        }
        zData.map( value => {

            if(value.Zparticipants === participantInfo.Username){
                setForestEventData(forestEventData.map((val) => {
                    console.log(value.Zparticipants);
                    return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:"dadw",participate:"leave"} : val 
                }))     
            }
        })

        dData.map( value => {

            if(value.Dparticipants === participantInfo.Username){
                setForestEventData(forestEventData.map((val) => {
                    console.log(value.Zparticipants);
                    return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:"dadw",participate:"leave"} : val 
                }))     
            }
        })

        }

        const leaveEvent = (id,partCount) => {
            setForestEventData(forestEventData.map((val) => {
                
                return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:val.buttonDisable,participate:"join"} : val 
            }))     
        }
 
        
    const insertZPart = () => {
        Axios.post("http://localhost:5000/forestApi/Zparticipants/update", {
            participants: participantInfo.Username
        })
    }

    const deleteZPart = () => {
        Axios.delete(`http://localhost:5000/forestApi/Zparticipants/delete/${participantInfo.Username} `)
    }

    const insertDPart = () => {
        Axios.post("http://localhost:5000/forestApi/Dparticipants/update", {
            participants: participantInfo.Username
        })
    }
    
    const deleteDPart = () => {
        Axios.delete(`http://localhost:5000/forestApi/Zparticipants/delete/${participantInfo.Username} `)
    }
     
    return(
        <>
            {
                    forestEventData.map((Value ,index) => {
                        return(
                                <div key={Value.id} className="forestevents-container">
                                    <div className="forestevents-container-top">
                                        <h3>Place To Clean: {Value.address}</h3>
                                        <p>{`Participants: ${Value.participants} /${Value.participantsLimit}`}</p>
                                    </div> 
                                    <div className="forestevents-container-top">
                                        {
                                          
                                          Value.participate === "join" ? <button ref={joinButtonHandler} className="forest-event_join-button" disabled={!Boolean(Value.buttonDisable)}
                                            onClick={() => {                                             
                                                  
                                                if(index === 0) {
                                                    insertZPart()
                                                    updateParticipant(Value.id, Value, +Value.participants + 1)
                                                }else if (index === 1){
                                                    insertDPart()
                                                    updateParticipant(Value.id, Value, +Value.participants + 1)
                                                }

                                            }}>J O I N</button> :
                                            <button className="forest-event_join-button" 
                                            onClick={() => {
                                                
                                                if(index === 0) {
                                                    deleteZPart()
                                                    leaveEvent(Value.id,+Value.participants - 1)
                                                }else if (index === 1){
                                                    deleteDPart()
                                                    leaveEvent(Value.id,+Value.participants - 1)
                                                }
                                            }}>L E A V E</button>
                                        }
                                        <p>{"Event Date: "+Value.date +"  "+Value.time}</p>
                                    </div>
                                </div>
                          
                        )
                    })
            }
        </>
    )
}