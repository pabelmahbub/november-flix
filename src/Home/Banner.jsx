import React from 'react';
import './Home.css';
import image1 from '../Assets/images/f.jpeg';
import Email from '../Components/Email';

function Banner() {
  return (
    <div className="hero min-h-screen">
       <div className="hero-overlay">
          <img className='image' src={image1} alt="Shoes"/>
       </div>

     <div className="hero-content text-center text-neutral-content">
     <div>

      <h1 className="textStyle mb-5 lg:text-7xl md:text-6xl sm:text-4xl font-bold">Unlimited Movies,<br/>TV shows, and anime</h1>
      <p className="textStyle my-5 lg:text-3xl md:text-2xl sm:text-2xl font-bold">Watch anywhere. Cancel anytime.</p>
      <p className="textStyle my-8 lg:text-xl md:text-xl sm:text-sm">Ready to watch? Enter your email to crate or restart your membership.</p>
      
      
      <Email />
      
    </div>
  </div>
</div>
  )
}

export default Banner