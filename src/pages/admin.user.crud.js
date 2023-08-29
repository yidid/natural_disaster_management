import React from "react";
import AdminSidebar from "../components/adminSidebar";
import UserServices from "../services/UserServices";
import { useState,useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';

  

const AdminUsersCRUD = ()=>{
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
  
    useEffect(() => {
      retrieveUser();
    }, []);
  
    const onChangeSearchTitle = e => {
      const searchTitle = e.target.value;
      setSearchTitle(searchTitle);
    };
  
    const retrieveUser = () => {
      UserServices.getAll()
        .then(response => {
          setUsers(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    const refreshList = () => {
      retrieveUser();
      setCurrentUser(null);
      setCurrentIndex(-1);
    };
  
 
  
   
  
    const findByTitle = () => {
      UserServices.findByTitle(searchTitle)
        .then(response => {
          setUsers(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
    return(
      
        <div>
             <link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet"></link>
             
            
             <AdminSidebar name="users"/>
           
           
          

             <div class="h-full">
      
    
             <div class="w-screen max-w-4xl mx-auto my-4 bg-white shadow-lg rounded-sm border border-gray-200 ">
          <header class="px-5 py-4 border-b border-gray-100">
          <h2 class="font-semibold text-gray-800 mb-5">Users</h2>
          <div className="mb-3">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-gray-100 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
              placeholder="Search..."
              aria-label="Search"
              value={searchTitle}
              onChange={onChangeSearchTitle}
              aria-describedby="button-addon1" />

            <button
              className="relative z-[2] flex items-center rounded-r bg-blue-500 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-blue-950 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
              type="button"
              id="button-addon1"
              onClick={findByTitle}
              data-te-ripple-init
              data-te-ripple-color="light">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="white"
                className="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
            
          </header>
          <div class="p-5">
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
                              <th class="p-2 whitespace-nowrap">
                                  <div class="font-semibold text-center">Actions</div>
                              </th>
                          </tr>
                      </thead>
                      <tbody class="text-sm divide-y divide-gray-100">
                      {users &&
            users.map((user, index) => (
                          <tr>
                            
                         
                              <td class="p-2 whitespace-nowrap">
                                  <div class="flex items-center">
                                      <div class="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3"><img class="rounded-full" src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg" width="40" height="40" alt="Alex Shatov"></img></div>
                                      <div class="font-medium text-gray-800">{user.name}</div>
                                  </div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left">{user.email}</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-left font-medium text-green-500">Fire Fighter</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class="text-center">{user.phone}</div>
                              </td>
                              <td class="p-2 whitespace-nowrap">
                                  <div class=" text-center">{user.address}</div>
                              </td>
                              <td>
                              <a href="#" class="text-gray-500 hover:text-gray-900 mr-2">
								<i class="material-icons-outlined  text-base">people</i>
							</a>
                            <a href="#" class="text-green-500 hover:text-green-900 mr-2">
                            <i class="material-icons-outlined text-base">edit</i>
							</a>
                            <a href="#" class="text-red-500 hover:text-red-900 mr-2">
                            <i class="material-icons-round text-base">delete_outline</i>
							</a>
                           

                              </td>
                                

                              
                          </tr>
                            ))}


                         

                            
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  </div>




   

</div>
                
 
             
             
          
         
        
        
    )
}

export default AdminUsersCRUD