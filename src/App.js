import './App.css';
import Header from "./Header/Header"
import Footer from './Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import FirstPage from './FirstPage';
import Terms from './Footer/Terms/Terms';
import Privacy from './Footer/Privacy/Privacy';
import SignUp from './Header/SignUp/SignUp';

function App() {
  return (
    <div className="App" >
          <Header />       
          <Routes>
              <Route path='/' element={<FirstPage />}>                  
              </Route>
              <Route path='terms' element={<Terms />}/>
              <Route path="privacy" element={<Privacy />}/>
              <Route path='signup' element={<SignUp />} />
          </Routes>
          <Footer />
    </div>
  );
}

export default App;
