import React from "react";
import CommunityAdmin from "../components/sidebar";

import DisasterComponent from "../components/disasters";


const   Newpage = ()=>{
    return(
        <div>

             <CommunityAdmin name="Natural disasters"/>
           
             <div class="block rounded-lg  z-1 bg-gray-50 ml-64 mb-96 p-24 m-11 dark:bg-grey-100">
         < DisasterComponent />    
 
              </div>
             
             </div>
         
        
        
    )
}

export default Newpage