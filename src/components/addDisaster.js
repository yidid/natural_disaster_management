
import React from "react";
import { useState } from "react";
import NavBar from "../components/navbar";
import DisasterService from "../services/DisasterService";


const AddDisaster = () => {
    const initialDisasterState = {
        id: null,
        title: "",
        description: "",
        published: false
      };
      const [disaster, setDisaster] = useState(initialDisasterState);
     
    
      const handleInputChange = event => {
        const { name, value } = event.target;
        setDisaster({ ...disaster, [name]: value });
      };
    
      const saveDisaster = () => {
        var data = {
          title: disaster.title,
          description: disaster.description
        };
    
        DisasterService.create(data)
          .then(response => {
            setDisaster({
              id: response.data.id,
              name: response.data.name,
              title: response.data.title,
              description: response.data.description,
              published: response.data.published
            });
           
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
      };
    
      
    return(
        <>
        <NavBar/>
        <div className="block rounded-lg z-1 bg-gray-50 ml-32 mr-32 mb-96 p-12 m-11 dark:bg-grey-100 justify-center content-center">
      
<form>
  <div className="space-y-12">
    <div className="border-b border-gray-900/10 pb-12">
      <h2 className=" font-serif text-4xl leading-7 text-gray-900">Add Disaster</h2>
   

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div className="sm:col-span-4">
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input id="name"
             name="name"
              type="text"
              value={disaster.name}
              onChange={handleInputChange}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>
        <div className="sm:col-span-4">
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Title</label>
          <div className="mt-2">
            <input id="title" 
            name="title" 
            type="text"
            value={disaster.title}
            onChange={handleInputChange}
             autocomplete="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
          </div>
        </div>

        <div className="col-span-full">
          <label for="about" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <div className="mt-2">
            <textarea id="about"
             name="about" 
             value={disaster.description}
             onChange={handleInputChange}
            rows="3" className="block w-8/12 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-sm:text-sm sm:leading-6"></textarea>
          </div>
          
        </div>

        

      
      </div>
      <div className="col-span-full">
          <label for="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Add Photo</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm leading-6 text-gray-600">
                <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"></input>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
     

   

  <div className="mt-6 flex items-center justify-end gap-x-6">
    <button type="button"
    onClick={saveDisaster}
     className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
  </div>
  </div>
  </div>
</form>


        </div>
        </>

    )
}
export default AddDisaster
