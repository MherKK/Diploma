import { useEffect, useRef, useState } from "react";
import "./events.css"
import  Axios  from "axios";
import emailjs from "@emailjs/browser";
import AdminOnlyAccess from "./AdminComponent";
export default function RiverEvents({participantInfo}){

    let [riverEventData,setriverEventData] = useState([]);
    let emailForm = useRef();
    let [place,setPlace] = useState("")
    let [participants,setParticipants] = useState();
    let [participantsLimit,setParticipantsLimit] = useState();
    let [eventDate,setEventDate] = useState();
    let [eventTime,setEventTime] = useState();
    // getting data from database
    useEffect(() =>{
        Axios.get("http://localhost:5000/riverApi").then(
            response => setriverEventData(response.data)
            )
        },[riverEventData.length])

    const  updateParticipant =  (id,value,partCount) => {   
        
        Axios.put("http://localhost:5000/update/river_events",{ 
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
                Axios.put("http://localhost:5000/update/river_events",{ 
                    participants: partCount,
                    id: id       
        })    
        }

    const eventDetailsEditor = (id) => {
            Axios.put("http://localhost:5000/update/river_events/details", {
                id: id,
                address: place,
                time: eventTime,
                date: eventDate,
                participantsLimit: +participantsLimit,
                participants: +participants
            }).then(() => {
                setriverEventData(riverEventData.map((val) => {
                    return val.id === id ? {id:val.id,address:place,time:eventTime,date:eventDate,participantsLimit:participantsLimit,participants:participants,buttonDisable:val.buttonDisable,participate:val.participate} : val
                }))
            }).then(() => {
                setPlace("");
                setParticipants("");
                setParticipantsLimit("");
                setEventDate("");
                setEventTime("");
            })
        }

    const eventDeleter = (id) => {
            Axios.delete(`http://localhost:5000/delete/river_events/${id}`).then(() => {
                setriverEventData(riverEventData.filter(val => {
                    return id === val.id
                }))
            })
        }
    
    return(
        <>
                    {participantInfo.Username === "AdminMherK" ? <AdminOnlyAccess lakeEventData={riverEventData} setlakeEventData={setriverEventData} eventName={"riverApi"}/> : ""}
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
                                    {participantInfo.Username === "AdminMherK" ? (
                                        <div className="adminformupdating">
                                             <div className="placetoclean">
                                                <input type="text" placeholder="Place To Clean" value={place} onChange={(e) => {
                                                    e.preventDefault();
                                                    setPlace(e.target.value);
                                                }}/>
                                            </div>
                                            <div className="participants">
                                                <input type="number" placeholder="Participants" value={participants} onChange={(e) =>{
                                                    e.preventDefault();
                                                    setParticipants(e.target.value);
                                                }}/>
                                            </div>
                                            <div>
                                                <input type="number" placeholder="Participants Limit" value={participantsLimit} onChange={(e) =>{
                                                    e.preventDefault();
                                                    setParticipantsLimit(e.target.value);
                                                }}/>
                                            </div>
                                            <div className="eventdate">
                                                <input type="text" placeholder="Event Date" value={eventDate} onChange={(e) =>{
                                                    e.preventDefault();
                                                    setEventDate(e.target.value);
                                                }}/>
                                            </div>
                                            <div className="eventdate">
                                                <input type="text" placeholder="Event Time" value={eventTime} onChange={(e) =>{
                                                    e.preventDefault();
                                                    setEventTime(e.target.value);
                                                }}/>
                                            </div>
                                            <div >
                                                <button onClick={() => {
                                                    eventDetailsEditor(Value.id)
                                                }}>update</button>
                                                <button style={{marginLeft:"20px"}} onClick={() => {
                                                    eventDeleter(Value.id)
                                                }}>delete</button>
                                            </div>
                                        </div>    
                                    ) : ""}
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