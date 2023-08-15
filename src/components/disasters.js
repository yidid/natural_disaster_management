import React from "react";
import image from '../images/nd.jpg'

const DisasterComponent=()=>{
    return(
        <div class="max-w-2xl rounded overflow-hidden shadow-lg">
        <img class="w-full" src={image} alt="Sunset in the mountains"></img>
        <div class="px-6 py-4">
          <div class="font-extrabold text-xl mb-2 font-serif">The Coldest Sunset</div>
          <p class="text-gray-700 text-base font-serif">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            
          </p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
             
   
    )

}

export default DisasterComponent