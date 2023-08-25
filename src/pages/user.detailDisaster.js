import React from "react";
import NavBar from "../components/navbar";

import DisasterDetail from "../components/disasterDetail";

const UserDisasterDetail =()=>{

    return(
       
            <>
            <NavBar/>

            <div class="block rounded-lg z-1 bg-gray-50 ml-20 mb-96 p-12 m-11 dark:bg-grey-100 justify-center content-center ">
         
         <DisasterDetail />
       
            </div>
            </>
    
        )
        
    

}

export default UserDisasterDetail 
