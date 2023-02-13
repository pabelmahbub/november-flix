import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { shuffle } from './Shuffle';

function MovieDisplay(props) {
  const {  movie = {} } = props;
  const { id = '', Poster, Title } = movie;

 



  return (
    <div >

                {/* first section */}
                <Link to={`/homepage/${id}`}>
                   <img src={Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p  style={{color:'#fff',fontSize:'18px',fontWeight:'bold',fontFamily:'raleway'}} className="py-2">{Title}</p> 
               
                  
                  </Link> 


              

          
          






    </div>
  )
}

export default MovieDisplay;
