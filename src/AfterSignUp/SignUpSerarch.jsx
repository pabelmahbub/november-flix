import React,{useEffect, useState}  from 'react';
import './HomePage.css';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
import Footer from '../Footer/Footer';
import { shuffle } from './Shuffle';
import { useNavigate } from 'react-router-dom';
import Loading from '../Components/Loading';


function SignUpSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movies, setMovies] = useState([])


  useEffect(() => {
   fetch(`https://nenflix-server-production.up.railway.app/movies`)
   .then(res => res.json())
   .then(data => setMovies(data))
   
 }, [])


  const handleSearch = event => {
    setSearchTerm(event.target.value);
    const filteredResults = movies.filter(movie => movie.Genre.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(filteredResults);
  };

  const navigate = useNavigate();
    const navigateToServiceDetail= id =>{
      navigate(`/signup/movieDetail/${id}`);
    }


 
  return (
    <>
    {movies.length === 0 ? <Loading /> :
    <div  style={{backgroundColor:'#20262E',paddingBottom:'10%'}}>
        <NavbarAfterSignIn />

        <input type="text"  placeholder= "Type movie genre(romantic, horror, crime,... ...)" style={{borderRadius:'0px',borderRadius:'4px'}} className="input input-bordered  lg:w-2/5 md:w-1/2 sm:w-4/6 py-2 px-6 mt-6" onChange={handleSearch}   />

        {/* first section */}
        <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Best of 2023 & 2022</h1>
        <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto" >

             {(searchTerm.length === 0) && shuffle(movies).map(myMovie=>(
              //  <button onClick={()=> navigateToServiceDetail(myMovie.id)}>
                <section class="flex-shrink-0 border-2 border-white-300">
                   <img src={myMovie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p className='movieName' key={myMovie.id}>{myMovie.Title}</p> 
                </section>
                // </button>

                 ))}

             {searchResults.map(movie => (
                 <section class="flex-shrink-0 border-2 border-white-300">
                     <img src={movie.Poster} class="h-72 w-60" alt="" />
                     <p className='movieName' key={movie.id}>{movie.Title}</p> 
                </section>
                 ))}
               
          </div>

          {/* Second section */}

         <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Oscar Winning series</h1>

         <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto">

              {(searchTerm.length === 0) && shuffle(movies).map(myMovie=>(
                   <section class="flex-shrink-0 border-2 border-white-300">
                       <img src={myMovie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                       <p className='movieName' key={myMovie.id}>{myMovie.Title}</p> 
                   </section>
                ))}

             {searchResults.map(movie => (
                <section class="flex-shrink-0 border-2 border-white-300">
                     <img src={movie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                     <p className='movieName' key={movie.id}>{movie.Title}</p> 
                </section>
                 ))}

         </div>

          {/* Second section */}

           <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Hollywood Best collection</h1>

           <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto">
              {(searchTerm.length === 0) && shuffle(movies).map(myMovie=>(
                   <section class="flex-shrink-0 border-2 border-white-300">
                         <img src={myMovie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                         <p className='movieName' key={myMovie.id}>{myMovie.Title}</p> 
                    </section>
                 ))}

                {searchResults.map(movie => (
                      <section class="flex-shrink-0 border-2 border-white-300">
                          <img src={movie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                          <p className='movieName' key={movie.id}>{movie.Title}</p> 
                      </section>
                    ))}

            </div>

      </div>
      }
    <Footer />
                
    </>
  )
}

export default SignUpSearch;
