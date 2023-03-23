import "./events.css"
import Participate from "./Participate";



export default function ForestEvents({participantInfo,forestData}){

    //getting data for forest events

    return(
        <>
            {
                    forestData.map((value ,index) => {
                        return(
                            <>
                                <Participate Value={value} participantInfo={participantInfo}/>
                            </>
                        )
                    })
            }
        </>
    )
}