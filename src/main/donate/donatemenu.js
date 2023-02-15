import "../main.css"
export default function DonateMenu(){
    return(
        <div className="donate-menu">
            <div className="donate-menu-top">
                <h3>JOIN #TEAM 
                    <span style={{color:"red"}}>A</span>
                    <span style={{color:"blue"}}>R</span>
                    <span style={{color:"orange"}}>M</span>
                </h3>
            </div>
            <p className="donate-menu-quote">Every $1 is one less pound of trash in the ocean</p>
            <form onSubmit={(e) =>{
                e.preventDefault()
            }}>
                <div className="donate-menu-form">
                    <div >
                        <label className="donate-menu-form-div">5 POUNDS</label>
                    </div>
                    <div >
                        <label className="donate-menu-form-div">20 POUNDS</label>
                    </div>
                    <div >
                        <label className="donate-menu-form-div">50 POUNDS</label>
                    </div>
                    <div >
                        <label className="donate-menu-form-div">100 POUNDS</label>
                    </div>
                    <div id="donate-menu-other-amount">
                        <input placeholder="Other amount" type="number" />
                    </div>
                </div>
                <button className="donate-menu-next">Next</button>
            </form>

        </div>
    )
}
