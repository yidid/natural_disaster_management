import React from "react";
import AdminSidebar from "../components/adminSidebar";



const AdminDashboardNew =()=>{
  
return(
          <>
          <AdminSidebar name="Dashborad" />
          <div class="block rounded-lg  h-screen z-1 bg-gray-50 ml-50  p-7 m-11 dark:bg-grey-100">

<div class="grid grid-cols-2 mt-10 ">

  <div class="bg-red-300">
    <h5>Disaster</h5>
  </div>

  <div class="bg-blue-300">
    <h5>Customer</h5>
  </div>

  <div class="bg-green-300">
    <h5>Responders</h5>
  </div>

  <div class="bg-orange-300">
    <h5>Donation</h5>
  </div>

  
</div>
</div>

          </>
        )
        
    

}

export default AdminDashboardNew

