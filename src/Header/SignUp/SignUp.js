import close from '../../Assets/close.png'
import validator from "validator";
import { useEffect, useState } from "react";
import Footer from "../../Footer/Footer"
import orgLogo from "../../Assets/orgLogo.png"
import "./signup.css"
import {dataRef} from "../../firebase"
import { serverTimestamp } from "firebase/firestore";
export default function SignUp({setSignUp,setLoggedUserName,AllValue}){
  
    let root2 = document.body;
    let [error,setError] = useState("none");
    let [errorPassword, seterrorPassword] = useState("");
    let [user,setUser] = useState({
        userName: "",
        email:"",
        password:"",
        phoneNumber:""
    });
    let [takenUserName,setTakenUserName] = useState("none");
    let [takenEmail,setTakenEmail] = useState("none");
    let [errorEmail,setErrorEmail] = useState("");
    let Style = {
        color:"red",
        fontSize:"14px",
        lineHeight:"0",
        marginLeft:"5px"
    }

    useEffect( () =>{
        for(let i=0; i<AllValue.length ; i++){
            if(AllValue[i].Username === user.userName){
                setTakenUserName("block")
                break
            }else{
                setTakenUserName("none")
            }
        }
        for(let i=0; i<AllValue.length ; i++){
            if(AllValue[i].Email === user.email){
                setTakenEmail("block")
                break
            }else{
                setTakenEmail("none")
            }
        }
    },[user.userName,AllValue,user.email])

    const passwordChecker = () =>{
        if(user.password.length === 0){
            seterrorPassword(false)
           }else{
            if(validator.isStrongPassword(user.password,{
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
       if(user.email.length === 0){
        setErrorEmail(false)
       }else{
        if(validator.isEmail(user.email)){
            setErrorEmail("true")
        }else{
            setErrorEmail("Please,enter a valid Email!")
        }
       }
       }


    function submitHandler(e){
    e.preventDefault();
    if(user.userName && user.password && user.email && user.phoneNumber && errorPassword === "true" && errorEmail === "true" && takenUserName === "none" && takenEmail === "none"){
        dataRef.ref().child("User").push({
            Username:user.userName,
            Password: user.password,
            Email: user.email,
            PhoneNumber: user.phoneNumber,
            timeStamp: serverTimestamp()
        })
        setLoggedUserName(user.userName)
        setSignUp(true) 
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
                        <p style={{...Style,display:error}}>Please fill all required fields</p>
                        <label>
                            <p style={{...Style,display:takenUserName}}>Username is Taken</p>
                            <input   type="text" placeholder="Username *" value={user.userName}  onChange={(e) =>{
                                setUser({...user,userName:e.target.value})
                                e.preventDefault();    
                            }}/>
                        </label>
                        <label>
                            <input   value={user.password} onChange={(e) =>{
                                setUser({...user,password:e.target.value})
                                e.preventDefault();
                                passwordChecker();
                            }} type="password" placeholder="Password *"  />
                            {errorPassword === "true" ?  "" : <p style={{...Style,fontSize:"10px"}}>{errorPassword}</p>}
                        </label>
                        <label>
                            <p style={{...Style,display:takenEmail}}>There is already an account with this email</p>
                            <input  type="email" placeholder="Email *" value={user.email} onChange={(e) =>{
                                setUser({...user,email:e.target.value})
                                emailChecker();  
                                }
                            }
                            />
                            {errorEmail === "true" ?  "" : <p style={{...Style,fontSize:"10px"}}>{errorEmail}</p>}
                        </label>
                        <label>
                            <input  type="number"  placeholder="Phone Number *" value={user.phoneNumber} onChange={(e) =>{
                                setUser({...user,phoneNumber:e.target.value})
                                e.preventDefault();
                                }
                            }/>
                        </label>
                        <label id="opt-in-label">
                            <input type="checkbox"  />
                            <p> Opt in to mobile messages from #TeamARM about the events.</p>
                        </label>
                        <button type="submit" className="signup-submit" onClick={(e)=>{
                            if(user.userName === "" ||  user.password === "" || user.email === "" ||  user.phoneNumber === ""){
                                 setError("block") 
                                 setSignUp(false) 
                            }else{
                            setError("none");
                            }
                        }}>Submit</button>
                    </form>
                   
                </div>
            </div>
            <Footer />
        </div>
    )
}