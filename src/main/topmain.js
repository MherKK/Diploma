import logo from "../Assets/orgLogo.png"
export default function Topmain(){
    return(
        <div className="main-top" style={{padding:"20px"}}>
            <img className="main-top-logo" alt="Logo" src={logo} style={{width:"70px"}} />
            <h3 style={{fontSize:"40px",letterSpacing:"3px",lineHeight:"0px",marginTop:"10px"}}>#TEAM
                <span style={{color:"red"}}>A</span>
                <span style={{color:"blue"}}>R</span>
                <span style={{color:"orange"}}>M</span>
            </h3>
            <p className="main-top-p">Come back anytime you feel like removing some trash!</p>
            <h1 className="pound-amount">33,250,089</h1>
            <p className="main-top-p" >POUNDS REMOVED</p>
        </div>
    )
}