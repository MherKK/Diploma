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

import { useEffect } from 'react';
import { dataRef } from './firebase';



function App() {

let user ={
  userName:"",
  password:"",
  email:"",
  phoneNumber:""
}
let [userDetails,setUserDetails] = useState(user);
let [signup, setSignUp] = useState(true);
let [login,setLogIn] = useState(false);
let [allValue,setAllValue] = useState([]);
let [loggedUserName,setLoggedUserName] = useState("");
useEffect(() =>{
    dataRef.ref().child("User").on('value', data =>{
        const getData = Object.values(data.val());
        setAllValue(getData);
    })
},[])
  return (
    <div className="App" >
        {loggedUserName}
         {signup === true ? 
          <Header setSignUp={setSignUp} User={userDetails} setLogIn={setLogIn} /> :
          <SignUp setSignUp={setSignUp} 
          User = {userDetails} setUserDetails={setUserDetails}
          />}
          {login === false ? "" : <Login setLoggedUserName={setLoggedUserName} setLogIn={setLogIn} AllValue = {allValue}  
           />}       
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
