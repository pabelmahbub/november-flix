import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';

function Navbar() {
  return (
    <div className="navbar bg-base-100">
       <div className="flex-1">
         <Link to='/'>
           <a className="logoText btn btn-ghost normal-case text-3xl">NOV-FLIX</a>
         </Link>
       </div>
       <div className="flex-none mr-16">
          <ul className="menu menu-horizontal px-1">
      
              <div className="navbar-end pr-10">
                  <select className="selectStyle select select-bordered w-full max-w-xs">
                      <option>日本語</option>
                      <option>English</option>
                  </select>
              {/* <AiOutlineGlobal  style={{paddingLeft: "2px",color:'red'}}/> */}
              </div>
            
              <div className="navbar-end">
              <Link to='/signup'>
                  <a className="signInText btn">Sign In</a>
                </Link>
              </div>
          
          </ul>
       </div>
     </div>
  )
}

export default Navbar

