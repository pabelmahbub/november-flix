import React, { useContext } from 'react';
import './Components.css';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

function PlansNotify() {
  const {user } = useContext(AuthContext);
  console.log('My user', user);
  return (
    <>
    {!user &&
       <div className='planDiv'>
           <button className="bg-red-500 text-white font-bold uppercase text-xs px-3 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">NEW!</button>
           <p className="pl-2 lg:text-2xl md:text-xl sm:text-xs">Plans Now start at</p>
           <h1 className="lg:text-2xl md:text-xl sm:text-xs font-bold pl-2">JPY 200.</h1>

           <Link to="/signup">
             <div style={{display:'flex', flexDirection:'row'}}>
                  <p className="xl:pl-6 md:pl-6 lg:text-2xl md:text-xl sm:text-xs font-bold text-blue-700">Learn More </p>
                  <AiOutlineRight className='icon text-blue-700 lg:text-2xl md:text-xl sm:text-sm mt-1'/>
             </div>
           </Link>
      
       </div>
    }
    </>
  )
}

export default PlansNotify
