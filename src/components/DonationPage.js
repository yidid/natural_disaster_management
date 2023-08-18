import React from 'react';


import { Link } from 'react-router-dom';
function DonationPage() {
  
<link rel="stylesheet" href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" />

  return (
    <>
    <div className="max-w-2xl rounded overflow-hidden shadow-lg">
 
  <div className="px-10 py-10">
  <nav className='container'>


<h2 className="text-4xl font-serif pb-5 font-extrabold">Choose donation type</h2>
 <Link to='/donations'> 
 <div className='flex flex-row text-center'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-8">
 <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
   </svg>
 <h1  className='text-2xl font-serif ml-2 mb-5'>Cash</h1>
 </div>
    </Link>
    <Link to='/Material'> 
 <div className='flex flex-row'>
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
</svg>

 <h1  className='text-2xl font-serif ml-2'>Material</h1>
 </div>
 </Link>


</nav>
  
  </div>
 
</div>
    
  
    </>
  );
};

export default DonationPage;
