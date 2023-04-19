import { useEffect, useRef, useState } from "react";
import "./events.css"
import  Axios  from "axios";
import emailjs from "@emailjs/browser";
export default function LakeEvents({participantInfo}){

    let [riverEventData,setriverEventData] =useState([]);
    let emailForm = useRef();
    // getting data from database
    useEffect(() =>{
        Axios.get("http://localhost:5000/lakeApi").then(
            response => setriverEventData(response.data)
            )
        },[riverEventData.length])

    const  updateParticipant =  (id,value,partCount) => {   
        
        Axios.put("http://localhost:5000/update/lake_events",{ 
                    participants: partCount,
                    id: id       
        })       
        
        if(partCount === value.participantsLimit) {
            setriverEventData(riverEventData.map((val) => {
                return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:"",participate:val.participate} : val 
        }))
        }else{
            setriverEventData(riverEventData.map((val) => {
                return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:"dadw",participate:""} : val 
            }))
        }
        emailjs.sendForm(
            "service_yk8hlde",
            "template_39dkvpg",
            emailForm.current,
            "qOxzZCRNgEm1JrUxf"
        )
    
    }
    
    const leaveEvent = (id,partCount) => {
                setriverEventData(riverEventData.map((val) => {

                    return val.id === id ? {id:val.id,address:val.address,time:val.time,date:val.date,participantsLimit:val.participantsLimit,participants:partCount,buttonDisable:val.buttonDisable,participate:"join"} : val 
                }))
                Axios.put("http://localhost:5000/update/lake_events",{ 
                    participants: partCount,
                    id: id       
        })    
        }
    
    return(
        <>
            {
                    riverEventData.map((Value ,index) => {
                        return(
                                <div key={Value.id} className="forestevents-container">
                                    <div className="forestevents-container-top">
                                        <h3>Place To Clean: {Value.address}</h3>
                                        <p>{`Participants: ${Value.participants} /${Value.participantsLimit}`}</p>
                                    </div> 
                                    <div className="forestevents-container-top">
                                        {
                                         
                                          Value.participate === "join" ? <button className="forest-event_join-button" disabled={!Boolean(Value.buttonDisable)}
                                            onClick={() => {                                             
                                                  
                                                if(index === 0) {                    
                                                    updateParticipant(Value.id, Value, +Value.participants + 1)
                                                }else if (index === 1){                  
                                                    updateParticipant(Value.id, Value, +Value.participants + 1)
                                                }else if (index === 2) {
                                                    updateParticipant(Value.id, Value, +Value.participants + 1)
                                                }else if(index === 3){
                                                    updateParticipant(Value.id, Value, +Value.participants + 1)
                                                }

                                            }}>J O I N</button> :
                                            <button className="forest-event_join-button" 
                                            onClick={() => {
                                                
                                                if(index === 0) {                        
                                                    leaveEvent(Value.id,+Value.participants - 1)
                                                }else if (index === 1){
                                                    leaveEvent(Value.id,+Value.participants - 1)
                                                }else if(index === 2){
                                                    leaveEvent(Value.id,+Value.participants - 1)
                                                }else if(index === 3) {
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
            <form ref={emailForm} hidden>
                <div></div>
                <input value={participantInfo.Username} name="participant_name"/>
                <input value={participantInfo.Email} name="participant_email"/>
            </form>
        </>
    )
}