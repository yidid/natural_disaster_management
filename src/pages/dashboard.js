import React from "react";
import CommunityAdmin from "../components/sidebar";


const Dashboard = ()=>{
    return(
        <>
              <CommunityAdmin name="Dashboard"/>
             <div class="block rounded-lg z-1 bg-gray-50 ml-64 mb-96 p-28 m-11 dark:bg-grey-100">
           
             <div class="m grid grid-cols-2 gap-4 ">
            <div class="box-border h-60 w-78  border-2 bg-cyan-100"> 
            <h1 className="text-center text-7xl  font-bold font-serif text-gray-700  pt-16">1000</h1> 
            <h1 className="text-center text-4xl  font-bold font-serif text-gray-700  pt-7">Customers</h1> 
            </div>
            <div class="box-border h-60 w-78  border-2 bg-red-200"> 
            <h1 className="text-center text-7xl  font-bold font-serif text-gray-700   pt-16">1000</h1> 
            <h1 className="text-center text-4xl  font-bold font-serif text-gray-700  pt-7">Customers</h1> 
            </div>
            <div class="box-border h-60 w-78  border-2 bg-lime-100"> 
            <h1 className="text-center text-7xl  font-bold font-serif text-gray-700   pt-16">1000</h1> 
            <h1 className="text-center text-4xl  font-bold font-serif text-gray-700  pt-7">Customers</h1> 
            </div>
            <div class="box-border h-60 w-78  border-2 bg-slate-300"> 
            <h1 className="text-center text-7xl  font-bold font-serif text-gray-700   pt-16">1000</h1> 
            <h1 className="text-center text-4xl  font-bold font-serif text-gray-700  pt-7">Customers</h1> 
            </div>
            
 
</div>
</div>

               </>
             
             
         
        
        
    )
}

export default Dashboard