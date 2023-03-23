import './App.css';
import Header from "./Header/Header"
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import Terms from './Footer/Terms/Terms';
import Privacy from './Footer/Privacy/Privacy';
import SignUp from './Header/SignUp/SignUp';
import SecondPage from './SecondPage/SecondPage';
import { useRef, useState } from 'react';
import Login from './Header/LogIn/Login';
import { useEffect } from 'react';
import { dataRef } from './firebase';
import DonatorFullList from './main/donatorslist/donatorfulllist';
import Events from './SecondPage/Events/events';

function App() {
let [savedData,setSavedData] = useState(localStorage.getItem("name") || "")
let [signup, setSignUp] = useState(true);
let [login,setLogIn] = useState(false);
let [allValue,setAllValue] = useState([]);
const donationRef = useRef(null);

//get data from firestore
useEffect(() =>{
    dataRef.ref().child("User").on('value', data =>{
        const getData = Object.values(data.val());
        setAllValue(getData);
    })
    
},[])
//function to check for inactivity
const checkForInactivity = () => {
  const expireTime = localStorage.getItem("expireTime");
  if(expireTime < Date.now()){
    setSavedData("");
    localStorage.setItem("name","");
  }
}

//function to update expire time
const updateExpiredTime = () => {
  const expireTime = Date.now() + 600000;

  localStorage.setItem("expireTime",expireTime);
}

// use effect to set interval to check for inactivity
useEffect(() =>{
  const interval = setInterval(() => {
    checkForInactivity();
  },1000);

  return () => clearInterval(interval);
},[])

//update expire time on any user
useEffect(() =>{
  //set Initial expire time
  updateExpiredTime();

  //set event listeners
  window.addEventListener("click",updateExpiredTime);
  window.addEventListener("keypress",updateExpiredTime);
  window.addEventListener("mousemove",updateExpiredTime);
  window.addEventListener("scroll",updateExpiredTime);

  return () => {
    window.addEventListener("click",updateExpiredTime);
    window.addEventListener("keypress",updateExpiredTime);
    window.addEventListener("mousemove",updateExpiredTime);
    window.addEventListener("scroll",updateExpiredTime);
  }

},[])

  return (
    <div className="App" >
         {signup === true ? 
          <Header setSignUp={setSignUp} User={savedData} 
          setLogIn={setLogIn} setSavedData={setSavedData}
          /> :
          <SignUp setSignUp={setSignUp}  setSavedData={setSavedData}
           AllValue = {allValue}
          />}
          {login === false ? "" : <Login setSavedData={setSavedData} setLogIn={setLogIn} AllValue = {allValue}  
           />}       
          <Routes>
              <Route path='/' element={savedData === "" ? <FirstPage donationRef={donationRef} /> : <SecondPage donationRef={donationRef}/>} />                   
              <Route path='terms' element={<Terms />}/>
              <Route path="privacy" element={<Privacy />}/>
              <Route path='donatorfulllist' element={<DonatorFullList />} />
              <Route path='events' element={savedData === "" ? <FirstPage /> : <Events userDetails = {allValue} />} />            
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
