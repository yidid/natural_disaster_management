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
import Prepare from './pages/prepare';
import Login from './pages/login';
import Signup from './pages/signup';
import AdminLogin from './pages/adminLogin';
import UserMaterialDonation from './pages/user.materials.donation';
import UserDisasterDetail from './pages/user.detailDisaster';
import AdminDashboardNew from './pages/admin.dashboard';
import AdminRespondersCRUD from './pages/admin.responders.crud';
import AdminUsersCRUD from './pages/admin.user.crud';
import AdminContentCRUD from './pages/admin.content.crud';
import ContentManagerDetails from './pages/content.detail';
import UserDetails from './pages/user.detail';
import ResponderDetails from './pages/responders.detail';
import AddUsers from './pages/add.user';
import AddResponders from './pages/add.responders';
import AddContentManagers from './pages/add.content.manager';
import Disaster from './components/admin.disaster.detail';
import UserDonationDetail from './pages/donation.detail';


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
    <Route path='/prepare' element={<  Prepare />}></Route>
    <Route path='/login' element={< Login />}></Route>
    <Route path='/signup' element={< Signup />}></Route>
    <Route path='/adminLogin' element={< AdminLogin />}></Route>
    <Route path='/materialDonations' element={< UserMaterialDonation />}></Route>
    <Route path='/disasters/:id' element={<Disaster/>}></Route>
    <Route path='/contentmanagers/:id' element={< ContentManagerDetails />}></Route>
    <Route path='/responders/:id' element={< ResponderDetails />}></Route>
    <Route path='user/disasters/:id' element={< UserDisasterDetail />}></Route>
    <Route path='userDonation/donations/:id' element={< UserDonationDetail/>}></Route>
    <Route path='users/:id' element={< UserDetails />}></Route>
    <Route path='/admin' element={< AdminDashboardNew />}></Route>
    <Route path='/manageResponders' element={<AdminRespondersCRUD/>}></Route>
    <Route path='/manageUsers' element={<AdminUsersCRUD/>}></Route>
    <Route path='/manageContentManagers' element={<AdminContentCRUD/>}></Route>
    <Route path='/usersForm' element={<AddUsers/>}></Route>
    <Route path='/respondersForm' element={<AddResponders/>}></Route>
    <Route path='/contentManagersForm' element={<AddContentManagers/>}></Route>
   </Routes>
   </Router>  
     
    
  );
}

export default App;
