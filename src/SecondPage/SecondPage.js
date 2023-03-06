import Donate from "../main/donate/donate";
import DonatorsList from "../main/donatorslist/donatorList";
import HowItWorks from "../main/howitworks/howitworks";
import Topmain from "../main/topmain";
import Events from "./Events/events";

export default function SecondPage({donationRef}){
    return(
        <div style={{display:"flex",flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
         <Topmain />   <div style={{display:"flex",alignItems:"center",gap:"40px"}}>
                <div style={{display:"flex",flexDirection:'column',justifyContent:'center',gap:"40px" , alignItems:'center'}}>
                    
                    <Donate donationRef={donationRef} />
                    <DonatorsList />
                </div>
                <div style={{border:"1px solid silver",borderRadius:"10px",backgroundColor:"white"}}>
                    <Events />
                </div>
            </div>
           
            <HowItWorks />
        </div>
    )
}