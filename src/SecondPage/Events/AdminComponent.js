import  Axios  from "axios";
import { useState } from "react"

export default function AdminOnlyAccess({lakeEventData,setlakeEventData,eventName}){

    let [place,setPlace] = useState("")
    let [participants,setParticipants] = useState();
    let [participantsLimit,setParticipantsLimit] = useState();
    let [eventDate,setEventDate] = useState();
    let [eventTime,setEventTime] = useState();

    const insertNewEvent = (e) => {
        e.preventDefault();
        Axios.post(`http://localhost:5000/${eventName}/insertNewEvent`, {
            address: place,
            time:eventTime,
            date:eventDate,
            participantsLimit: participantsLimit,
            participants: participants,
            buttonDisable:"false",
            participate:"join"
        }).then(() => {
            setlakeEventData([...lakeEventData,
                {
                 address:place,
                 time:eventDate,
                 date:eventDate,
                 participantsLimit:participantsLimit,
                 participants:participants,
                 buttonDisable:"false",
                 participate:"join"}]
             )
        }).then(() => {
            setPlace("");
            setParticipants("");
            setParticipantsLimit("");
            setEventDate("");
            setEventTime("");
        })
        
    }
    


    return(
        <form className="adminformediting" onSubmit={(e) => {
            insertNewEvent(e);
        }}>
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
                <button>Add</button>
            </form>
    )
}