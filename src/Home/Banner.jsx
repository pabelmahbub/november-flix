import React, { useEffect, useState } from 'react';
import './Home.css';
import image2 from '../Assets/images/home-bg2.webp';
import image3 from '../Assets/images/home-bg3.png';
import image4 from '../Assets/images/home-bg4.jpeg';
import Email from '../Components/Email';
import Navbar from '../Navbar/Navbar';


const images = [ image2, image3, image4];


function Banner() {
    const [currentImage, setCurrentImage] = useState(null);

    useEffect(() => {
      const intervalId = setInterval(() => {
          setCurrentImage(images[Math.floor(Math.random() * images.length)]);
      }, 5000)
      
      return () => clearInterval(intervalId);
  }, [])


  return (
    <div className="hero min-h-screen">
     
       <div className="hero-overlay">
       <div style={{position:'absolute',marginTop:'30px',width:'100%',zIndex:999999}}>
         <Navbar />

       </div>

          <img className='image img-gradient' src={currentImage} alt="Shoes" style={{opacity:'90%'}}/>
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