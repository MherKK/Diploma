import DonateDetails from "./donatedetails";
import DonateMenu from "./donatemenu";

export default function Donate(){
    return(
        <div style={{padding:"20px"}}>
            <DonateMenu />
            <DonateDetails />
        </div>
    )
}