
import React from "react";
import { useState } from "react";


import AdminSidebar from "../components/adminSidebar";

import UserServices from "../services/UserServices";



const AddUsers = () => {
    const initialUserState = {
        id: null,
        name:"",
        phone: "",
        address: "",
        email: " ",
      };
      const [user, setUser] = useState(initialUserState);
     
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
      };
    
      const saveUser = () => {
     
      
      
        var data = {
          name:user.name,
          phone: user.phone,
          email: user.email,
          address: user.address,
         
        };
    
        UserServices.create(data)
          .then(response => {
            setUser({
              id: response.data.id,
              name: response.data.name,
              phone: response.data.phone,
              email: response.data.email,
              address: response.data.address
             
            });

            
            
          
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
         
        
      };


     
    
   
  


      
    return(
        <>
         <AdminSidebar name="Dashborad" />
       
       
      
<form className="w-96 lg:ml-72 md:mx-64 sm:my-36">
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
    <h2 className=" font-serif text-4xl leading-7 text-gray-900">Add User</h2>
   

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input id="name"
             name="name"
              type="text"
              value={user.name}
              onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label for="phone" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input id="phone" 
            name="phone" 
            type="text"
            value={user.phone}
            onChange={handleInputChange}
             autocomplete="phone" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>  
        </div>
        <div className="sm:col-span-4">
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
          <div className="mt-2">
            <input id="email" 
            name="email" 
            type="email"
            value={user.email}
            onChange={handleInputChange}
             autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>  
        </div>

        <div className="col-span-4">
          <label for="about" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
          <div className="mt-2">
          <input id="address" 
            name="address" 
            type="text"
            value={user.address}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
          
        </div>
      </div>
      <div className="col-span-full">
        
<label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="multiple_files">Upload multiple files</label>
<input class="block w-full text-sm text-gray-800 border border-gray-300 rounded-lg cursor-pointer bg-gray-5 focus:outline-none dark:bg-slate-200 dark:border-gray-600 dark:placeholder-gray-400" id="multiple_files" type="file" multiple>
</input>
        </div>
     
  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button"
    
     className="text-sm  font-semibold leading-6 text-gray-900">Cancel</button>
      

    <button type="submit"
     onClick={saveUser
      }
    
     
     className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>

  </div>
  </div>
  </div>
</form>


      
        </>

    )
}
export default AddUsers 

