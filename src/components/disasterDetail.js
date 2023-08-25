import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import image from '../images/nd.jpg'
import DisasterService from '../services/DisasterService';
import NavBar from './navbar';

const DisasterDetail = () =>{
    const { id }= useParams();
    const [disasterDetail, setDisasterDetail] = useState('');
  

    const getDisaster = id => {
      DisasterService.get(id)
        .then(response => {
        setDisasterDetail(response.data);
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
    return(

        <>
        
 
    <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css"/>
   

<body className="bg-gray-100 font-sans leading-normal tracking-normal">



	
	<div class="container w-full md:max-w-3xl mx-auto pt-20">

		<div class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">

			
			<div class="font-sans">
				<p class="text-base md:text-sm text-green-500 font-bold">&lt; <a href="#" class="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">BACK TO BLOG</a></p>
						<h1 class="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{disasterDetail.title}</h1>
						<p class="text-sm md:text-base font-normal text-gray-600">Published {disasterDetail.createdAt}</p>
            <image src={image}></image>
			</div>


			
			<p class="py-6">
				👋 {disasterDetail.description
}
			</p>

			
		
            </div>
            </div>
</body>
		

 
          
        
        </>  
    )
}
export default DisasterDetail