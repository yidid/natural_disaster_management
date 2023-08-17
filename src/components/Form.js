
import React from "react";
import { Link } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';


const CashDonation = () => {
  
      
    return(
        <>
        <div className="block rounded-lg z-1 bg-gray-50 ml-32 mr-32 mb-96 p-2 m-11 dark:bg-grey-100 justify-center content-center">
      
<form>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className=" font-serif text-4xl leading-7 pt-0 text-gray-900">Add your information</h2>


      <div class="border-b border-gray-900/10 pb-12">
     
      <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div class="sm:col-span-3">
          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Account</label>
          <div class="mt-2">
          <select data-te-select-init className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
  <option value="1">CBE</option>
  <option value="2">AWASH</option>
  <option value="3">ENAT</option>

</select>
            
          </div>
        </div>

        <div class="sm:col-span-3">
          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900"> Amount </label>
          <div class="mt-2">
            <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name </label>
          <div className="mt-2">
            <input id="name"
             name="name"
              type="text"
            
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Phone </label>
          <div className="mt-2">
            <input id="name"
             name="name"
              type="text"
            
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Description </label>
          <div className="mt-2">
            <input id="name"
             name="name"
              type="text"
            
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
    <button type="submit"   className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
   
  </div>
  </div>
  </div>
</form>


        </div>
        </>

    )
}
export default CashDonation
