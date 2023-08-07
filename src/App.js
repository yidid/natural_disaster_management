import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Newpage from './pages/disasters';
import Community from './pages/Community_chat';
import Dashboard from './pages/dashboard';
import Donation from './pages/donation';
import FastResponders from './pages/responders';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/community' element={<Community/>}></Route>
    <Route path='/disaster' element={<Newpage />}></Route>
    <Route path='/' element={<Dashboard />}></Route>
    <Route path='/donation' element={<Donation />}></Route>
    <Route path='/responders' element={<FastResponders />}></Route>
   </Routes>
   </Router>  
     
    
  );
}

export default App;
