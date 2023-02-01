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

function App() {
  let [name,setName] = useState("");
  let [lastName,setLastName] = useState("");
  return (
    <div className="App" >
          <Header name={name} lastName={lastName}/>       
          <Routes>
              <Route path='/' element={name === "" ? <FirstPage /> : <SecondPage />}/>                   
              <Route path='terms' element={<Terms />}/>
              <Route path="privacy" element={<Privacy />}/>
              <Route path='signup' 
              element={<SignUp 
                name={name} setName={setName} 
                lastName={lastName} setLastName={setLastName}/>} 
                />
             
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
