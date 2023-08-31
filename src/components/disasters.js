import React from "react";
import image from '../images/nd.jpg'
import  { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DisasterService from "../services/DisasterService";
import Pagination from '@mui/material/Pagination';
import { Select, initTE } from "tw-elements";
initTE({ Select });



const DisasterComponent=()=>{
  const [disasters, setDisasters] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchTitle, setSearchTitle] = useState("");

  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const pageSizes = [3, 6, 9];

  const getRequestParams = (searchTitle, page, pageSize) => {
    let params = {};

    if (searchTitle) {
      params["title"] = searchTitle;
    }

    if (page) {
      params["page"] = page - 1;
    }

    if (pageSize) {
      params["size"] = pageSize;
    }

    return params;
  };


  useEffect(() => {
    retrieveDisasters();
  });

  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const retrieveDisasters = () => {
  
    const params = getRequestParams(searchTitle, page, pageSize);

    DisasterService.getAll(params)
      .then((response) => {
        const { disasters, totalPages } = response.data;

        setDisasters(disasters);
        setCount(totalPages);

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(retrieveDisasters,
     [page, pageSize,searchTitle]);
  

  const setActiveDisaster = (disaster, index) => {
  
    setCurrentIndex(index);
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
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
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
      className="relative z-[2] flex items-center rounded-r bg-blue-400 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-blue-950 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg"
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

<div className="mt-3">
<form class="w-52 p-3">
  <fieldset>
  <div class="relative border border-gray-300 text-gray-800 bg-white shadow-sm">
    <label for="frm-whatever" class="sr-only">My field</label>
    <select class="appearance-none w-full py-1 px-2 bg-white border-blue-300" name="whatever" id="frm-whatever"  onChange={handlePageSizeChange} value={pageSize}>
        <option value="">Items per page&hellip;</option>
        {pageSizes.slice(0).reverse().map((size) => (
       <option key={size} value={size}>
       {size}
     </option>
     ))}
    </select>
   
    <div class="pointer-events-none absolute right-0 top-0 bottom-0 flex items-center px-2 text-gray-700 border-l">
        <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
    </div>
</div>
    </fieldset>
</form>

         

          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="circular"
            onChange={handlePageChange}
          />
        </div>


        {disasters &&
            disasters.slice(0).reverse().map((disaster, index) => (
              
              <div class="max-w-xl container bg-white rounded-xl shadow-lg  transition duration-500 hover: mb-10 hover:scale-105 shadow-2x ">
            <div className={" list-group-item " + (index === currentIndex ? "active" : " ")
                }
                onClick={() => setActiveDisaster(disaster,index)}
                key={index} >
                <span class="text-white text-xs font-bold rounded-lg bg-green-500 inline-block mt-4 ml-4 py-1.5 px-4 cursor-pointer">#Donate</span>
                <h1 class="text-2xl mt-2 ml-4 font-bold text-gray-800 cursor-pointer hover:text-gray-900 transition duration-100">{disaster.title}</h1>
                <p class="ml-4 mt-1 mb-2 text-gray-700 hover:underline cursor-pointer">#{disaster.title} lets help people</p>
              </div>
              <img class="w-full h-60 cursor-pointer" src={image}  alt="" />
              <p class="ml-4 mt-1 mb-2 text-gray-700 cursor-pointer">{disaster.description.substring(0,150)}....  
              <Link className='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0' to={ `/disasters/${disaster.id}`}>
                                            Learn more
                                        </Link></p>
            
              <div class="flex p-4 justify-between">
                <div class="flex items-center space-x-2">
                  <img class="w-10 rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="sara" />
                  <h2 class="text-gray-800 font-bold cursor-pointer">{disaster.name}</h2>
                </div>
                <div class="flex space-x-2">
                
                  <div class="flex space-x-1 items-center">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-red-500 hover:text-red-400 transition duration-100 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    <span>{disaster.createdAt}</span>
                  </div>
                </div>
              </div>
            </div>
         
          ))}
    
             
   </>
    )

}

export default DisasterComponent