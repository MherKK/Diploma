import "./pressinquiries.css"
import closeBar from "../../Assets/close.png"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
export default function PressInquiries ({setOPen,root}) {

    let [display,setDisplay] = useState("none");
    let form = useRef();
    let [contactDetails,setContactDetails] = useState({
        name:"",
        companyName:"",
        phoneNumber:"",
        email:"",
        subject:"",
        message:""
    })

    function sendEmail(e) {
        e.preventDefault();

       if(contactDetails.email !== ""|| contactDetails.message !=="" || contactDetails.message !== "" || contactDetails.subject !== "" || contactDetails.companyName !== ""){
            emailjs.sendForm(
                "service_fu3ubyh",
                "template_x9y9mt3",
                form.current,
                "5_msDPHjFvfi47Tfp"
            ).then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            )
            setContactDetails({ 
                name:"",
                companyName:"",
                phoneNumber:"",
                email:"",
                subject:"",
                message:""
            })
            setDisplay("none")
       }else{
        setDisplay("block")
        }
    }
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
                <form ref={form} onSubmit={sendEmail} className="contact-us_form">
                    <div>
                        <label>Name *</label>
                        <input value={contactDetails.name} onChange={(e) => setContactDetails({...contactDetails,name:e.target.value})} type="text" placeholder="Name" name="user_name"/>
                    </div>
                    <div>
                        <label>Company or Organization *</label>
                        <input value={contactDetails.companyName} onChange={(e) => setContactDetails({...contactDetails,companyName:e.target.value})} type="text" placeholder="Company Name" name="company_name"/>
                    </div>
                    <div>
                        <label>Email Address *</label>
                        <input value={contactDetails.email} onChange={(e) => setContactDetails({...contactDetails,email:e.target.value})} type="email" placeholder="Email" name="company_email"/>
                    </div>
                    <div>
                        <label>Phone</label>
                        <input value={contactDetails.phoneNumber} onChange={(e) => setContactDetails({...contactDetails,phoneNumber:e.target.value})} type="number" placeholder="Phone Number" name="phone_number"/>
                    </div>
                    <div>
                        <label>Message *</label>
                        <textarea value={contactDetails.message} onChange={(e) => setContactDetails({...contactDetails,message:e.target.value})} className="textarea" name="message"></textarea>
                        <div className="required">* indicates a required field</div>
                    </div>
                    
                    <button type="submit" value="Send">SUBMIT</button>
                 
                </form>
                <p style={{color:"red",display:display}}>Please fill all the required fields</p>
            </div>
            
        </div>
    )
}