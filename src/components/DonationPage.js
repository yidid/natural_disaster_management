import React from 'react';
import ReactDOM from 'react-dom/client';

import { Link } from 'react-router-dom';
function DonationPage() {

  return (
    <nav className='container'>
      <h2 style={{color:'black', background:'lightgray',alignContent:'center'}}>Donation Page</h2>
       <Link to='/Form'> 
       <h1 >Bank</h1>
          </Link>
      <Link to='/Material'>
    <h1>Material</h1>
          </Link>
      <h2 style={{color:'black', background:'lightgray'}}>Donation Progress</h2>

    </nav>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<DonationPage />);
export default DonationPage;
