import Topmain from "./topmain";
import "./main.css"
import Donate from "./donate/donate";

export default function Main (){
    return (
        <div style={{display:"flex",flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
            <Topmain />
            <Donate />
        </div>
    )
}