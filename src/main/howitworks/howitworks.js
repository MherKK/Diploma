import { useState } from "react"
import Forests from "./forests"
import "./howitworks.css"
import Lakes from "./lakes"
import Rivers from "./rivers"
export default function HowItWorks(){
     let [environment,setEnvironment] = useState("rivers")
    return(
       <div className="howitworks-container">
            <div className="howitworks_top">
                 <p>HOW IT WORKS</p>
                 <p>#TeamARM will be one of the biggest, baddest, most-impactful cleanup projects of all time—and here’s how we’re doing it. Scroll on to see our cutting-edge river Interceptors, info on locally-organized cleanups, ghost-gear removal efforts and professional expeditions to areas where we can have the greatest conservation impact!</p>
            </div>
            <div className="howitworks_buttons">
                <button onClick={() => setEnvironment("rivers")}>RIVERS</button>
                <button onClick={() => setEnvironment("lakes")}>LAKES</button>
                <button onClick={() => setEnvironment("")}>FORESTS</button>
            </div>
            {environment === "rivers" ? <Rivers /> : environment === "lakes" ? <Lakes /> : <Forests />}
       </div>
        )
}