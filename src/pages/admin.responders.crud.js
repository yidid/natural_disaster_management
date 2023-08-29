import React from "react";
import AdminSidebar from "../components/adminSidebar";



const AdminRespondersCRUD = ()=>{

  
    return(
      
        <div>
             
            
             <AdminSidebar name="Responders"/>
           
             <div class="block rounded-lg  z-1 bg-gray-50 ml-64 mb-96 p-24 m-5 dark:bg-grey-100">

             <div class="h-full">
      
      <div class="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border  border-gray-200">
          <header class="px-5 py-4 border-b border-gray-100">
              <h2 class="font-semibold text-gray-800">Fast Responders</h2>
          </header>
          <div class="p-3">
              <div class="overflow-x-auto">
                  <table class="table-auto w-full">
                      <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                          <tr>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-left">Name</div>
                              </th>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-left">Email</div>
                              </th>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-left">JOB</div>
                              </th>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-center">Phone</div>
                              </th>
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-center">Address</div>
                              </th>
                          </tr>
                      </thead>
                      <tbody class="text-sm divide-y divide-gray-100">
                          <tr>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></img></div>
                                      <div class="font-medium text-gray-800">Alex Shatov</div>
                                  </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left">alexshatov@gmail.com</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-green-500">Fire Fighter</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-center">0909087587</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class=" text-center">CMC</div>
                              </td>
                          </tr>
                          <tr>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg" width="40" height="40" alt="Philip Harbach"></img></div>
                                      <div class="font-medium text-gray-800">Philip Harbach</div>
                                  </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left">philip.h@gmail.com</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-green-500">Fire fighter</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-center">0909087587</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class=" text-center">CMC</div>
                              </td>
                          </tr>
                          <tr>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg" width="40" height="40" alt="Mirko Fisuk"></img></div>
                                      <div class="font-medium text-gray-800">Mirko Fisuk</div>
                                  </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left">mirkofisuk@gmail.com</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-green-500">Insurance</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-center">0909087587</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class=" text-center">CMC</div>
                              </td>
                          </tr>
                          <tr>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg" width="40" height="40" alt="Olga Semklo"></img></div>
                                      <div class="font-medium text-gray-800">Olga Semklo</div>
                                  </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left">olga.s@cool.design</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-green-500">Responder</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-center">0909087587</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class=" text-center">CMC</div>
                              </td>
                          </tr>
                          <tr>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg" width="40" height="40" alt="Burak Long"></img></div>
                                      <div class="font-medium text-gray-800">Burak Long</div>
                                  </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left">longburak@gmail.com</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-green-500">Nurse</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-center">0909087587</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class=" text-center">Bole</div>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>



   

</div>
                
 
               </div>
             
          
         
        
        
    )
}

export default AdminRespondersCRUD