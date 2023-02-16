import DonateDetails from "./donatedetails";
import DonateMenu from "./donatemenu";
import DonatePaymentDetails from "./donatepaymentdetails";

export default function Donate(){
    return(
        <div style={{padding:"20px"}}>
            <DonateMenu />
            <DonateDetails />
            <DonatePaymentDetails />
        </div>
    )
}