
import React from "react";
import { useState } from "react";
import NavBar from "../components/navbar";
import DisasterService from "../services/DisasterService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const AddDisaster = () => {
    const initialDisasterState = {
        id: null,
        name:"",
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
          name:disaster.name,
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
            showToastMessage();
           
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
         
        
      };


      const showToastMessage = () => {
        toast.warning(' You have canceled!', {
            position: toast.POSITION.TOP_RIGHT
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
          <input id="description" 
            name="description" 
            type="text"
            value={disaster.description}
            onChange={handleInputChange}
             autocomplete="description" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-100 sm:text-sm sm:leading-6"></input>
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
    <button type="submit" onClick={saveDisaster}  className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
    <ToastContainer />
  </div>
  </div>
  </div>
</form>


        </div>
        </>

    )
}
export default AddDisaster
