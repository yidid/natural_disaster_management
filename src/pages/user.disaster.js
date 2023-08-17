import React from "react";
import NavBar from "../components/navbar";
import DisasterComponent from "../components/disasters";
import { Link } from "react-router-dom";

const DisastersUser = () => {
    return(
        <>
        <NavBar/>
        <div class="block rounded-lg z-1 bg-gray-50 ml-20 mb-96 p-12 m-11 dark:bg-grey-100 justify-center content-center">
        <Link to="/disasters"> 
        <button  class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 mb-16 border-b-4 border-blue-700 hover:border-blue-500 rounded">
         Add natural disaster
        </button>
        </Link>
        <DisasterComponent />
        </div>
        </>

    )
}
export default DisastersUser