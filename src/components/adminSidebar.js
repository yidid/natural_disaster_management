import React from "react";

const AdminSidebar= (props)=>(
  <>

<nav className="sticky top-0 z-50 flex w-full flex-wrap content-center text-center bg-[#FBFBFB] py-2 text-purple-500 shadow-lg focus:text-neutral-700 dark:bg-slate-50 lg:py-4">
      <div className="flex w-full flex-wrap content-center justify-center px-3 overflow-hidden">

        <img src='./images/ndm.png' className="w-14 rounded-sm absolute left-0 top-0" alt="Avatar" />

        <h1 className="xl:text-4xl  font-bold font-serif overflow-hidden text-center">{props.name}</h1>


        <img src="https://tecdn.b-cdn.net/img/new/avatars/2.webp" className="w-12 rounded-full absolute top-3 right-3" alt="Avatar" />

      </div>
   

    <link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

    <div className="min-h-screen flex flex-row bg-gray-100 absolute z-26 mt-9">
      <div className="flex flex-col w-fit min-w-fit bg-gray-50 overflow-hidden sticky left-0">

        <ul className=" sticky left-0 flex flex-col py-4">
          <li>
            <a href="/" className="flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-home"></i></span>
              <span className="hidden md:block text-sm font-medium">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="/manageResponders" className="flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-cloud-lightning"></i></span>
              <span className="hidden md:block text-sm font-medium">Responders</span>
            </a>
          </li>
          <li>
            <a href="/manageUsers" className="flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-chat"></i></span>
              <span className=" hidden md:block text-sm font-medium">Users</span>
            </a>
          </li>

          <li>
            <a href="/manageContentManagers" className="flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-money"></i></span>
              <span className=" hidden md:block text-sm font-medium mr-7" >Content Managers</span>
            </a>
          </li>
          <li>
            <a href="/" className="flex flex-row items-center h-16 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i className="bx bx-log-out"></i></span>
              <span className=" hidden md:block text-sm font-medium">Logout</span>
            </a>
          </li>
        
        </ul>
      </div>


    </div>
    </nav>
  </>

)

export default AdminSidebar