import React from "react";
import { useState, useEffect } from "react";
import MaterialService from "../services/MaterialService";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

const UserMaterialDonation = () => {
  const [materials, setMaterials] = useState([]);
  const [currentMaterial, setCurrentMaterial] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveMaterial();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveMaterial = () => {
    MaterialService.getAll()
      .then(response => {
        setMaterials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveMaterial();
    setCurrentMaterial(null);
    setCurrentIndex(-1);
  };

  const setActiveDisaster = (donation, index) => {
    setCurrentMaterial(donation);
    setCurrentIndex(index);
  };

  const removeAllAll = () => {
    MaterialService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    MaterialService.findByTitle(searchTitle)
      .then(response => {
        setMaterials(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (

    <>
      <NavBar />
      <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

      <div className="block rounded-lg z-1 bg-gray-50 ml-20 mb-96 p-12 m-11 dark:bg-grey-100 justify-center content-center ">
      <Link to="/ask">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mb-10 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Ask for Donation
          </button>
        </Link>
        <div className="mb-3">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="search"
              className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-black dark:focus:border-primary"
              placeholder="Search"
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
                fill="black"
                className="h-5 w-5">
                <path
                  fill-rule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
         <div className="mb-7 row ">
         <a href="/userDonation" className="flex flex-row font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Donate money instead
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>



    </a>

         
        </div>
      
        <div class="grid grid-cols-3 gap-2">
        {materials &&
            materials.map((material, index) => (
      
            
    <div className="w-full max-w-lg p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">Lets donate</h5>
    <div className="flex items-baseline text-gray-900 dark:text-white">
      
        <span className="text-5xl font-extrabold tracking-tight">{material.amount}</span>
     
    </div>
    <ul role="list" className="space-y-5 my-7">
        <li className="flex space-x-3 items-center">
        <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
             <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> {material.material}</span>
           
            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> {material.bank}</span>
        </li>
        <li className="flex space-x-3">
           <svg className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
        <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> Full Name</span>
           
           <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"> {material.name}</span>
        </li>
        <li className="flex space-x-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="grey" class="w-6 h-6">
  <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
</svg>


            <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{material.phone}</span>
        </li>
        <li className="flex space-x-3 ">
            <svg className="flex-shrink-0 w-4 h-4 text-gray-400 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
            <span className="text-base font-normal leading-tight text-gray-500">{material.reason}</span>
        </li>
      
    </ul>
    <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center">Choose plan</button>
</div>

            ))}
            </div>
      </div>
    </>

  )



}

export default  UserMaterialDonation 
