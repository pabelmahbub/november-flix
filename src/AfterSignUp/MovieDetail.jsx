import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function MovieDetail() {

    const { id } = useParams();
    // const [service, setService] = useState("");
    // useEffect(() => {
      
    //     const url =`https://tech-japan-production.up.railway.app/jobs/${serviceId}`;
    //     fetch(url)
    //     .then(res =>res.json())
       
    //     .then(data => setService(data));
    // }, [])

  return (
    <div>
      <h1>Movie Detail</h1>
    </div>
  )
}

export default MovieDetail
