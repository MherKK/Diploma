
import { useState } from "react";
import "../main.css"
export default function DonateMenu({setDonationView,donator,setDonator}){

    let [amountError,setAmountError] = useState(false);
    function submitHandle(e){
        e.preventDefault();
        if(donator.kg > 0){
            setDonationView("donateDetails")
        }else{
            setDonationView("donateMenu")
            setAmountError(true)
        }
    }
    function kgHandler(e){
        setDonator({...donator,kg:e.currentTarget.innerHTML.split(" ")[0]})
    }
    return(
        <div className="donate-menu">
            <div className="donate-menu-top">
                <h3>JOIN #TEAM 
                    <span style={{color:"red"}}>A</span>
                    <span style={{color:"blue"}}>R</span>
                    <span style={{color:"orange"}}>M</span>
                </h3>
            </div>
            <p className="donate-menu-quote">Every 500 AMD is 2 less kilogram of trash in the ocean</p>
            <form onSubmit={submitHandle}>
                <div className="donate-menu-form">
                    <div >
                        <label   onClick={ (e) => {
                            kgHandler(e)
                            }
                        } className="donate-menu-form-div">2 KGS</label>
                    </div>
                    <div >
                        <label  onClick={ (e) => {
                            kgHandler(e)
                            }
                        } className="donate-menu-form-div">10 KGS</label>
                    </div>
                    <div >
                        <label  onClick={ (e) => {
                            kgHandler(e)
                            }
                        } className="donate-menu-form-div">25 KGS</label>
                    </div>
                    <div >
                        <label  onClick={ (e) => {
                            kgHandler(e)
                            }
                        } className="donate-menu-form-div">50 KGS</label>
                    </div>
                    <div id="donate-menu-other-amount">
                        <input value={donator.kg} onChange={e => setDonator({...donator,kg:e.target.value})} placeholder="Other amount" type="number" />
                    </div>
                    {amountError === false ? "" : <p style={{color:"red",lineHeight:"0px"}}>Please insert an amount</p>}
                </div>
                <button className="donate-menu-next">Next</button>
            </form>

        </div>
    )
}
