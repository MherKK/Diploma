import "./pressinquiries.css"
import closeBar from "./close.png"
export default function PressInquiries ({setOPen,root}) {
    return (
        <div className="contact-us">
            <div className="contact-us_top">
                <p>PRESS INQUIRIES</p>
                <img onClick={() =>{
                    root.style.overflowY= "visible";
                    setOPen(false)
                }} alt="" src={closeBar}/>
            </div>
            <div className="contact-us_form-container">
                <form className="contact-us_form">
                    <div>
                        <label>Name *</label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Company or Organization *</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label>Email Address *</label>
                        <input  type="email" />
                    </div>
                    <div>
                        <label>Phone</label>
                        <input  type="number" />
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