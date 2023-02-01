import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer"
import logo from "../../Header/logo2.png"
import "./signup.css"
export default function SignUp({name,setName,lastName,setLastName}){
  
    return (
        <div className="signup-container">
            <div className="signup-container_top">
                <img alt="" src={logo} />
                <h3>#TEAM
                    <span style={{color:"red"}}>A</span>
                    <span style={{color:"blue"}}>R</span>
                    <span style={{color:"orange"}}>M</span>
                </h3>
            </div>
            <div className="signup-container-bigmiddle">
                <div className="signup-container_bottom">
                    <p className="keep-up">Keep Up with #TeamARM</p>
                    <p className="teamarm-plans">#TeamARM has big plans for 2023. Sign up today to hear about cleanup events you can join and our projects around the world</p>
                    <p className="signup-tojoin">SIGN UP TO JOIN EVENTS</p>
                    <form className="form-container" >
                        <label>
                            <input type="text" placeholder="First Name *" value={name} onChange={(e) =>{
                                setName(e.target.value);
                                e.preventDefault();
                            }}/>
                        </label>
                        <label>
                            <input type="text" placeholder="Last Name *" value={lastName} onChange={(e) =>{
                                setLastName(e.target.value)
                            }}/>
                        </label>
                        <label>
                            <input type="email" placeholder="Email *"/>
                        </label>
                        <label>
                            <input type="tel" placeholder="Phone Number *"/>
                        </label>
                        <label id="opt-in-label">
                            <input type="checkbox" />
                            <p> Opt in to mobile messages from #TeamARM about the events.</p>
                        </label>
                    </form>
                    
                </div>
                <div className="signup-submit"> <Link to="/">Submit</Link></div>
            </div>
            <Footer />
        </div>
    )
}