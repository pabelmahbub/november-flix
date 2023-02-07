import React from 'react';
import './Home.css';
import image3 from '../Assets/images/a.jpeg';
import family from '../Assets/images/family.jpeg';
import fourth from '../Assets/images/fourth.jpeg';
import kids from '../Assets/images/kids.webp';
import man from '../Assets/images/man.webp';
import ReactPlayer from 'react-player'

function Descriptions() {
  return (
   <>
    {/* 1st section */}

    <div className="grid h-2 barStyle"></div>

     <div style={{backgroundColor:'#20262E'}} className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
         {/* <img src={family} height="400px" width="600px"/> */}
         {/* <video height="400px" width="600px" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            </video> */}

           {/* <ReactPlayer                                              
               url='https://vimeo.com/243556536'
               light = {true}
               playing
              controls/> */}
               <video height="400px" width="600px" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" className="videoFrame" type="video/mp4" />
            </video> 

        <div className="pr-12">
          <h1 className="textLeft lg:text-6xl md:text-5xl sm:text-4xl font-bold pt-12">Enjoy on your TV</h1>
          <p className="textLeft lg:text-2xl md:text-xl sm:text-xl py-9">Watch on smart TVs, Playstation, Xbox, <br/> Chromecast, Apple TV, Blu-ray players, and<br/> more. </p>
        </div>
      </div>
    </div>
   
   {/* 2nd section */}

   <div className="grid h-2 barStyle"></div>

     <div style={{backgroundColor:'#20262E'}} className="hero min-h-screen bg-base-100">
       <div className="hero-content flex-col lg:flex-row">
         {/* <img src={man} height="400px" width="600px"/> */}
         {/* <ReactPlayer                                              
               url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
               light = {true}
               playing
              controls/> */}
              <video height="400px" width="600px" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" className="videoFrame" type="video/mp4" />
            </video> 
         <div className="pl-12">
            <h1 className="textLeft lg:text-6xl md:text-5xl sm:text-4xl font-bold pt-12">Watch Everywhere.</h1>
            <p className="textLeft lg:text-2xl md:text-xl sm:text-xl py-9">Stream unlimited movies and TV shows on<br/>your phone, tablet, laptop, and Tv without<br/>paying more.</p>
         </div>
       </div>
     </div>

    {/* 3rd section */}
    <div className="grid h-2 barStyle"></div>

       <div style={{backgroundColor:'#20262E'}} className="hero min-h-screen bg-base-100">
         <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img src={kids} height="400px" width="600px"/>  */}
            <video height="400px" width="600px" controls>
                <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" className="videoFrame" type="video/mp4" />
            </video> 
            <div className="pr-12">
               <h1 className="textLeft lg:text-6xl md:text-5xl sm:text-4xl font-bold pt-12">Create profiles for kids.</h1>
               <p className="textLeft lg:text-2xl md:text-xl sm:text-xl py-9">Send kids on adventures with their favorite<br/> characters in a space made just for them-free<br/> with your membership. </p>
            </div>
        </div>
       </div>

    {/* 4th section */}

    <div className="grid h-2 barStyle"></div>

      <div style={{backgroundColor:'#20262E'}} className="hero min-h-screen bg-base-100">
          <div className="hero-content flex-col lg:flex-row">
             <img src={family} height="400px" width="600px"/>
             <div className="pl-12">
                 <h1 className="textLeft lg:text-6xl md:text-5xl sm:text-4xl font-bold pt-12">Download your shows<br/>to offline.</h1>
                 <p className="textLeft lg:text-2xl md:text-xl sm:text-xl py-9">Available on all plans except basic<br/>with adds.</p>
             </div>
         </div>
      </div>

     <div className="grid h-2 barStyle"></div>


   </>
  )
}

export default Descriptions