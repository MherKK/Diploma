import { Link } from "react-router-dom";
import Main from "../main/Main";
import "./secondpage.css"
export default function SecondPage({setBackImage}){
    return(
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
            <div className="secondpage-container">
                <div className="joinourevents">
                    <h3>Join Our Events</h3>
                    <p>Come participate in our events.We will meet on different places to learn about environmental initiatives and to clean up the places. Our environment needs our help - today more than ever.</p>
                </div>

                <div className="joinevents-container">
                    <Link target="_blank" to="/events">Join Now</Link>
                </div>
            </div>
            <Main  setBackImage={setBackImage}/>
        </div>
    )
}