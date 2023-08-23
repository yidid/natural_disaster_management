import React from "react";
import NavBar from "../components/navbar";
import DisasterComponent from "../components/disasters";
import { Link } from "react-router-dom";

const DisastersUser = () => {
    return(
        <>
        <NavBar/>
      
 
        <section class="dark:bg-gray-800 dark:text-gray-100">
	<div class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 class="text-4xl font-bold leadi sm:text-5xl">Natural disaster 
			<span class="dark:text-violet-400"> Report </span>System
		</h1>
		<p class="px-8 mt-8 mb-12 text-lg">It is a platform where you get reports on natural disasters join and donate for those in need</p>
		<div class="flex flex-wrap justify-center">
           <a href="#disaster" >
			<button class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Get started</button></a>
			<button class="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">Log in</button>
		</div>
	</div>
</section>
        <div class="block rounded-lg z-1 bg-gray-50 ml-20 mb-96 p-12 m-11 dark:bg-grey-100 justify-center content-center" id="disaster">
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