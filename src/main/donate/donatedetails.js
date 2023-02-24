import { useState } from "react";
import "../../App.css"
export default function DonateDetails({setDonationView,donator,setDonator}){

    let [error,setError] = useState(false);
    let name = "";
    function donateNext(e){
        e.preventDefault();
        if(donator.displayName === "" || donator.email === ""){
            setError(true)
        }else {
            setDonationView("donatePaymentDetails")
            setError(false)
        }
    }

    function donateBack(e){
        e.preventDefault();
        setDonationView("donateMenu")
    }

    return(
        <div className="donate-details">
            <div className="donate-details-p">
                <h3 >Details</h3>
            </div>
            {error === false ? "" : <p style={{color:"red",lineHeight:"0px"}}>Please fill the required fields</p>}
            <form className="donate-details-formcontainer">
                <div className="donate-details-formdiv">
                    <label>Display Name*</label>
                    <input value={donator.displayName} onChange={ (e) => {
                        setDonator({...donator,displayName:e.target.value})
                        
                    }} placeholder="Display Name" type="text" />
                </div>
                <div className="donate-details-formdiv">
                    <label>Email Address*</label>
                    <input value={donator.email} onChange={ (e) => {
                        setDonator({...donator,email:e.target.value})
                    }} placeholder="Email Address" type="email" />
                </div>
                <div className="donate-details-formdiv">
                    <label>Mobile Phone</label>
                    <input value={donator.mobileNumber} onChange={ (e) => {
                        setDonator({...donator,mobileNumber:e.target.value})
                    }} placeholder="Mobile Phone (Optional)" type="number" />
                </div>
                <div className="donate-details-formdiv">
                    <label>Message</label>
                    <textarea value={donator.message} onChange={ (e) => {
                        setDonator({...donator,message:e.target.value})
                    }} placeholder="Message (140 characters max)"></textarea>
                </div>
                <div>
                    <input onChange={(e) =>{
                        if(e.target.checked){
                            setDonator({...donator,displayName:"Anonymous"})
                        }else{
                            setDonator({...donator,displayName:name})
                        }
                    }} type="checkbox" />
                    <label>Please keep my donation anonymous</label>
                </div>
                <div className="donate-details-bottom">
                    <button onClick={donateBack}>Back</button>
                    <button onClick={donateNext}>Next</button>
                </div>
            </form>
        </div>
    )
}