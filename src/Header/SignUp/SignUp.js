import close from '../../Assets/close.png'
import validator from "validator";
import { useState } from "react";
import Footer from "../../Footer/Footer"
import orgLogo from "../../Assets/orgLogo.png"
import "./signup.css"
import {dataRef} from "../../firebase"
import { serverTimestamp } from "firebase/firestore";
export default function SignUp({setSignUp,setLoggedUserName,AllValue}){
  
    let root2 = document.body;
    let [displayuserName,setDisplayuserName] = useState("none");
    let [displaypassword,setDisplaypassword] = useState("none");
    let [displayEmail,setDisplayEmail] = useState("none");
    let [displayPhone,setDisplayPhone] = useState("none");
    let [errorPassword, seterrorPassword] = useState("");
    let [userName,setUserName] = useState("");
    let [password,setPassword] = useState("");
    let [email,setEmail] = useState("");
    let [phoneNumber,setPhoneNumber] = useState("");
    let [takenUserName,setTakenUserName] = useState("none");

    let [errorEmail,setErrorEmail] = useState("");
    let Style = {
        color:"red",
        fontSize:"14px",
        lineHeight:"0",
        marginLeft:"5px"
    }
   async function submitHandler(e){
    e.preventDefault();
    if(errorPassword === "Is Not Strong Password" || errorEmail === "Please,enter a valid Email!" || ( userName === "" || password === "" || email === "" || phoneNumber === "")){
         setSignUp(false)
        
    }else{
        root2.style.overflowY = "visible";  
        setSignUp(true)
        setLoggedUserName(userName)  
    }

    if(userName && password && email && phoneNumber){
        dataRef.ref().child("User").push({
            Username:userName,
            Password: password,
            Email: email,
            PhoneNumber: phoneNumber,
            timeStamp: serverTimestamp()
        })
    }
    
   }
   const passwordChecker = () =>{
    if(password.length === 0){
        seterrorPassword(false)
       }else{
        if(validator.isStrongPassword(password,{
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
   if(email.length === 0){
    setErrorEmail(false)
   }else{
    if(validator.isEmail(email)){
        setErrorEmail("true")
    }else{
        setErrorEmail("Please,enter a valid Email!")
    }
   }
   }

   
    return (
        <div className="signup-container">
            <div className="signup-container_top">
            
                <img alt="" src={orgLogo} />
                <h3>#TEAM
                    <span style={{color:"red"}}>A</span>
                    <span style={{color:"blue"}}>R</span>
                    <span style={{color:"orange"}}>M</span>
                </h3>
                <button className='sign-up_close' onClick={() =>{
                    setSignUp(true)
                    root2.style.overflowY= "visible";
                }}><img src={close} alt="close"/></button>
            </div>
            <div className="signup-container-bigmiddle">
                <div className="signup-container_bottom">
                    <p className="keep-up">Keep Up with #TeamARM</p>
                    <p className="teamarm-plans">#TeamARM has big plans for 2023. Sign up today to hear about cleanup events you can join and our projects around the world</p>
                    <p className="signup-tojoin">SIGN UP TO JOIN EVENTS</p>
                    <form onSubmit={submitHandler} className="form-container" >
                        <label>
                            <p style={{...Style,display:displayuserName}}>Username is Required</p>
                            <p style={{...Style,display:takenUserName}}>Username is Taken</p>
                            <input   type="text" placeholder="Username *" value={userName}  onChange={(e) =>{
                                setUserName(e.target.value)
                                e.preventDefault();
                                AllValue.map(value =>{
                                    if(value.Username ===userName){
                                     return   setTakenUserName("block")
                                    }else{
                                      return  setTakenUserName("none")
                                      
                                    }
                                })
                            }}/>
                        </label>
                        <label>
                            <p style={{...Style,display:displaypassword}}>Password is Required</p>
                            <input   value={password} onChange={(e) =>{
                                setPassword(e.target.value);
                                e.preventDefault();
                                passwordChecker();
                            }} type="password" placeholder="Password *"  />
                            {errorPassword === "true" ?  "" : <p style={{...Style,fontSize:"10px"}}>{errorPassword}</p>}
                        </label>
                        <label>
                            <p style={{...Style,display:displayEmail}}>Email is Required</p>
                            <input  type="email" placeholder="Email *" value={email} onChange={(e) =>{
                                setEmail(e.target.value);
                                emailChecker();  
                                }
                            }
                            />
                            {errorEmail === "true" ?  "" : <p style={{...Style,fontSize:"10px"}}>{errorEmail}</p>}
                        </label>
                        <label>
                           <p style={{...Style,display:displayPhone}}>PhoneNumber is Required</p>
                            <input  type="number"  placeholder="Phone Number *" value={phoneNumber} onChange={(e) =>{
                                setPhoneNumber(e.target.value);
                                e.preventDefault();
                                }
                            }/>
                        </label>
                        <label id="opt-in-label">
                            <input type="checkbox"  />
                            <p> Opt in to mobile messages from #TeamARM about the events.</p>
                        </label>
                        <button type="submit" className="signup-submit" onClick={(e)=>{
                            userName === "" ? setDisplayuserName("block") : setDisplayuserName("none");
                            password === "" ? setDisplaypassword("block") : setDisplaypassword("none");
                            email === "" ? setDisplayEmail("block") : setDisplayEmail("none");
                            phoneNumber === "" ? setDisplayPhone("block") : setDisplayPhone("none");
                            
                           console.log(AllValue);
                           console.log(takenUserName);
                        }}>Submit</button>
                    </form>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}