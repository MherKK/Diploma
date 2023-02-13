import './login.css'
import close from '../../Assets/close.png'
import orgLogo from '../../Assets/orgLogo.png'
import { useState } from 'react';




export default function Login({setLogIn,AllValue,setLoggedUserName}){
    let root2 = document.body;
    let [userName,setUserName] = useState("");
    let [password,setPassword] = useState("");
    
    return (
        <div className='login-container'>
            <div className='login_container-handler'>
                <div className="login-container_top">
                    <img alt="" src={orgLogo} />
                    <h3>#TEAM
                        <span style={{color:"red"}}>A</span>
                        <span style={{color:"blue"}}>R</span>
                        <span style={{color:"orange"}}>M</span>
                    </h3>
                    <button className='sign-up_close' onClick={() =>{
                    setLogIn(false)
                    root2.style.overflowY= "visible";
                }}><img src={close} alt="close"/></button>
                </div>
                <div>
                  
                    <form onSubmit = {(e) =>{
                        e.preventDefault();
                        if(userName === "" || password === ""){
                           setLogIn(true) 
                        }else{
                            setLogIn(false)
                            root2.style.overflowY= "visible"; 
                        }
                        if(AllValue[0].Username === userName){
                            setLoggedUserName(userName);
                        }else{
                            setLoggedUserName("Wrong Noob")
                        }
                    }}className='login-form'>
                        <label>
                            <input value={userName} onChange={(e)=>{
                               setUserName(e.target.value)
                            }} type="text" placeholder={AllValue[0].Username}/>
                        </label>
                        <label>
                            <input value={password} onChange={(e) =>{
                               setPassword(e.target.value)
                            }} type="password" placeholder='Password'/>
                        </label>
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}