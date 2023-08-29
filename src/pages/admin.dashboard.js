import React from "react";
import AdminSidebar from "../components/adminSidebar";



const AdminDashboardNew =()=>{
  
return(
          <>
          <AdminSidebar name="Dashborad" />
          <div class="block rounded-lg  h-screen z-1 bg-gray-50 ml-50  p-7 m-11 dark:bg-grey-100">

<div class="grid grid-cols-2 mt-10 ">

  <div class="bg-red-300">
    <h5>1</h5>
  </div>

  <div class="bg-blue-300">
    <h5>2</h5>
  </div>

  <div class="bg-green-300">
    <h5>3</h5>
  </div>

  <div class="bg-orange-300">
    <h5>4</h5>
  </div>

  
</div>
</div>

          </>
        )
        
    

}

export default AdminDashboardNew

