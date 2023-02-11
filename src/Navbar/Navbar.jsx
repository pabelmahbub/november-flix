import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
       <div className="flex-1">
         <Link to='/'>
           <a className="logoText btn btn-ghost normal-case text-6xl">Nenflix</a>
         </Link>
       </div>
       <div className="flex-none mr-16">
          <ul className="menu menu-horizontal px-1">
      
              <div className="navbar-end pr-10">
                  <select className="selectStyle select select-bordered w-full max-w-xs">
                      <option>English</option>
                      <option>日本語</option>
                  </select>
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

