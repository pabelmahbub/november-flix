import React from 'react';
import image3 from '../Assets/images/a.jpeg';
import family from '../Assets/images/family.jpeg';
import fourth from '../Assets/images/fourth.jpeg';
import kids from '../Assets/images/kids.webp';
import man from '../Assets/images/man.webp'

function Descriptions() {
  return (
   <>
    {/* 1st section */}
    <div style={{backgroundColor:'#6B728E'}}className="grid h-2"></div>

    <div style={{backgroundColor:'#20262E'}} className="hero min-h-screen bg-base-100">
    <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={family} width="40%" height="60%" />
    <div className="pr-12">
      <h1 style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-5xl font-bold">Enjoy on your TV</h1>
      <p style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-2xl py-9">Watch on smart TVs, Playstation, Xbox, <br/> Chromecast, Apple TV, Blu-ray players, and<br/> more. </p>
    </div>
   </div>
   </div>
   
   {/* 2nd section */}

     <div style={{backgroundColor:'#6B728E'}}className="grid h-2"></div>

     <div style={{backgroundColor:'#20262E'}} className="hero min-h-screen bg-base-100">
       <div className="hero-content flex-col lg:flex-row">
        <img src={man} width="40%" height="60%" />
     <div className="pl-12">
      <h1 style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-5xl font-bold">Watch Everywhere.</h1>
      <p style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-2xl py-9">Stream unlimited movies and TV shows on<br/>your phone, tablet, laptop, and Tv without<br/>paying more.</p>
     </div>
    </div>
    </div>

    {/* 3rd section */}
    <div style={{backgroundColor:'#6B728E'}}className="grid h-2"></div>

       <div style={{backgroundColor:'#20262E'}} className="hero min-h-screen bg-base-100">
         <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={kids} width="40%" height="60%" />
         <div className="pr-12">
            <h1 style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-5xl font-bold">Create profiles for kids.</h1>
            <p style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-2xl py-9">Send kids on adventures with their favorite<br/> characters in a space made just for them-free<br/> with your membership. </p>
         </div>
       </div>
      </div>

    {/* 4th section */}

    <div style={{backgroundColor:'#6B728E'}}className="grid h-2"></div>

      <div style={{backgroundColor:'#20262E', height:'400px'}} className="hero min-h-screen bg-base-100">
        <div className="hero-content flex-col lg:flex-row">
        <img src={fourth} width="40%" height="60%" />

        <div className="pl-12">
        <h1 style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-5xl font-bold">Download your shows<br/> to watch offline.</h1>
        <p style={{color:'#fff',textAlign:'left',fontFamily:'raleway'}} className="text-2xl py-9">Available on all plans except basic<br/>with adds.</p>
        </div>

      </div>
    </div>

     <div style={{backgroundColor:'#6B728E'}}className="grid h-2"></div>


   </>
  )
}

export default Descriptions