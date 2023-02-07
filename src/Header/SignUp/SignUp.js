import validator from "validator";
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
    let [errorPassword, seterrorPassword] = useState("");
    let [errorEmail,setErrorEmail] = useState("");
    let Style = {
        color:"red",
        fontSize:"14px",
        lineHeight:"0",
        marginLeft:"5px"
    }
   async function submitHandler(e){
    e.preventDefault();
    if(errorPassword === "Is Not Strong Password" || errorEmail === "Please,enter a valid Email!" || (User.userName === "" || User.password === "" || User.email === "" || User.phoneNumber === "")){
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
    }
    
   }
   const passwordChecker = () =>{
    if(User.password.length === 0){
        seterrorPassword(false)
       }else{
        if(validator.isStrongPassword(User.password,{
            minLength: 6,
            minLowercase: 1,
            minUppercase: 1,
            minNumbers:0,
            minSymbols:0
        })){
            seterrorPassword("true")
            
        }else{
            seterrorPassword("Is Not Strong Password")
        }
       }
   }

   function emailChecker(){
   if(User.email.length === 0){
    setErrorEmail(false)
   }else{
    if(validator.isEmail(User.email)){
        setErrorEmail("true")
    }else{
        setErrorEmail("Please,enter a valid Email!")
    }
   }
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
                            <input   type="text" placeholder="Username *" value={User.userName}  onChange={(e) =>{
                                setUserDetails({...User,userName:e.target.value})
                                e.preventDefault();
                            }}/>
                        </label>
                        <label>
                            <p style={{...Style,display:displaypassword}}>Password is Required</p>
                            <input   value={User.lastName} onChange={(e) =>{
                                setUserDetails({...User,password:e.target.value});
                                e.preventDefault();
                                passwordChecker();
                            }} type="password" placeholder="Password *"  />
                            {errorPassword === "true" ?  "" : <p style={{...Style,fontSize:"10px"}}>{errorPassword}</p>}
                        </label>
                        <label>
                            <p style={{...Style,display:displayEmail}}>Email is Required</p>
                            <input  type="email" placeholder="Email *" value={User.email} onChange={(e) =>{
                                setUserDetails({...User,email:e.target.value});
                                emailChecker();  
                                }
                            }
                            />
                            {errorEmail === "true" ?  "" : <p style={{...Style,fontSize:"10px"}}>{errorEmail}</p>}
                        </label>
                        <label>
                           <p style={{...Style,display:displayPhone}}>PhoneNumber is Required</p>
                            <input  type="number"  placeholder="Phone Number *" value={User.phoneNumber} onChange={(e) =>{
                                setUserDetails({...User,phoneNumber:e.target.value});
                                e.preventDefault();
                                }
                            }/>
                        </label>
                        <label id="opt-in-label">
                            <input type="checkbox"  />
                            <p> Opt in to mobile messages from #TeamARM about the events.</p>
                        </label>
                        <button type="submit" className="signup-submit" onClick={(e)=>{
                            User.userName === "" ? setDisplayuserName("block") : setDisplayuserName("none");
                            User.password === "" ? setDisplaypassword("block") : setDisplaypassword("none");
                            User.email === "" ? setDisplayEmail("block") : setDisplayEmail("none");
                            User.phoneNumber === "" ? setDisplayPhone("block") : setDisplayPhone("none");
                          
                           
                        }}>Submit</button>
                    </form>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}