import "./contactus.css"
import closeBar from "../../Assets/close.png"
export default function ContactUs ({setOPen,root}) {
    return (
        <div className="contact-us">
            <div className="contact-us_top">
                <p>CONTACT US</p>
                <img onClick={() =>{
                    root.style.overflowY= "visible";
                    setOPen(false)
                }} alt="" src={closeBar}/>
            </div>
            <div className="contact-us_form-container">
                <form className="contact-us_form">
                    <div>
                        <label>Name *</label>
                        <input type="text" placeholder="Name"/>
                    </div>
                    <div>
                        <label>Email Address *</label>
                        <input type="email" placeholder="Email Address"/>
                    </div>
                    <div>
                        <label>Subject *</label>
                        <input id="subject" type="text" placeholder="Subject"/>
                    </div>
                    <div>
                        <label>Message *</label>
                        <textarea className="textarea"></textarea>
                    </div>
                    <div className="required">* indicates a required field</div>
                </form>
                <button>SUBMIT</button>
            </div>
            
        </div>
    )
}