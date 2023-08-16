import React from "react";
import image from '../images/nd.jpg'
import  { useState, useEffect } from "react";
import DisasterService from "../services/DisasterService";

const DisasterComponent=()=>{
  const [disasters, setDisasters] = useState([]);
  const [currentDisaster, setCurrentDisaster] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  useEffect(() => {
    retrieveDisasters();
  }, []);

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveDisasters = () => {
    DisasterService.getAll()
      .then(response => {
        setDisasters(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveDisasters();
    setCurrentDisaster(null);
    setCurrentIndex(-1);
  };

  const setActiveDisaster = (disaster, index) => {
    setCurrentDisaster(disaster);
    setCurrentIndex(index);
  };

  const removeAllDisasters = () => {
    DisasterService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  const findByTitle = () => {
    DisasterService.findByTitle(searchTitle)
      .then(response => {
        setDisasters(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

    return(
      <>
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
       
        {disasters &&
            disasters.map((disaster, index) => (
              <div className="max-w-xl mt-10 rounded overflow-hidden shadow-lg">
              
        <img className="w-full" src={image} alt="Sunset in the mountains"></img>
        <div className="px-6 py-4">
          <div className={"font-extrabold text-xl mb-2 font-serif " + (index === currentIndex ? "active" :"" )
        }onClick={() => setActiveDisaster(disaster, index)}
        key={index}
        >{disaster.title}</div>
          <p className="text-gray-700 text-base font-serif">
           {disaster.description}
            
          </p>
        </div>
       
        <div className="flex items-center">
      
      <div className="text-sm pl-80 pb-10" >
        <p className="text-gray-900 font-serif leading-none">{disaster.name}</p>
    <p className="text-gray-600 font-mono">{disaster.createdAt}</p>
      </div>
    </div>
       </div>
        
         
          ))}
    
             
   </>
    )

}

export default DisasterComponent