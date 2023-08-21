import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Newpage from './pages/disasters';
import Community from './pages/Community_chat';
import Dashboard from './pages/dashboard';
import Donation from './pages/donation';
import FastResponders from './pages/responders';
import DisastersUser from './pages/user.disaster';
import ChatUser from './pages/user.chat';
import UserDonation from './pages/user.donation';
import AddDisaster from './components/addDisaster';
import AskDonation from './pages/user.ask.donation';
import CashDonation from './pages/user.cash';
import MaterialDonation from './components/Material';
import ResponderList from './pages/user.responders';

function App() {
  return (
    <Router>
    <Routes>
    <Route path='/community' element={<Community/>}></Route>
    <Route path='/disaster' element={<Newpage />}></Route>
    <Route path='/' element={<Dashboard />}></Route>
    <Route path='/donation' element={<Donation />}></Route>
    <Route path='/responders' element={<FastResponders />}></Route>
    <Route path='/user' element={<DisastersUser />}></Route>
    <Route path='/userchat' element={<ChatUser />}></Route>
    <Route path='/userDonation' element={<UserDonation />}></Route>
    <Route path='/disasters' element={<AddDisaster />}></Route>
    <Route path='/ask' element={<AskDonation />}></Route>
    <Route path='/donations' element={<CashDonation />}></Route>
    <Route path='/material' element={<MaterialDonation />}></Route>
    <Route path='/userResponders' element={< ResponderList />}></Route>
   

   </Routes>
   </Router>  
     
    
  );
}

export default App;
