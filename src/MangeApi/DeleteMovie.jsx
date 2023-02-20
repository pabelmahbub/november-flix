import React from 'react';
import './PostMovies.css';
import { useEffect,useState } from 'react';
import Loading from '../Components/Loading';

function DeleteMovie() {
      const [movies, setMovies] = useState([]);
      useEffect(() => {
         fetch ('https://nenflix-server-production.up.railway.app/movies')
         .then(res => res.json())
         .then(data => setMovies(data));
      }, [])
      {console.log('HHH', movies)}

      const handleDelete = id =>{
                              const url = `https://nenflix-server-production.up.railway.app/manageMovie/${id}`;
                              fetch(url, {method:'DELETE'})
                              .then(res=>res.json())
                              .then(data=>{
                                   console.log(data);
                                   if(data.deletedCount){
                                       alert('data is deleted');
                                       const remaining = movies.filter(service => service._id !== id);
                                       setMovies(remaining);
                                       {console.log('6HHH', movies)}
                                   }
                              })
      }
      
  return (
    <div style={{textAlign:'center'}}>
         <h1 style={{fontFamily:'raleway'}} className='text-3xl font-bold pt-12'>Manage movie List</h1>
         <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}>
                {
                  movies.length === 0 && <Loading />
                }
        </div>
       
         <h3 style={{fontFamily:'raleway'}} className='text-2xl font-bold'>Total movies: {movies.length}</h3>
         {
            movies.map(service => <div style={{borderTop:"2px solid orange",paddingTop:'10px',paddingBottom:'10px'}}
                      key={service._id}>
                      <h4 style={{fontFamily:'raleway'}} className='text-2xl font-bold'>{service.Title}</h4>
                      <h4 style={{fontFamily:'raleway'}} className='text-xl font-bold'>{service.Year}</h4>
                      <h4 style={{fontFamily:'raleway'}} className='text-xl font-bold'>{service.Actors}</h4>
                      <h4 style={{fontFamily:'raleway'}} className='text-xl font-bold'>{service.Genre}</h4>
                      <button className='btn btn-info mt-2 text-2xl font-bold' onClick={()=>handleDelete(service._id)} style={{fontFamily:'raleway'}} >delete</button>

            </div>)
         }
    </div>
  )
}

export default DeleteMovie;