
import React from "react";
import { Link } from "react-router-dom";
import MaterialService from "../services/MaterialService";
import { useState } from "react";


import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./navbar";


const MaterialDonation = () => {
  const initialMaterialState = {
    id: null,
    name: "",
    phone: "",
    material: "",
    reason:"",
  
  };
  const [material, setMaterial] = useState(initialMaterialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMaterial({ ...material, [name]: value });
  };

  const saveMaterial = () => {
    var data = {
      name: material.name,
      phone: material.phone,
      material: material.material,
      reason: material.reason,
    
    };

    MaterialService.create(data)
      .then((response) => {
        setMaterial({
          id: response.data.id,
          name: response.data.name,
          phone: response.data.phone,
          material: response.data.material,
          reason: response.data.reason,
          
        });

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  
      
    return(
        <>
        <NavBar/>
        <div className="block rounded-lg z-1 bg-gray-50 ml-32 mr-32 mb-96 p-24 m-11 dark:bg-grey-100 justify-center content-center">
      
<form>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className=" font-serif text-4xl leading-7 pt-0 text-gray-900">Request for material donation</h2>


      <div class="border-b border-gray-900/10 pb-12">
     
     

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
       

     

        <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name </label>
          <div className="mt-2">
            <input id="name"
             name="name"
              type="text"
              value={material.name}
              onChange={handleInputChange}
            
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Phone </label>
          <div className="mt-2">
            <input id="phone"
             name="phone"
              type="text"
              value={material.phone}
              onChange={handleInputChange}
            
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Materials </label>
          <div className="mt-2">
            <input id="material"
             name="material"
              type="text"
              value={material.material}
              onChange={handleInputChange}
            
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Reason </label>
          <div className="mt-2">
            <input id="reason"
             name="reason"
              type="text"
              value={material.reason}
              onChange={handleInputChange}
            
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>


        </div>
        </div>

    
   

   
     
  <div className="mt-6 flex items-center justify-end gap-x-6">
  <Link to='/ask'>
    <button type="button"
  
    
     className="text-sm  font-semibold leading-6 text-gray-900">Cancel</button>
     </Link>
    <button   
    type="submit"
    onClick={saveMaterial}
      className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
   
  </div>
  </div>
  </div>
</form>


        </div>
        </>

    )
}
export default MaterialDonation
