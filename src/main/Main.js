import Topmain from "./topmain";
import "./main.css"
import Donate from "./donate/donate";
import DonatorsList from "./donatorslist/donatorList";
import HowItWorks from "./howitworks/howitworks";

export default function Main ({donationRef,setBackImage}){
    return (
        <div style={{display:"flex",flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <Topmain />
            <Donate donationRef={donationRef} />
            <DonatorsList />
            <HowItWorks  setBackImage={setBackImage}/>    
        </div>
    )
}