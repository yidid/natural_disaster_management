import React from "react";

const CommunityAdmin= (props)=>{
  return(
    <>
    
    <nav className="sticky top-0 z-50 flex w-full flex-wrap content-center text-center bg-[#FBFBFB] py-2 text-purple-500 shadow-lg focus:text-neutral-700 dark:bg-slate-50 lg:py-4">
    <div className="flex w-full flex-wrap content-center justify-center px-3">
  
    <img src='./images/ndm.png' className="w-14 rounded-sm absolute left-0 top-0"alt="Avatar" /> 
 
    <h1 className=" text-4xl font-bold font-serif text-center">{props.name}</h1>
 
   
    <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" className="w-12 rounded-full absolute top-3 right-3"alt="Avatar" /> 
  
</div>
</nav>

<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

<div className=" s min-h-screen flex flex-row bg-gray-100 absolute z-0">
<div className="flex flex-col w-56 bg-gray-50 overflow-hidden sticky left-0">

<ul className=" sticky left-0 flex flex-col py-4">
  <li>
    <a href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
      <span className="text-sm font-medium">Dashboard</span>
    </a>
  </li>
  <li>
    <a href="/disaster" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-cloud-lightning"></i></span>
      <span className="text-sm font-medium">Disasters</span>
    </a>
  </li>
  <li>
    <a href="/community" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
      <span className="text-sm font-medium">Community</span>
    </a>
  </li>

  <li>
    <a href="/donation" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-money"></i></span>
      <span className="text-sm font-medium">Donation</span>
    </a>
  </li>
  <li>
    <a href="/responders" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-first-aid"></i></span>
      <span className="text-sm font-medium">Fast Responders</span>
    </a>
  </li>
  <li>
    <a href="/ " className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-bell"></i></span>
      <span className="text-sm font-medium">Notifications</span>
      <span className="ml-auto mr-6 text-sm bg-red-100 rounded-full px-3 py-px text-red-500">5</span>
    </a>
  </li>
  <li>
    <a href="/" className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
      <span className="text-sm font-medium">Logout</span>
    </a>
  </li>
</ul>
</div>


</div>
  </>

  )
}

export default CommunityAdmin;