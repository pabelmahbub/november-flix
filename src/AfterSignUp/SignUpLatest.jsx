import React, { useEffect, useState } from 'react';
import m1 from '../Assets/movieImage/m1.webp';
import m2 from '../Assets/movieImage/m2.webp';
import m4 from '../Assets/movieImage/m4.jpeg';
import m5 from '../Assets/movieImage/m5.jpeg';

import m6 from '../Assets/movieImage/m6.webp';
import m7 from '../Assets/movieImage/m7.webp';

import m9 from '../Assets/movieImage/m9.jpeg';
import m10 from '../Assets/movieImage/m10.jpeg';
import m11 from '../Assets/movieImage/m11.webp';
import m12 from '../Assets/movieImage/m12.jpeg';
import m13 from '../Assets/movieImage/m13.jpeg';

import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
import PhotoAlbum from "react-photo-album";
import Footer from '../Footer/Footer';




function SignUpLatest() {




  
   


  return (
    <>
    <div style={{backgroundColor:'#20262E',paddingBottom:'50%'}}>
        <NavbarAfterSignIn />

      <h1 className="textLeft lg:text-2xl md:text-xl sm:text-xl font-bold pt-6 pl-6 pb-6">Latest released movies</h1>

        <div  style={{backgroundColor:'#20262E'}} class="flex overflow-x-auto  bg-blue-200">
                <section class="flex-shrink-0 border-4 border-white-300">
                <span><img src={m1} class="h-72 w-60" alt=""
                /></span>
                {/* <span>John</span> */}
              </section>
              
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m6} class="h-72 w-60" alt=""
                /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m7} class="h-72 w-60" alt=""
                /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m9} class="h-72 w-60" alt=""
                /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m10} class="h-72 w-60" alt=""
                /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m11} class="h-72 w-60" alt=""
                /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m12} class="h-72 w-60" alt=""
                /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m13} class="h-72 w-60" alt=""
                /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m2} class="h-72 w-60" alt=""
                /></span>
                {/* <span>John</span> */}
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m4} class="h-72 w-60" alt=""
                /></span>
                {/* <span>John</span> */}
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
              <span><img src={m5} class="h-72 w-60" alt=""
                /></span>
                {/* <span>John</span> */}
              </section>
            </div>

        
      
      </div>
    <Footer />
    </>
  )
}

export default SignUpLatest


