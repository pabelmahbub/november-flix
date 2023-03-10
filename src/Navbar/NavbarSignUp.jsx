import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

function NavbarSignUp() {
  return (
    <div>
        <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link to='/'>
              <a className="logoText btn btn-ghost normal-case text-3xl">Nenflix</a>
          </Link>
        </div>
        <div className="flex-none mr-16">
          <ul className="menu menu-horizontal px-1">
              <div className="navbar-end">
              <Link to='/signup'>
                  <p className="textSign text-2xl font-bold">Sign Up</p>
                </Link>
              </div>
          
          </ul>
        </div>
       </div>

      <div className="grid h-0.5 barStyle"></div>
      
    </div>
  )
}

export default NavbarSignUp;
