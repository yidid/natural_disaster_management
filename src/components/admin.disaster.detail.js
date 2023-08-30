import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import DisasterService from "../services/DisasterService";
import image from '../images/nd.jpg'
import CommunityAdmin from "./sidebar";

const Disaster = props => {
  const { id }= useParams();
  let navigate = useNavigate();

  const initialDisasterState = {
    id: null,
    title: "",
    description: "",
    published: false
  };
  const [currentDisaster, setCurrentDisaster] = useState(initialDisasterState);
  const [message, setMessage] = useState("");

  const getDisaster = id => {
    DisasterService.get(id)
      .then(response => {
        setCurrentDisaster(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id)
      getDisaster(id);
  }, [id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentDisaster({ ...currentDisaster, [name]: value });
  };

  const updatePublished = status => {
    var data = {
      id: currentDisaster.id,
      title: currentDisaster.title,
      description: currentDisaster.description,
      published: status
    };

    DisasterService.update(currentDisaster.id, data)
      .then(response => {
        setCurrentDisaster({ ...currentDisaster, published: status });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

 

  const deleteDisaster = () => {
    DisasterService.remove(currentDisaster.id)
      .then(response => {
        console.log(response.data);
        navigate("/disaster");

      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <>
    
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
    <link
	href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
	rel="stylesheet"></link>
            <CommunityAdmin name="Natural disasters"/>
	<div class="container w-full md:max-w-3xl mx-auto pt-20">

		<div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

			
			<div class="font-sans">
				<p class="text-base md:text-sm text-green-500 font-bold">&lt; <a href="/disaster" class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">Back to Disasters</a></p>
						<h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{currentDisaster.title}</h1>
						<p class="text-sm md:text-base font-normal text-gray-600">Published {currentDisaster.createdAt}</p>
            <image src={image}></image>
			</div>
			<p class="py-6">
				👋 {currentDisaster.description}
			</p>
            <div>
    {currentDisaster ? (
      <div className="edit-form">
          <div className="form-group">
            <label>
              <strong>Status:</strong>
            </label>
            {currentDisaster.published ? "Published" : "Pending"}
          </div>
        {currentDisaster.published ? (
           <button
           className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md mt-10"
           onClick={() => updatePublished(true)}
         >
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save w-5 h-5 mr-1">
                       <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                       <polyline points="17 21 17 13 7 13 7 21"></polyline>
                       <polyline points="7 3 7 8 15 8"></polyline>
                   </svg>
                   UnPublish
         </button>
        ) : (
          <button
            className="inline-flex items-center px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-md mt-10"
            onClick={() => updatePublished(true)}
          >
           <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save w-5 h-5 mr-1">
                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                        <polyline points="7 3 7 8 15 8"></polyline>
                    </svg>
                    Publish
          </button>
        )}
         <button class="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md ml-10 mt-10" onClick={deleteDisaster}>
	<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
	  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
	</svg>

	Delete
  </button>
        <p>{message}</p>
      </div>
    ) : (
      <div>
        <br />
        <p>Please click on a Disaster...</p>
      </div>
    )}
  </div>

            </div>
            </div>
  </>
);
};

export default Disaster;