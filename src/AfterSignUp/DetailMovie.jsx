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

import image1 from '../Assets/movieImage/mission1.avif';
import { Link, useParams } from 'react-router-dom';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn';
import { shuffle } from './Shuffle';
import Footer from '../Footer/Footer';
import SignUpSearch from './SignUpSerarch';
import SignUpLatest from './SignUpLatest';

function DetailMovie() {
  const { serviceId } = useParams();
  const [service, setService] = useState("");
  const [movies, setMovies] = useState([])


    useEffect(() => {
      fetch('../movies.json')
      .then(res => res.json())
      .then(data => setMovies(data))
    }, [])




    // useEffect(() => {
      
    //     const url =`https://tech-japan-production.up.railway.app/jobs/${serviceId}`;
    //     fetch(url)
    //     .then(res =>res.json())
       
    //     .then(data => setService(data));
    // }, [])



  return (
    <>

<NavbarAfterSignIn />

    {/* first section */}
    <div  style={{backgroundColor:'#20262E',paddingTop:'10px'}} >
    <h1 className="text-white  text-left lg:text-4xl md:text-xl sm:text-xl font-bold pt-6 pl-6 pb-6">This week released movies</h1>

           <div class="flex overflow-x-auto  bg-blue-200">
           <section class="flex-shrink-0 border-2 border-white-300">
                    <span><img src={m5} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m10} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m11} class="h-72 w-60" alt=""/></span>
              </section>
             <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m4} class="h-72 w-60" alt=""/></span>
              </section>
                <section class="flex-shrink-0 border-4 border-white-300">
                   <span><img src={m1} class="h-72 w-60" alt=""/></span>
                 </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m6} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m7} class="h-72 w-60" alt="" /></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                    <span><img src={m9} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m10} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m11} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m12} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m13} class="h-72 w-60" alt=""/></span>
              </section>
              <section class="flex-shrink-0 border-2 border-white-300">
                   <span><img src={m2} class="h-72 w-60" alt="" /></span>
              </section>
             
            </div>
          </div>







<div style={{backgroundColor:"#1e1e1e"}} className="hero min-h-screen lg:mt-[-114px]">

  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image1} className="max-w-sm rounded-lg shadow-2xl" />
    <div  style={{textAlign:'left'}} className="lg:w-1/2">
     
   <h1 className="text-white text-4xl font-bold mb-5">Mission Impossible-7</h1>
    <p className="text-white my-5 text-xl md:text-xl sm:text-sm font-bold">Watch anywhere. Cancel anytime.</p>
    <p className="text-white mt-3 lg:text-xl md:text-xl sm:text-sm font-bold">Ready to watch? Enter yorestart your membership.</p>
    <p className="text-white mt-2 lg:text-xl md:text-xl sm:text-sm">Starring: <span className="text-white mt-2 lg:text-xl md:text-xl sm:text-sm font-bold">Tom Cruise</span></p>
    <p className="text-white mt-2 lg:text-xl md:text-xl sm:text-sm">Director: <span className="text-white mt-2 lg:text-xl md:text-xl sm:text-sm font-bold">James Cameron</span></p>
    <p className="text-white mt-2 lg:text-xl md:text-xl sm:text-sm">Genres:<span className="text-white mt-2 lg:text-xl md:text-xl sm:text-sm font-bold">Action, Fiction, Drama</span></p>
    
    </div>
  </div>
</div>


      <div style={{backgroundColor:'',justifyContent:'center',marginTop:'-60px',}} className="text-white tabs pb-6">
        <a  style={{borderBottomColor:'red',borderBottomWidth:3,color:'#fff'}} className="tab tab-bordered tab-active">OVERVIEW</a> 
      <Link to="/homepage/moremovies">
        <a style={{borderBottomColor:'#fff',borderBottomWidth:3,color:'#fff'}} className="tab tab-bordered ">MORE LIKE THIS</a> 
        </Link>
        <Link to="/homepage/singlemoviedetail">
        <a style={{borderBottomColor:'#fff',borderBottomWidth:3,color:'#fff'}} className="tab tab-bordered">DETAILS</a>
        </Link>
      </div>



<Footer />

</>
  )
}

export default DetailMovie;
