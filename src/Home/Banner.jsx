import React from 'react';
import image1 from '../Assets/images/f.jpeg';
import { AiOutlineRight } from 'react-icons/ai';

function Banner() {
  return (
    <div className="hero min-h-screen">
     <img width="100%" height="100%" src={image1} alt="Shoes"/>
     <div className="hero-overlay"></div>
     <div className="hero-content text-center text-neutral-content">
     <div>
     
      <h1 style={{color:'#fff',fontFamily:'raleway'}}className="mb-5 text-7xl font-bold">Unlimited Movies,<br/>TV shows, and anime</h1>
      <p style={{color:'#fff',fontFamily:'raleway'}} className="my-5 text-3xl">Watch anywhere. Cancel anytime.</p>
      <p style={{color:'#fff',fontFamily:'raleway'}}className="my-8 text-1xl">Ready to watch? Enter your email to crate or restart your membership.</p>

      <div style={{display:'flex', flexDirection:'row'}}>
       <input style={{  width: '70%', height: '52px', paddingLeft: '10px' }} type="text" id="name" required placeholder='Email address' name="user_name" />
      {/* <input type="text" placeholder="Type here" className="input w-full max-w-xs" /> */}
      <button style={{backgroundColor:'red', color:'#fff', border:'none',borderRadius:0,height: '52px'}}　className="btn">Get Started<AiOutlineRight  style={{paddingLeft:'4px', height:'20px'}}/></button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Banner