import React from "react";
import NavBar from "../components/navbar";
import { Link } from "react-router-dom";

const UserDonation =()=>{

    return(
       
            <>
            <NavBar/>

            <div class="block rounded-lg z-1 bg-gray-50 ml-20 mb-96 p-12 m-11 dark:bg-grey-100 justify-center content-center ">
            <Link to="/ask">
            <button  class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mb-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
 Ask for Donation
</button>
      </Link>
          
       
            <div className="max-w-sm w-full lg:max-w-full lg:flex">

  <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div className="mb-8">
      <p className="text-sm text-gray-600 flex items-center">
        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
        </svg>
        Members only
      </p>
      <div className="text-gray-900 font-bold text-3xl font-serif mb-2">Lets Donate</div>
      <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>

    </div>
    <div className="flex items-center">
      
    
    </div>
  </div>
</div>
            </div>
            </>
    
        )
        
    

}

export default UserDonation