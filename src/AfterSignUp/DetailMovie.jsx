import React, { useState } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn';
import Footer from '../Footer/Footer';
import { AiFillCaretRight, AiFillLike, AiOutlinePlus } from 'react-icons/ai';
import 'react-toastify/dist/ReactToastify.css';


const currentMonth = new Date(Date.now()).toLocaleString('en-us',{month:'short', year:'numeric'})


function DetailMovie() {
  const movie = useLoaderData();
  const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      //  toggle
      setIsActive(current => !current);
      //  or set to true
      // setIsActive(true);
    };
    


  return (
    <>

    <NavbarAfterSignIn />


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
          {!movie.Language ? null : <p className="text-green-600 my-5 text-sm font-bold pr-5">{movie.Language && movie?.Language + " available"}</p>}
          {!movie.imdbRating ? null :<p className="text-white my-5 text-sm font-bold pr-5">{movie?.imdbRating &&  movie?.imdbRating + " imdb Rating" }</p>}
          {!movie.Released ? null : <p className="text-white my-5 text-sm font-bold pr-5"> {movie?.Released &&  movie?.Released +" released"}</p>}
         {!movie.Runtime ? null : <p className="text-white my-5 text-sm font-bold">{movie.Runtime && movie.Runtime + " runtime"}</p>}
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
        {!movie.Link ? null :
        <p className="text-white mt-2 text-sm">Link: <span className="text-green-500 text-sm font-bold"><a href={movie.Link}>Watch Trailer!</a></span></p>
        }
        <p className="text-white mt-3 text-sm">{movie.Details}</p>


        
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


