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

let [signup, setSignUp] = useState(true);
let [login,setLogIn] = useState(false);
let [allValue,setAllValue] = useState([]);
let [loggedUserName,setLoggedUserName] = useState("");
let [donationHeight, setDonationHeight] = useState(0);
const donationRef = useRef(null);
useEffect(() =>{
    dataRef.ref().child("User").on('value', data =>{
        const getData = Object.values(data.val());
        setAllValue(getData);
        setDonationHeight(donationRef.current.clientHeight);
    })
},[])
  return (
    <div className="App" >
         {signup === true ? 
          <Header setSignUp={setSignUp} User={loggedUserName} 
          setLogIn={setLogIn} donationHeight={donationHeight}
          /> :
          <SignUp setSignUp={setSignUp} 
          setLoggedUserName={setLoggedUserName} AllValue = {allValue}
          />}
          {login === false ? "" : <Login setLoggedUserName={setLoggedUserName} setLogIn={setLogIn} AllValue = {allValue}  
           />}       
          <Routes>
              <Route path='/' element={loggedUserName === "" ? <FirstPage donationRef={donationRef} /> : <SecondPage donationRef={donationRef}/>} />                   
              <Route path='terms' element={<Terms />}/>
              <Route path="privacy" element={<Privacy />}/>
              <Route path='donatorfulllist' element={<DonatorFullList />} />
              <Route path='events' element={<Events />} />            
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
