import './login.css'
import close from '../../Assets/close.png'
import orgLogo from '../../Assets/orgLogo.png'
export default function Login({setLogIn,User,setUserDetails}){
    
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
                }}><img src={close} alt="close"/></button>
                </div>
                <div>
                    <form onSubmit = {(e) =>{
                        e.preventDefault();
                        if(User.userName === "" || User.password === ""){
                           setLogIn(true) 
                        }else{
                            setLogIn(false)
                        }
                    }}className='login-form'>
                        <label>
                            <input value={User.userName} onChange={(e)=>{
                                setUserDetails({...User,userName: e.target.value})
                            }} type="text" placeholder='Username'/>
                        </label>
                        <label>
                            <input value={User.password} onChange={(e) =>{
                                setUserDetails({...User,password:e.target.value})
                            }} type="password" placeholder='Password'/>
                        </label>
                        <button>Log In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}