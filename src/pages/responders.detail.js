import React from "react";
import AdminSidebar from "../components/adminSidebar";
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import ResponderServices from "../services/ResponderServices";


const ResponderDetails =()=>{
    const { id }= useParams();
    const [ResponderDetail, setResponderDetail] = useState('');
  

    const getContent = id => {
      ResponderServices.get(id)
        .then(response => {
            setResponderDetail(response.data);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    };
  
    useEffect(() => {
      if (id)
      getContent(id);
    }, [id]);

    return(
       
               
       
    <div>
         <link
        href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        rel="stylesheet"></link>
                 
                
                 <AdminSidebar name="Responders"/>
               
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"></link>
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"></link>
        
        <section class="pt-16 bg-blueGray-50">
        <div class="w-full lg:w-4/12 px-4 mx-auto">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div class="px-6">
              <div class="flex flex-wrap justify-center">
                <div class="w-full px-4 flex justify-center">
                  <div class="relative">
                    <img alt="..." src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"></img>
                  </div>
                </div>
                <div class="w-full px-4 text-center mt-20">
                  <div class="flex justify-center py-4 lg:pt-4 pt-8">
                  
                  
                   
                  </div>
                </div>
              </div>
              <div class="text-center mt-5">
                <h3 class="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                 {ResponderDetail.name}
                </h3>
                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                  <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                 {ResponderDetail.address}
                </div>
                <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fas fa-building mr-2 text-lg text-blueGray-400"></i>
                {ResponderDetail.department} Departement
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-phone mr-2 text-lg text-blueGray-400"></i>
                 {ResponderDetail.phone}
                </div>
              </div>
              <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        </section>
        </div>
        
          
         
    
        )
        
    

}

export default ResponderDetails 
