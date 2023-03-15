import "./barmenu.css"
import "../App.css"
import close from "../Assets/close.png"
import logo from "../Assets/orgLogo.png"
export default function SideBarMenu ({setBar}) {
    let root2 = document.body;
    return (
        <div className="side-bar-container">
           <div className="nn">
                <div className="side-bar_top">
                    <div><img alt="" src={logo}/></div>
                    <button onClick={() =>{
                        root2.style.overflowY = "visible";
                        setBar(true);
                    }}  className="close-sidebar-button"><img alt="" src={close}/></button>
                </div>
                <div className="bottom-container">
                    <div className="donate-container">
                        <h3>JOIN #TEAMARM</h3>
                        <p>Every $1 is one less pound of trash in the environment</p>
                        <button onClick={() => {
                            root2.style.overflowY = "visible";
                            window.scrollTo({top: 200, behavior:"smooth"})
                            setBar(true);
                        }}>Donate</button>
                    </div>
                    <div className="side-bar_containers">
                        <button onClick={() => {
                            root2.style.overflowY = "visible";
                            window.scrollTo({top: 900, behavior:"smooth"})
                            setBar(true);
                        }}>Leaderboard</button>
                        <button onClick={() => {
                            root2.style.overflowY = "visible";
                            window.scrollTo({top: 1300, behavior:"smooth"})
                            setBar(true);
                        }}>How It Works</button>
                    </div>
                    <div className="side-bar_containers">
                        <button onClick={() => {
                            root2.style.overflowY = "visible";
                            window.scrollTo({top:3000 , behavior:"smooth"})
                            setBar(true);
                        }}>FAQ</button>
                        <button onClick={() => {
                            root2.style.overflowY = "visible";
                            window.scrollTo({top: 3000, behavior:"smooth"})
                            setBar(true);
                        }}>Contact Us</button>
                        <button onClick={() => {
                            root2.style.overflowY = "visible";
                            window.scrollTo({top: 3000, behavior:"smooth"})
                            setBar(true);
                        }}>Press Inquiries</button>
                    </div>
                </div>
                
           </div>
           
        </div>
    )
}