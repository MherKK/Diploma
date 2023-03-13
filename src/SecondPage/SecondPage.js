import { Link } from "react-router-dom";
import Main from "../main/Main";
import lake from "../Assets/lake.jpg"
import forest from "../Assets/forest.jpg"
import rivers from "../Assets/rivers.jpg"
import "./secondpage.css"
import { useState } from "react";
export default function SecondPage({donationRef}){
    let imgN = 2;
    let [image,setImage] = useState(0);
    setTimeout(() => {
        if(image < imgN){
            setImage(image = image + 1)
        }else if(image === imgN){
            setImage(0)
        }
    },3000)
    return(
        <div style={{display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center"}}>
            <div className="secondpage-container">
                <div className="joinourevents">
                    <h3>Join Our Events</h3>
                    <p>Come participate in our events.We will meet on different places to learn about environmental initiatives and to clean up the places. Our environment needs our help - today more than ever.</p>
                    {image === 0 ? <img src={lake} alt="" /> : image === 1  ?<img alt="" src={forest} /> : <img alt="" src={rivers} />}
                </div>
               

                <div className="joinevents-container">
                    <Link target="_blank" to="/events">Join Now</Link>
                </div>
            </div>
            <Main />
        </div>
    )
}