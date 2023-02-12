import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { shuffle } from './Shuffle';

function MovieDisplay(props) {
  const {  movie = {} } = props;
  const { id = '', Poster, Title } = movie;

 



  return (
    <div >

                {/* first section */}
                   <img src={Poster} class="h-72 w-60" alt="" style={{objectFit:'cover'}}/>
                   <p  style={{color:'#fff',fontSize:'20px',fontWeight:'bold'}}>{Title}</p> 
               
                    <Link to={`/signup/homepage/${id}`}>
                    <button style={{paddingBottom:'8px',color:'white',fontSize:'11px',fontWeight:'bold', borderColor:'white',borderWidth:'1px',padding:'5px',marginBottom:'8px',marginTop:'5px'}}>More Info</button>
                  </Link> 


              

          
          






    </div>
  )
}

export default MovieDisplay;
