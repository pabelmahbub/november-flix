import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AiOutlineGlobal } from 'react-icons/ai';

function NavbarAfterSignIn() {
  return (
    <div className="navbar bg-black">
    <div className="flex-1">
      <Link to='/'>
        <a className="logoText btn btn-ghost normal-case lg:text-5xl md:text-3xl sm:text-2xl">Nenflix</a>
      </Link>
      <div>
      <Link to='/homepage'>
          <a className="btn btn-ghost normal-case lg:text-xl md:text-sm text-white">Home</a>
      </Link>
     
      <Link to='/latestMovies'>
         <a className=" btn btn-ghost normal-case lg:text-xl md:text-sm text-white">Latest</a>
      </Link>
      <Link to='/moviesSearch'>
         <a className=" btn btn-ghost normal-case lg:text-xl md:text-sm text-white">Search Movie</a>
      </Link>
      <Link to='/postMovies'>
         <a className="btn btn-ghost normal-case lg:text-xl md:text-sm text-white">Post Movie</a>
      </Link>
       <Link to='/deleteMovie'>
         <a className="btn btn-ghost normal-case lg:text-xl md:text-sm text-white">Delete Movie</a>
      </Link>
      
      </div>
    </div>





   
  </div>
  )
}

export default NavbarAfterSignIn
