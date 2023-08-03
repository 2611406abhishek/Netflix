import React from 'react'
import './app.scss';
import Home from './pages/home/Home'
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from './authContext/AuthContext';

const App = () => {

  const {user} =  useContext(AuthContext);

  
  return (
    <Router>

     <Routes>
       <Route exact path="/" element={user ? <Home/> :<Register/>} />
       <Route  path="/register" element={!user ? <Home/> : <Register/>} />
       <Route  path="/login" element={ !user ? <Home/> : <Login/>} />
       {
        user && (
          <>
          <Route  path="/movies" element={<Home type="movie"/>} />
          <Route  path="/series" element={<Home type="series"/>} />
          <Route  path="/watch" element={<Watch/>} />
          </>
        )
        
       }
       
     </Routes>

    </Router>

  )
}

export default App