import "./contactus.css"
import closeBar from "../../Assets/close.png"
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
export default function ContactUs ({setOPen,root}) {
    let form = useRef();
    let [contactDetails,setContactDetails] = useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })

    function sendEmail(e) {
        e.preventDefault();

       if(contactDetails.email !== ""|| contactDetails.message !=="" || contactDetails.message !== "" || contactDetails.subject !== ""){
            emailjs.sendForm(
                "service_fu3ubyh",
                "template_atqh64b",
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
            setContactDetails({ name:"",
            email:"",
            subject:"",
            message:""})
       }else{
        console.log("fill the form betch");
       }
    }
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
                <form ref={form} onSubmit={sendEmail} className="contact-us_form">
                    <div>
                        <label>Name *</label>
                        <input value={contactDetails.name} onChange={(e) => {
                            setContactDetails({...contactDetails,name:e.target.value})
                        }} type="text" name="user_name" placeholder="Name"/>
                    </div>
                    <div>
                        <label>Email Address *</label>
                        <input value={contactDetails.email} onChange={(e) => {
                            setContactDetails({...contactDetails,email:e.target.value})
                        }} type="email" name="user_email" placeholder="Email Address"/>
                    </div>
                    <div>
                        <label>Subject *</label>
                        <input value={contactDetails.subject} onChange={(e) => {
                            setContactDetails({...contactDetails,subject:e.target.value})
                        }} id="subject" type="text" name="from_name" placeholder="Subject"/>
                    </div>
                    <div>
                        <label>Message *</label>
                        <textarea value={contactDetails.message} onChange={(e) => {
                            setContactDetails({...contactDetails,message:e.target.value})
                        }} name="message" className="textarea"></textarea>
                    </div>
                    <div className="required">* indicates a required field</div>
                    <button type="submit" value="Send">SUBMIT</button>
                </form>
                
            </div>
            
        </div>
    )
}