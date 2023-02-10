import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';

function NavbarAfterSignIn() {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <Link to='/'>
        <a className="logoText btn btn-ghost normal-case lg:text:４xl md:text-2xl">NOV-FLIX</a>
      </Link>
      <div>
      <Link to='/signup/homepage'>
          <a className=" btn btn-ghost normal-case lg:text-xl md:text-sm">Home</a>
      </Link>
      <Link to='/signup/series'>
         <a className=" btn btn-ghost normal-case lg:text-xl md:text-sm">Series</a>
      </Link>
     
      <Link to='/signup/latest'>
         <a className=" btn btn-ghost normal-case lg:text-xl md:text-sm">Latest</a>
      </Link>
       {/* <Link to=''>
         <a className=" btn btn-ghost normal-case lg:text-xl md:text-sm">Films</a>
      </Link> */}
      {/* <Link to=''>
         <a className=" btn btn-ghost normal-case lg:text-xl md:text-sm">My List</a>
      </Link> */}

      </div>
    </div>





   
  </div>
  )
}

export default NavbarAfterSignIn
