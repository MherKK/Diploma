import './App.css';
import Header from "./Header/Header"
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import Terms from './Footer/Terms/Terms';
import Privacy from './Footer/Privacy/Privacy';
import SignUp from './Header/SignUp/SignUp';
import SecondPage from './SecondPage/SecondPage';
import { useState } from 'react';
import Login from './Header/LogIn/Login';




function App() {

let user ={
  userName:"",
  password:"",
  email:"",
  phoneNumber:""
}
let [userDetails,setUserDetails] = useState(user);
let [signup, setSignUp] = useState(true);
let [login,setLoginIn] = useState(false);
  return (
    <div className="App" >
         {signup === true ? 
          <Header setSignUp={setSignUp} User={userDetails} setLoginIn={setLoginIn} /> :
          <SignUp setSignUp={setSignUp} 
          User = {userDetails} setUserDetails={setUserDetails}
          />}
          {login === false ? <p>Hey</p> : <Login setLoginIn={setLoginIn}/>}       
          <Routes>
              <Route path='/' element={userDetails.userName === "" ? <FirstPage /> : <SecondPage />}/>                   
              <Route path='terms' element={<Terms />}/>
              <Route path="privacy" element={<Privacy />}/>            
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
