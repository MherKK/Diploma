import { useState } from "react";
import DonateDetails from "./donatedetails";
import DonateMenu from "./donatemenu";
import DonatePaymentDetails from "./donatepaymentdetails";

export default function Donate(){
    let [donationView, setDonationView] = useState("donateMenu");
    let [donator,setDonator] = useState({
            kg: "",
            displayName:"",
            email:"",
            mobileNumber: "",
            message:"" 
    })

    let [donatorCardInfo,setDonatorCardInfo] = useState({
        cardHolderName:"",
        cardNumber: 43210,
        cardExpiryDAte:"",
        cardCVC:""
    })
    console.log(donatorCardInfo);
    return(
        <div style={{padding:"20px"}}>
            {donationView === "donateMenu" ? 
             <DonateMenu setDonator={setDonator} donator={donator} setDonationView={setDonationView}/> : donationView === "donateDetails" ? 
             <DonateDetails setDonationView={setDonationView} setDonator={setDonator} donator={donator}/> : 
             <DonatePaymentDetails setDonationView={setDonationView} setDonatorCardInfo={setDonatorCardInfo} donatorCardInfo={donatorCardInfo}/>}
        </div>
    )
}