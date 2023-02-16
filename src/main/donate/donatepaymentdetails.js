import Cleave from "cleave.js/react"
import { useState } from "react";

export default function DonatePaymentDetails(){
    const [creditCardNo, setCreditCardNo] = useState("");
    const [creditCardType, setCreditCardType] = useState("");
    const [creditCardExpiryDate, setCreditCardExpiryDate] = useState("");
    const [cvv, setCVV] = useState("");
    function onCreditCardChange(e) {
        setCreditCardNo(e.target.rawValue);
      }
    function onCreditCardTypeChanged(type) {
        setCreditCardType(type);
     }  
    function onCreditCardExpiryChange(e) {
        setCreditCardExpiryDate(e.target.rawValue);
    }  
    function onCVVChange(e) {
        setCVV(e.target.rawValue);
      }
    return (
        <div className="donate-payment-details">
            <div>
                <h3>PAYMENT DETAILS</h3>
            </div>
            <form className="donate-payment-details-form">
                <Cleave
                value={creditCardNo}
                    placeholder="Enter credit card number"
                    options={{
                        creditCard: true,
                        onCreditCardTypeChanged
                    }}
                    onChange={e => onCreditCardChange(e)}
                    className="form-field"
                    />
                <Cleave
                    placeholder="MM/YY"
                    options={{ date: true, datePattern: ["m", "d"] }}
                    onChange={onCreditCardExpiryChange}
                    className="form-field"
                    />
                <Cleave
                    placeholder="CVV"
                    options={{
                        blocks: [3],
                        numericOnly: true
                    }}
                    onChange={onCVVChange}
                    className="form-field"
                    />
                <button>Complete</button>
                <button>Back</button>
            </form>
        </div>
    )
}