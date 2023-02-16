
import { useState } from 'react';
import { useCreditCardValidator, images } from 'react-creditcard-validator';


export default function DonatePaymentDetails({setDonationView,donatorCardInfo,setDonatorCardInfo}){

    let [s,setS] = useState("");

    function donateBack(e){
        e.preventDefault();
        setDonationView("donateDetails")
    }

    function donateComplete(e){
        e.preventDefault();
        if(erroredInputs.cardNumber || erroredInputs.expiryDate || erroredInputs.cvc || 
        donatorCardInfo.cardHolderName === "" || donatorCardInfo.cardNumber === "" 
        || donatorCardInfo.cardCVC === "" || donatorCardInfo.cardExpiryDate === "")    
        {
            
        }else{
            setDonationView("donateMenu")
        }
    }
    const {
        getCardNumberProps,
        getExpiryDateProps,
        getCVCProps,
        getCardImageProps,
        meta: { erroredInputs } 
      } = useCreditCardValidator();
     
      return (
        <div className="donate-payment-details">
            <div className="donate-details-p">
                <h3>PAYMENT DETAILS</h3>
            </div>
            <form  className="donate-payment-details-form">
                <div>
                    <input onChange={(e) =>{
                        setDonatorCardInfo({...donatorCardInfo,cardHolderName:e.target.value})
                    }} value={donatorCardInfo.cardHolderName} placeholder="Card Holder Name" className="card-details" type="text" />
                </div>
                <div>
                    <input  className="card-details" {...getCardNumberProps()} /><svg  {...getCardImageProps({ images })} />
                    <p style={{lineHeight:"0%",textAlign:"left",marginTop:"-20px",marginLeft:"10px",color:"red"}}>{erroredInputs.cardNumber && erroredInputs.cardNumber}</p>
                </div>
               <div style={{display:"flex"}}>
                    <div>
                        <input onChange={(e) =>{
                        setDonatorCardInfo({...donatorCardInfo,cardExpiryDate:e.target.value})
                    }} value={donatorCardInfo.expiryDate} className="card-details-mmcvv" {...getExpiryDateProps()} />
                    </div>
                    <div>
                        <input className="card-details-mmcvv" {...getCVCProps()} />
                    </div> 
                    <button onClick={donateComplete} className="payment-details-button pb1">Complete</button>
               </div>
               <p  style={{lineHeight:"0%",textAlign:"left",marginTop:"-30px",marginLeft:"10px",color:"red"}}>{erroredInputs.expiryDate && erroredInputs.expiryDate}</p>
               <p  style={{lineHeight:"0%",textAlign:"left",marginLeft:"10px",color:"red"}}>{erroredInputs.cvc && erroredInputs.cvc}</p>
            </form> 
            <button onClick={donateBack} className="payment-details-button pb2">Back</button> 
        </div>
      );
}