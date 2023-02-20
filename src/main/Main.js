import Topmain from "./topmain";
import "./main.css"
import Donate from "./donate/donate";
import DonatorsList from "./donatorslist/donatorList";

export default function Main ({donationRef}){
    return (
        <div style={{display:"flex",flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <Topmain />
            <Donate donationRef={donationRef} />
            <DonatorsList />
        </div>
    )
}