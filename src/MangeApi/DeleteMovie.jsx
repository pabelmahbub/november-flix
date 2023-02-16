import React from 'react';
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
                              const url = `https://nenflix-server-production.up.railway.app/manageMovies/${id}`;
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
         <h1>Manage movies</h1>
         <div style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}>
                {
                  movies.length === 0 && <Loading />
                }
        </div>
         <h3>Total movies: {movies.length}</h3>
         {
            movies.map(service => <div style={{borderTop:"2px solid orange",paddingTop:'10px',paddingBottom:'10px'}}
                      key={service._id}>
                      <h4>{service.positionName}</h4>
                      <h4>{service.companyName}</h4>
                      <button className='btn btn-info mt-2' onClick={()=>handleDelete(service._id)}>delete</button>
            </div>)
         }
    </div>
  )
}

export default DeleteMovie;