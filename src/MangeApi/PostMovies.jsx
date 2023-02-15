import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import "./PostMovies.css";

function PostMovies() {
         const { register, handleSubmit,reset } = useForm();
         const onSubmit = data => {
                     console.log(data);
                     axios.post('https://nenflix-server-production.up.railway.app/addMovie', data)
                     .then(res=>{
                              console.log(res);
                              if(res.data.insertedId){
                                alert('Movie data added successfully');
                                reset();
                              }
                     })
};

  return (
   <div className='add-service'>
      <h1 className='titleStyle'><span className='title'>Nenflix</span> Post movie datails.</h1>
         {/**React-hook-form */}
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Title", { required: true, maxLength: 100 })} placeholder='Movie Name ' />
      <input {...register("Year", { maxLength: 20 })} placeholder='Released Year '/>
      <input {...register("Released", { maxLength: 40 })} placeholder='Released Date *'/>
      <input {...register("Runtime", { maxLength: 40 })} placeholder='Runtime '/>
      <input {...register("Genre", { maxLength: 70 })} placeholder="Genre of movie "/>
      <input {...register("Director", { maxLength: 200 })} placeholder="Director name*"/>
      <input {...register("Actors", {  maxLength: 300 })} placeholder="Actors name  "/>
      <input {...register("Writer", {  maxLength: 300 })} placeholder="Writers name*"/>
      <textarea {...register("Plot")} placeholder='Movie plot'/>
      <textarea {...register("Details")} placeholder='Details about this movie'/>
      <input {...register("Language",{  maxLength:50 })} placeholder='Language medium '/>
      <input {...register("Poster")} placeholder='Movie poster url '/>
      <input {...register("Link")} placeholder='Movie url '/>
      <input {...register("imdbID", {  maxLength: 70 })} placeholder="IMDB Rating (out of 10 ) "/>
      <input {...register("Response", {  maxLength: 70 })} placeholder="Response (true/ False) "/>
      <input {...register("Awards", {  maxLength: 100 })} placeholder="Awards"/>
      <input style={{backgroundColor:'salmon', color:'#fff',fontWeight:'bold'}}type="submit" />
    </form>
    </div>
  )
}

export default PostMovies;