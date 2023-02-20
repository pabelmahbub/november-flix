import React  from 'react';
import { shuffle } from './Shuffle';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
import Footer from '../Footer/Footer';
import { useLoaderData } from 'react-router-dom';

function MoreMovies() {
  const movies = useLoaderData();


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
