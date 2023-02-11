import React from 'react';
import './Home.css';
import image1 from '../Assets/images/home-bg2.webp';
import Email from '../Components/Email';
import Navbar from '../Navbar/Navbar';

function Banner() {
  return (
    <div className="hero min-h-screen">
     
       <div className="hero-overlay">
       <div style={{position:'absolute',marginTop:'30px',width:'100%',zIndex:999999}}>
         <Navbar />

       </div>

          <img className='image img-gradient' src={image1} alt="Shoes" style={{opacity:'90%'}}/>
       </div>

     <div className="hero-content text-center text-neutral-content">
     <div>

     <h1 className="textStyle text-5xl font-bold mb-5">Unlimited Movies,<br/>TV shows, and anime</h1>
      <p className="textStyle my-5 lg:text-3xl md:text-xl sm:text-sm font-bold">Watch anywhere. Cancel anytime.</p>
      <p className="textStyle my-8 lg:text-2xl md:text-xl sm:text-sm">Ready to watch? Enter your email to crate or restart your membership.</p>
      
      
      <Email />
      
    </div>
  </div>
</div>
  )
}

export default Banner