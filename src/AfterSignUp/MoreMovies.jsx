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
import { shuffle } from './Shuffle';
import Loading from '../Components/Loading';

import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
import Footer from '../Footer/Footer';

function MoreMovies() {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([])

  useEffect(() => {
   fetch(`https://nenflix-server-production.up.railway.app/movies`)
   .then(res => res.json())
   .then(data => setMovies(data))
 
   
 }, [])

  return (
    <>
    <div style={{backgroundColor:'#20262E',paddingBottom:'50%'}}>
        <NavbarAfterSignIn />
       
          <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Similar movies</h1>
             <div  class="flex overflow-x-auto" >
                <section  style={{display:'flex', flexDirection:'row'}}class="flex-shrink-0 border-2 border-white-300">
                 
                  {shuffle(movies).map(movie => 
                     <div >
                          <img src={movie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                          <p className="movieTextStyle py-2">{movie.Title}</p> 
                      </div>       
                    )}
                   </section>
             </div> 

            {/* 2nd section */}

             <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Action</h1>
             <div  class="flex overflow-x-auto" >
                <section  style={{display:'flex', flexDirection:'row'}}class="flex-shrink-0 border-2 border-white-300">
                 
                  {shuffle(movies).map(movie => 
                     <div >
                        <img src={movie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                        <p className="movieTextStyle py-2">{movie.Title}</p>  
                      </div>       
                    )}
                   </section>
             </div> 

             {/* 3rd section */}

             <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Drama</h1>
             <div  class="flex overflow-x-auto" >
                <section  style={{display:'flex', flexDirection:'row'}}class="flex-shrink-0 border-2 border-white-300">
                 
                  {shuffle(movies).map(movie => 
                     <div >
                        <img src={movie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                        <p className="movieTextStyle py-2">{movie.Title}</p> 
                      </div>       
                    )}
                   </section>
             </div> 
             
      </div>
    <Footer />
    </>
  )
}

export default MoreMovies
