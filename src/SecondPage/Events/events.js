import HowItWorks from "../../main/howitworks/howitworks";
import ForestEvents from "./ForestEvents";

export default function Events(){
    return (
        <div className="event-container">
            <div className="events_buttons">
                <button>RIVERS</button>
                <button >LAKES</button>
                <button >FORESTS</button>
            </div>
            <ForestEvents />
            <HowItWorks />
        </div>
    )
}