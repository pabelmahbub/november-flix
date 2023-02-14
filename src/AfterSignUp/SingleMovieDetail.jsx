import React from 'react';
import Footer from '../Footer/Footer';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn';
import './HomePage.css';

function SingleMovieDetail() {
   return (
      <>
      <NavbarAfterSignIn />
        <div className='movieLogo'>
           <span  style={{fontFamily:'raleway'}} className="text-right logoText btn btn-ghost normal-case lg:text-5xl md:text-4xl sm:text-3xl">Nenflix</span>
        </div>
        <video controls width="100%">
           <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/webm" />
           <source src="/video-example.mp4" type="video/mp4"
            />
           Sorry, your browser doesn't support videos.
        </video>
     <Footer />
    </>

  )
}

export default SingleMovieDetail
