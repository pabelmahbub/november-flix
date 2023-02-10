import React,{useState}  from 'react';
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
import PhotoAlbum from "react-photo-album";
import Footer from '../Footer/Footer';
import { shuffle } from './Shuffle';




const movieData = [
  {
    "id": 1,
    "name": "The Shawshank Redemption",
    "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "producer": "Niki Marvin",
    "actor": "Tim Robbins, Morgan Freeman",
    "genre": "Drama, horror"
  },
  {
    "id": 2,
    "name": "The Godfather",
    "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "producer": "Albert S. Ruddy",
    "actor": "Marlon Brando, Al Pacino",
    "genre": "Crime, Drama"
  },
  {
    "id": 3,
    "name": "The Dark Knight",
    "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "producer": "Emma Thomas, Christopher Nolan",
    "actor": "Christian Bale, Heath Ledger",
    "genre": "Action, Crime, Drama"
  },
  {
    "id": 4,
    "name": "The Shawshank Redemption",
    "image": "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "producer": "Niki Marvin",
    "actor": "Tim Robbins, Morgan Freeman",
    "genre": "Drama"
  },
  {
    "id": 5,
    "name": "The Godfather",
    "image": "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "producer": "Albert S. Ruddy",
    "actor": "Marlon Brando, Al Pacino",
    "genre": "Crime, Drama, romantic"
  },
  {
    "id": 6,
    "name": "The Dark Knight",
    "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "producer": "Emma Thomas, Christopher Nolan",
    "actor": "Christian Bale, Heath Ledger",
    "genre": "Action, Crime, Drama"
  },
  {
    "id": 7,
    "name": "The Dark Knight kungfu",
    "image": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
    "producer": "Emma Thomas, Christopher Nolan",
    "actor": "Christian Bale, Heath Ledger",
    "genre": "romantic, horror, drama"
  }
];

  





function SignUpSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredResults = movieData.filter(movie => movie.genre.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(filteredResults);
  };
 
  return (
    <>
    <div  style={{backgroundColor:'#20262E',paddingBottom:'10%'}}>
        <NavbarAfterSignIn />

        <input type="text" placeholder="Type your movie genre(romantic, horror, crime,... ...)" style={{borderRadius:'0px',borderRadius:'4px'}} className="input input-bordered  lg:w-2/5 md:w-1/2 sm:w-4/6 py-2 px-6 mt-6" onChange={handleSearch}   />
       

        {/* first section */}
        {}
        <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Best of 2023 & 2022</h1>
        <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto">

             {(searchTerm.length === 0) && shuffle(movieData).map(myMovie=>(
                <section class="flex-shrink-0 border-2 border-white-300">
                   <img src={myMovie.image} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p  style={{color:'#20262E',fontSize:'15px',fontWeight:'bold'}} key={myMovie.id}>{myMovie.name}</p> 
                </section>
                 ))}

             {searchResults.map(movie => (
                 <section class="flex-shrink-0 border-2 border-white-300">
                     <img src={movie.image} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                     <p  style={{color:'#20262E',fontSize:'15px',fontWeight:'bold'}} key={movie.id}>{movie.name}</p> 
                </section>
                 ))}
               
          </div>

          {/* Second section */}

         <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Oscar Winning series</h1>

         <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto">

              {(searchTerm.length === 0) && shuffle(movieData).map(myMovie=>(
                   <section class="flex-shrink-0 border-2 border-white-300">
                       <img src={myMovie.image} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                       <p  style={{color:'#20262E',fontSize:'15px',fontWeight:'bold'}} key={myMovie.id}>{myMovie.name}</p> 
                   </section>
                ))}

             {searchResults.map(movie => (
                <section class="flex-shrink-0 border-2 border-white-300">
                     <img src={movie.image} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                     <p  style={{color:'#20262E',fontSize:'15px',fontWeight:'bold'}} key={movie.id}>{movie.name}</p> 
                </section>
                 ))}

         </div>



          {/* Second section */}

           <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Hollywood Best collection</h1>

           <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto">
              {(searchTerm.length === 0) && shuffle(movieData).map(myMovie=>(
                   <section class="flex-shrink-0 border-2 border-white-300">
                         <img src={myMovie.image} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                          <p  style={{color:'#20262E',fontSize:'15px',fontWeight:'bold'}} key={myMovie.id}>{myMovie.name}</p> 
                    </section>
                 ))}

                {searchResults.map(movie => (
                      <section class="flex-shrink-0 border-2 border-white-300">
                          <img src={movie.image} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                          <p  style={{color:'#20262E',fontSize:'15px',fontWeight:'bold'}} key={movie.id}>{movie.name}</p> 
                      </section>
                    ))}

            </div>



      
      </div>
    <Footer />
    </>
  )
}

export default SignUpSearch;
