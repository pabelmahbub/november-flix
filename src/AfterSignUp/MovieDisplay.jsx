import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { shuffle } from './Shuffle';

function MovieDisplay(props) {
  const {id, Title, Poster} = props.movie;



  return (
    <div >

         {/* first section */}
                   <img src={Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p  style={{color:'#fff',fontSize:'15px',fontWeight:'bold'}}>{id}{Title}</p> 
               
                    <Link to={`/signup/homepage/${id}`}>
                    <button style={{paddingBottom:'8px'}}>More</button>
                  </Link> 

          






    </div>
  )
}

export default MovieDisplay;
