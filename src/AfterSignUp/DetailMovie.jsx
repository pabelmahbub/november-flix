import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn';
import { shuffle } from './Shuffle';
import Footer from '../Footer/Footer';
import { AiFillCaretRight, AiFillLike, AiOutlinePlus } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';
import SingleMovieDetail from './SingleMovieDetail';


const currentMonth = new Date(Date.now()).toLocaleString('en-us',{month:'short', year:'numeric'})


function DetailMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const [movies, setMovies] = useState([])
  
  useEffect(() => {
   fetch(`https://nenflix-server-production.up.railway.app/movies`)
   .then(res => res.json())
   .then(data => setMovies(data))
 
   
 }, [])


  useEffect(() => {
  const url =`https://nenflix-server-production.up.railway.app/movies/${id}`;
  fetch(url)
  .then(res =>res.json())
  .then(data => setMovie(data));
},[])

    const handleClick = () => {
      // 👇️ toggle
      setIsActive(current => !current);
      // 👇️ or set to true
      // setIsActive(true);
    };
    


  return (
    <>

    <NavbarAfterSignIn />

          {/* first section */}
          <div  style={{backgroundColor:'#20262E',paddingTop:'10px'}} >
             <h1 className="text-white  text-left lg:text-4xl md:text-xl sm:text-xl font-bold pt-6 pl-6 pb-6">{currentMonth} released movies</h1>
             <div class="flex overflow-x-auto  bg-blue-200">
                

              {shuffle(movies).map(myMovie=>(
                  <section class="flex-shrink-0 border-2 border-white-300">
                    <img src={myMovie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                    <p className='movieName' key={myMovie.id}>{myMovie.Title}</p> 
                  </section>
                  ))}
                  </div>
          </div>



  <div style={{backgroundColor:"#1e1e1e"}} className="hero min-h-screen ">

       <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={movie.Poster} className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />

            <div  style={{textAlign:'left'}} className="lg:w-1/2">
     
            <h1 className="text-white text-4xl font-bold mb-5">{movie.Title}</h1>


          <div className="rating">
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
          </div>

          <div style={{display:'flex'}}>
            <p className="text-green-600 my-5 text-sm font-bold pr-5">{movie.Language}</p>
            <p className="text-white my-5 text-sm font-bold pr-5">imdbRating is {movie.imdbRating}</p>
            <p className="text-white my-5 text-sm font-bold pr-5">Released in {movie.Released}</p>
            <p className="text-white my-5 text-sm font-bold">Runtime is {movie.Runtime}</p>
          </div>


          <p className="text-white my-5 text-sm font-bold">{movie.Genre}</p>
          <p className="text-green-600 my-5 text-sm font-bold pr-5">{movie.Awards}</p>
          <p className="text-white mt-3 text-sm">{movie.Plot} </p>
          <div style={{display:'flex', flexDirection:'row'}}className="mt-4">

          <Link to="/homepage/singlemoviedetail">
          <button style={{borderRadius:'0px',backgroundColor:'red',color:'#fff',borderColor:'red'}} className="btn btn-error mr-2"><AiFillCaretRight  className='icon text-white-700 text-2xl mr-2'/>Play</button>
          </Link>
          <button style={{borderRadius:'0px',backgroundColor:'#000',color:'#fff',borderColor:'#fff'}} className="btn btn-error"><AiOutlinePlus  className='icon text-white-700 text-2xl mr-2'/>My List</button>
          <button onClick={handleClick}  style={{borderRadius:'30px',backgroundColor:!isActive ? '#1e1e1e' : '#1e1e1e',color:!isActive ?'#fff':'red',borderColor:'#fff',marginLeft:'15px'}} className="btn btn-square"><AiFillLike  className='icon text-white-700 text-3xl mr-1'/></button>
        </div>
        <p className="text-white mt-4 text-sm">Starring: <span className="text-white  text-sm font-bold">{movie.Actors}</span></p>
        <p className="text-white mt-2 text-sm">Director: <span className="text-white text-sm font-bold">{movie.Director}</span></p>
        <p className="text-white mt-2 text-sm">Genres: <span className="text-white  text-sm font-bold">{movie.Genre}</span></p>
        <p className="text-white mt-3 text-sm">The series has been positively received from critics and audiences. It is the 18th-highest-grossing film series of all time, earning over $3.5 billion worldwide,[1] and is often cited as one of the best action franchises to date. The sixth and most recent film, titled Fallout, was released on July 27, 2018 and is currently the series's highest-grossing entry.</p>


        
      </div>
    </div>
  </div>


      <div style={{backgroundColor:"#1e1e1e",justifyContent:'center'}} className="text-white tabs pb-12">
        <a  style={{borderBottomColor:'red'}} className=" underLineText tab tab-bordered tab-active">OVERVIEW</a> 
           <Link to="/homepage/moremovies">
        <a  className=" underLineText tab tab-bordered ">MORE LIKE THIS</a> 
           </Link>
           <Link to="/homepage/singlemoviedetail">
        <a className=" underLineText tab tab-bordered">DETAILS</a>
            </Link>
      

  </div>


<Footer />

</>
  )
}

export default DetailMovie;
