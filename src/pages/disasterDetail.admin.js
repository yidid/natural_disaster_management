import React from "react";
import CommunityAdmin from "../components/sidebar";
import DisasterDetail from "../components/disasterDetail";


const DisasterDetails = ()=>{
    return(
        <>
              <CommunityAdmin name="Disaster Details"/>
              <div class="block rounded-lg z-1 bg-gray-50 ml-64 mb-96 p-28 m-1 dark:bg-grey-100">
           
                <DisasterDetail />
           
           </div>
            
 



               </>
             
             
         
        
        
    )
}

export default DisasterDetails