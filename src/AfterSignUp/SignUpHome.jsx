import React from 'react';
import m1 from '../Assets/movieImage/m1.webp';
import m2 from '../Assets/movieImage/m2.webp';
import m3 from '../Assets/movieImage/m3.jpeg';
import m4 from '../Assets/movieImage/m4.jpeg';
import m5 from '../Assets/movieImage/m5.jpeg';

import m6 from '../Assets/movieImage/m6.webp';
import m7 from '../Assets/movieImage/m7.webp';
import m8 from '../Assets/movieImage/m8.webp';
import m9 from '../Assets/movieImage/m9.jpeg';
import m10 from '../Assets/movieImage/m10.jpeg';
import m11 from '../Assets/movieImage/m11.webp';
import m12 from '../Assets/movieImage/m12.jpeg';
import m13 from '../Assets/movieImage/m13.jpeg';
import m14 from '../Assets/movieImage/m14.png';
import m15 from '../Assets/movieImage/m15.jpeg';
import m16 from '../Assets/movieImage/m16.webp';
import m17 from '../Assets/movieImage/m17.jpeg';
import m18 from '../Assets/movieImage/m18.jpg';

import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
import Footer from '../Footer/Footer';


const allMoviesThumbnail =  [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18]
   
    

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function SignUpHome() {
 


  return (
    <>
      <div style={{backgroundColor:'#20262E',paddingBottom:'50%'}}>
        <NavbarAfterSignIn />

         <div>
            <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">New Release</h1>
            <div  style={{backgroundColor:'#20262E'}} class="flex overflow-x-auto  bg-blue-200">
 
               <section  style={{display:'flex',flexDirection:'row'}} class="flex-shrink-0">
                     <span style={{display:'flex'}}> {shuffle(allMoviesThumbnail).map(k => (<img src={k} class="h-72 w-60" alt=""/> ))}</span>
               </section>
            </div>
         </div>

         {/* second section */}

         <div>
            <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Top 10 in Japan today</h1>
            <div  style={{backgroundColor:'#20262E'}} class="flex overflow-x-auto  bg-blue-200">
 
               <section  style={{display:'flex',flexDirection:'row'}} class="flex-shrink-0">
                     <span style={{display:'flex'}}> {shuffle(allMoviesThumbnail).map(k => (<img src={k} class="h-72 w-60" alt=""/> ))}</span>
               </section>
            </div>
         </div>

         {/* Third section */}
         
         <div>
            <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Oscar winning</h1>
            <div  style={{backgroundColor:'#20262E'}} class="flex overflow-x-auto  bg-blue-200">
 
               <section  style={{display:'flex',flexDirection:'row'}} class="flex-shrink-0">
                     <span style={{display:'flex'}}> {shuffle(allMoviesThumbnail).map(k => (<img src={k} class="h-72 w-60" alt=""/> ))}</span>
               </section>
            </div>
         </div>

         {/* Fourth section */}
         
         <div>
            <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Trending now</h1>
            <div  style={{backgroundColor:'#20262E'}} class="flex overflow-x-auto  bg-blue-200">
 
               <section  style={{display:'flex',flexDirection:'row'}} class="flex-shrink-0">
                     <span style={{display:'flex'}}> {shuffle(allMoviesThumbnail).map(k => (<img src={k} class="h-72 w-60" alt=""/> ))}</span>
               </section>
            </div>
         </div>

         {/* fifth section */}
         
         <div>
            <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Hollywood</h1>
            <div  style={{backgroundColor:'#20262E'}} class="flex overflow-x-auto  bg-blue-200">
 
               <section  style={{display:'flex',flexDirection:'row'}} class="flex-shrink-0">
                     <span style={{display:'flex'}}> {shuffle(allMoviesThumbnail).map(k => (<img src={k} class="h-72 w-60" alt=""/> ))}</span>
               </section>
            </div>
         </div>

         {/* Sixth section */}
         
         <div>
            <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">J- Drama & K- Drama</h1>
            <div  style={{backgroundColor:'#20262E'}} class="flex overflow-x-auto  bg-blue-200">
 
               <section  style={{display:'flex',flexDirection:'row'}} class="flex-shrink-0">
                     <span style={{display:'flex'}}> {shuffle(allMoviesThumbnail).map(k => (<img src={k} class="h-72 w-60" alt=""/> ))}</span>
               </section>
            </div>
         </div>

      


    </div>
    <Footer />
    </>
  )
}

export default SignUpHome
