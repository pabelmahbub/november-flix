import React from 'react';
import { Link } from 'react-router-dom';
import NavbarSignUp from '../Navbar/NavbarSignUp';

function NotFound() {
  return (
    <div>
        <NavbarSignUp />
      <div className='flex justify-center text-center items-center py-12'>
        <img style={{ height: 420, width: 1000 }} src="https://freefrontend.com/assets/img/html-css-404-page-templates/HTML-404-Page-with-SVG.png"></img>
      </div>

      <div className='flex justify-center text-center items-center px-48 pb-35'>
        <Link to='/'><button  style={{color:'#fff'}} class="btn btn-active btn-secondary">Back to Home </button></Link>
      </div>

    </div>
  )
}

export default NotFound