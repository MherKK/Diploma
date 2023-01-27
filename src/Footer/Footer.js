import "./Footer.css";
import FAQ from "./FAQ/FAQ";
import { useState } from "react";
import ContactUs from "./Contact Us/CONTACTUS";
import PressInquiries from "./Press Inquiries/PressInquiries";
import {  Link } from 'react-router-dom';
export default function Footer (){
    let [openFAQ,setOpenFAQ] = useState(false)
    let [openContact,setContact] = useState(false)
    let [openPress,setPress] = useState(false)
    let root2 = document.body;
    return (
          <div >
            
            {openFAQ === false ? " " : <FAQ setOPen = {setOpenFAQ} root={root2}/>}
            {openContact === false ? " " : <ContactUs setOPen = {setContact} root={root2} />}
            {openPress === false ? " " : <PressInquiries setOPen = {setPress} root={root2}/>}
            <div className="footer-container">
                <div className="footer-container_buttons">
                    <button  onClick={(e) =>{
                        root2.style.overflowY = "hidden";
                        setOpenFAQ(true);
                        e.preventDefault();
                    }}>FAQ</button>
                    <button onClick={(e) =>{
                        root2.style.overflowY = "hidden";
                        setContact(true);
                    }}>Contact Us</button>
                    <button onClick={(e) =>{
                        root2.style.overflowY = "hidden";
                        setPress(true);
                    }}>Press Inquiries</button>
                </div>      
                    <div className="footer-container_links">
                        <Link className="terms-link" target="_blank" to="/terms" >TERMS</Link>                
                        <Link target="_blank" to="privacy">PRIVACY</Link>
                    </div>     
            </div>
           
        </div>
    )
}