import './login.css'
import orgLogo from '../../Assets/orgLogo.png'
export default function Login(){
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
                </div>
                <div>
                    <form className='login-form'>
                        <label>Username:
                            <input type="text" />
                        </label>
                        <label>Password:
                            <input type="password" />
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}