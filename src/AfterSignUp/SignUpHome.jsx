import React, { useEffect, useState } from 'react';
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
import { shuffle } from './Shuffle';
import Loading from '../Components/Loading';
import MovieDisplay from './MovieDisplay';
import { useLoaderData } from 'react-router-dom';


const allMoviesThumbnail =  [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18]
   
    

const currentMonth = new Date(Date.now()).toLocaleString('en-us',{month:'short', year:'numeric'})

function SignUpHome() {

   const movies = useLoaderData()

  return (
    <>
    {movies.length === 0 ? <Loading /> :
   
      <>

      <div style={{backgroundColor:'#20262E',paddingBottom:'5%'}}>
        <NavbarAfterSignIn />

          <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Best of {currentMonth}</h1>
            <div  class="flex overflow-x-auto" >
                <section  style={{display:'flex', flexDirection:'row'}}class="flex-shrink-0 border-2 border-white-300">

        {
         movies.map(movie => 
                 <MovieDisplay 
                       key={movie.id}
                       movie={movie}></MovieDisplay>)
               }

               </section>
          </div>

          {/* second section: */}

          <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Oscar and Grammy winning movies</h1>
            <div  class="flex overflow-x-auto" >
                <section  style={{display:'flex', flexDirection:'row'}}class="flex-shrink-0 border-2 border-white-300">

        {
         shuffle(movies).map(movie => 
                 <MovieDisplay 
                       key={movie.id}
                       movie={movie}></MovieDisplay>)
               }

               </section>
          </div> 

           {/* third section: */}

        <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Best 10 in Japan this week</h1>
            <div  class="flex overflow-x-auto" >
                <section  style={{display:'flex', flexDirection:'row'}}class="flex-shrink-0 border-2 border-white-300">

             {
               shuffle(movies).map(movie => 
                   <MovieDisplay 
                       key={movie.id}
                       movie={movie}></MovieDisplay>)
               } 
                   </section>
               </div>
 
         </div>
    <Footer />
    </>
      }
  </>
      
  )
}

export default SignUpHome




// import React, { useEffect, useState } from 'react';
// import m1 from '../Assets/movieImage/m1.webp';
// import m2 from '../Assets/movieImage/m2.webp';
// import m3 from '../Assets/movieImage/m3.jpeg';
// import m4 from '../Assets/movieImage/m4.jpeg';
// import m5 from '../Assets/movieImage/m5.jpeg';

// import m6 from '../Assets/movieImage/m6.webp';
// import m7 from '../Assets/movieImage/m7.webp';
// import m8 from '../Assets/movieImage/m8.webp';
// import m9 from '../Assets/movieImage/m9.jpeg';
// import m10 from '../Assets/movieImage/m10.jpeg';
// import m11 from '../Assets/movieImage/m11.webp';
// import m12 from '../Assets/movieImage/m12.jpeg';
// import m13 from '../Assets/movieImage/m13.jpeg';
// import m14 from '../Assets/movieImage/m14.png';
// import m15 from '../Assets/movieImage/m15.jpeg';
// import m16 from '../Assets/movieImage/m16.webp';
// import m17 from '../Assets/movieImage/m17.jpeg';
// import m18 from '../Assets/movieImage/m18.jpg';

// import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
// import Footer from '../Footer/Footer';
// import { shuffle } from './Shuffle';
// import Loading from '../Components/Loading';
// import MovieDetail from './MovieDisplay';
// import MovieDisplay from './MovieDisplay';


// const allMoviesThumbnail =  [m1,m2,m3,m4,m5,m6,m7,m8,m9,m10,m11,m12,m13,m14,m15,m16,m17,m18]
   
    



// function SignUpHome() {

//   const [loading, setLoading] = useState(false);
//   const [movies, setMovies] = useState([])

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 1000);
//   }, []);


//   useEffect(() => {
//    fetch('../movies.json')
//    .then(res => res.json())
//    .then(data => setMovies(data))
 
   
//  }, [])

 


//   return (
//     <>
//     {loading ? <Loading /> :
   
//       <>

//       <div style={{backgroundColor:'#20262E',paddingBottom:'5%'}}>

//         <NavbarAfterSignIn />


//         {
//          movies.map(movie => 
//                  <MovieDisplay 
//                       key={movie.id}
//                        movie={movie}></MovieDisplay>)
//                }
//                {console.log("movies", movies.length)}

             

     


//     </div>
//     <Footer />
//     </>
//       }
//   </>
      
//   )
// }

// export default SignUpHome
