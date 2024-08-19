// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import Home from './components/Home';
import './index.css';
import Login from './components/Login';
import Register from './components/Register';
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import AfterLogin from './components/AfterLogin';
import ResetPassword from './components/ResetPassword';
function App() {
  return (
    <div className="">
    <BrowserRouter>
      <Routes>
<Route index element={<Home/>}  />
<Route path='/login' element={<Login/>}  />
<Route path='/register' element={<Register/>}  />
<Route path='/after' element={<AfterLogin/>}  />
<Route path='/reset-password' element={<ResetPassword/>}  />
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;
