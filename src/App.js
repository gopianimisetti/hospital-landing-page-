import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './components/home';
import Appointment from './components/appointment';
import Login from './components/login';
import Submit from './components/submit';
import Patientdetails from './components/patientdetails';
import Logout from './components/logout'; 

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/appointment" element={<Appointment />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/patientdetails" element={<Patientdetails loggedIn={loggedIn} onLogout={handleLogout} />} />
        <Route path="/logout" element={<Logout />} /> 
      </Routes>
    </Router>
  );
}

export default App;







