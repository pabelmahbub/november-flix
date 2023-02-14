import React, { useEffect, useState } from 'react';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
import Footer from '../Footer/Footer';
import { shuffle } from './Shuffle';
import Loading from '../Components/Loading';


const currentMonth = new Date(Date.now()).toLocaleString('en-us',{month:'short', year:'numeric'})

function SignUpLatest() {
  const [movies, setMovies] = useState([])
  
  useEffect(() => {
   fetch(`https://nenflix-server-production.up.railway.app/movies`)
   .then(res => res.json())
   .then(data => setMovies(data))
 
   
 }, [])


  return (
    <>
    {movies.length === 0 ? <Loading /> :
    <div style={{backgroundColor:'#20262E',paddingBottom:'50%'}}>
        <NavbarAfterSignIn />

       {/* first section */}
        <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">{currentMonth} released movies.</h1>
        <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto" >

             {shuffle(movies).map(myMovie=>(
              //  <button onClick={()=> navigateToServiceDetail(myMovie.id)}>
                <section class="flex-shrink-0 border-2 border-white-300">
                   <img src={myMovie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p className='movieName' key={myMovie.id}>{myMovie.Title}</p> 
                </section>
                 ))}
          </div>


          {/* 2nd section */}
        <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Last Month released movies.</h1>
        <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto" >

             {shuffle(movies).map(myMovie=>(
              //  <button onClick={()=> navigateToServiceDetail(myMovie.id)}>
                <section class="flex-shrink-0 border-2 border-white-300">
                   <img src={myMovie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p className='movieName' key={myMovie.id}>{myMovie.Title}</p> 
                </section>
                 ))}
          </div>


           {/* 3rd section */}
        <h1 className="textLeft lg:text-3xl md:text-2xl sm:text-xl font-bold pt-12 pl-6 pb-6">Asian Best released in this month.</h1>
        <div  style={{backgroundColor:'#fff'}} class="flex overflow-x-auto" >

             {shuffle(movies).map(myMovie=>(
              //  <button onClick={()=> navigateToServiceDetail(myMovie.id)}>
                <section class="flex-shrink-0 border-2 border-white-300">
                   <img src={myMovie.Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p className='movieName' key={myMovie.id}>{myMovie.Title}</p> 
                </section>
                 ))}
          </div>
      
      </div>
}
    <Footer />
    </>
  )
}

export default SignUpLatest


