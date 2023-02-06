
import { useState } from "react";
import Footer from "../../Footer/Footer"
import logo from "../../Header/logo2.png"
import "./signup.css"
import {db} from "../../firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
export default function SignUp({setSignUp,User,setUserDetails}){
  
    let root2 = document.body;
    let [displayuserName,setDisplayuserName] = useState("none");
    let [displaypassword,setDisplaypassword] = useState("none");
    let [displayEmail,setDisplayEmail] = useState("none");
    let [displayPhone,setDisplayPhone] = useState("none");
    let Style = {
        color:"red",
        fontSize:"14px",
        lineHeight:"0",
        marginLeft:"5px"
    }

   const submitHandler = async (e) =>{
    e.preventDefault();
    if(User.userName === "" || User.password === "" || User.email === "" || User.phoneNumber === "" ){
        setSignUp(false)
    }else{
        root2.style.overflowY = "visible";  
        setSignUp(true)  
    }

    if(User.userName && User.password && User.email && User.phoneNumber){
        await addDoc(collection(db,"User"),{
            Username: User.userName,
            Password: User.password,
            Email: User.email,
            PhoneNumber: User.phoneNumber,
            timeStamp: serverTimestamp()
        })
       
        setUserDetails({
            userName:"",
            password:"",
            email:"",
            phoneNumber:""
        })
    }
    User.userName === "" ? setDisplayuserName("block") : setDisplayuserName("none");
    User.password === "" ? setDisplaypassword("block") : setDisplaypassword("none");
    User.email === "" ? setDisplayEmail("block") : setDisplayEmail("none");
    User.phoneNumber === "" ? setDisplayPhone("block") : setDisplayPhone("none");
   }

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
                    <form onSubmit={submitHandler} className="form-container" >
                        <label>
                            <p style={{...Style,display:displayuserName}}>Username is Required</p>
                            <input required={true}  type="text" placeholder="Username *" value={User.userName}  onChange={(e) =>{
                                setUserDetails({...User,userName:e.target.value})
                            }}/>
                        </label>
                        <label>
                            <p style={{...Style,display:displaypassword}}>Password is Required</p>
                            <input required={true}  value={User.lastName} onChange={(e) =>{
                                setUserDetails({...User,password:e.target.value});
                            }} type="password" placeholder="Password *"  />
                        </label>
                        <label>
                            <p style={{...Style,display:displayEmail}}>Email is Required</p>
                            <input required={true} type="email" placeholder="Email *" value={User.email} onChange={(e) =>{
                                setUserDetails({...User,email:e.target.value});
                                }
                            }
                            />
                        </label>
                        <label>
                           <p style={{...Style,display:displayPhone}}>PhoneNumber is Required</p>
                            <input required={true} type="tel" placeholder="Phone Number *" value={User.phoneNumber} onChange={(e) =>{
                                setUserDetails({...User,phoneNumber:e.target.value});
                                }
                            }/>
                        </label>
                        <label id="opt-in-label">
                            <input type="checkbox" required={true} />
                            <p> Opt in to mobile messages from #TeamARM about the events.</p>
                        </label>
                        <button type="submit" className="signup-submit" >Submit</button>
                    </form>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}