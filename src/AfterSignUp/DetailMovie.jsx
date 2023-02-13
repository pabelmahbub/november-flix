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
import { AiFillCaretRight, AiFillLike, AiOutlinePlus } from 'react-icons/ai';
import ReactPlayer from 'react-player/youtube';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function DetailMovie() {
  const { serviceId } = useParams();
  const [service, setService] = useState("");
  const [movies, setMovies] = useState([]);
  const [isActive, setIsActive] = useState(false);

  



    useEffect(() => {
      fetch('../movies.json')
      .then(res => res.json())
      .then(data => setMovies(data))
    }, [])

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







<div style={{backgroundColor:"#1e1e1e"}} className="hero min-h-screen lg:mt-[-24px]">

  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={image1} className="lg:max-w-lg md:max-w-md sm:max-w-sm rounded-lg shadow-2xl" />
    {/* <video height="400px" width="600px" controls>
                <source src="https://www.youtube.com/watch?v=2m1drlOZSDw" className="videoFrame" type="video/mp4" />
            </video>  */}

{/* <iframe className='video'
        title='Youtube player'
        sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
        src={`https://youtube.com/embed/${youtubeID}?autoplay=0`}>
</iframe> */}


    <div  style={{textAlign:'left'}} className="lg:w-1/2">
     
   <h1 className="text-white text-4xl font-bold mb-5">Mission Impossible-7</h1>


 <div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
</div>

<div style={{display:'flex'}}>
  <p className="text-green-600 my-5 text-sm font-bold pr-5">NEW</p>
  <p className="text-white my-5 text-sm font-bold pr-5">2018</p>
  <p className="text-white my-5 text-sm font-bold pr-5">12.1 million view</p>
  <p className="text-white my-5 text-sm font-bold">110 min</p>
</div>


    <p className="text-white my-5 text-sm font-bold">Season 2 coming next month</p>
    <p className="text-white mt-3 text-sm">Mission: Impossible is a series of American action spy films based on the television series of the same name created by Bruce Geller. The series is mainly produced by and stars Tom Cruise, who plays Ethan Hunt, an agent of the Impossible Missions Force (IMF). </p>
    <div style={{display:'flex', flexDirection:'row'}}className="mt-4">
      <button style={{borderRadius:'0px',backgroundColor:'red',color:'#fff',borderColor:'red'}} className="btn btn-error mr-2"><AiFillCaretRight  className='icon text-white-700 text-2xl mr-2'/>Play</button>
      <button style={{borderRadius:'0px',backgroundColor:'#000',color:'#fff',borderColor:'#fff'}} className="btn btn-error"><AiOutlinePlus  className='icon text-white-700 text-2xl mr-2'/>My List</button>
      <button onClick={handleClick}  style={{borderRadius:'30px',backgroundColor:!isActive ? '#1e1e1e' : '#1e1e1e',color:!isActive ?'#fff':'red',borderColor:'#fff',marginLeft:'15px'}} className="btn btn-square"><AiFillLike  className='icon text-white-700 text-3xl mr-1'/></button>
    </div>
    <p className="text-white mt-4 text-sm">Starring: <span className="text-white  text-sm font-bold">Tom Cruise</span></p>
    <p className="text-white mt-2 text-sm">Director: <span className="text-white text-sm font-bold">James Cameron</span></p>
    <p className="text-white mt-2 text-sm">Genres:<span className="text-white  text-sm font-bold">Action, Fiction, Drama</span></p>
    <p className="text-white mt-3 text-sm">The series has been positively received from critics and audiences. It is the 18th-highest-grossing film series of all time, earning over $3.5 billion worldwide,[1] and is often cited as one of the best action franchises to date. The sixth and most recent film, titled Fallout, was released on July 27, 2018 and is currently the series's highest-grossing entry.</p>

    
    </div>
  </div>
</div>


      <div style={{backgroundColor:"#1e1e1e",justifyContent:'center'}} className="text-white tabs pb-12">
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
