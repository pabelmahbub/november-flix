import React, { useEffect, useState } from 'react';
import family from '../Assets/images/family.jpeg';
import NavbarAfterSignIn from '../Navbar/NavbarAfterSignIn'
import PhotoAlbum from "react-photo-album";

const photos = [
  { src: family, width: 20, height: 20 },
  { src: family, width: 20, height: 20 },
  { src: family, width: 20, height: 20 },
  { src: family, width: 20, height: 20 },
];

function SignUpHome() {
  const [data, setData] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  {console.log(data)}


  
   


  return (
    <div>
        <NavbarAfterSignIn />

        <div style={{backgroundColor:'#20262E'}} className=" bg-base-100">
        <h1 className="textLeft lg:text-2xl md:text-xl sm:text-xl font-bold pt-6 pl-6 pb-6">Popular in Nov-Flix</h1>
          {/* <div className="hero-content  lg:flex-row">
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
         </div> */}

            <PhotoAlbum layout="rows" photos={photos} />

            <h1 className="textLeft lg:text-2xl md:text-xl sm:text-xl font-bold pt-6 pl-6 pb-6">Top 10 in Japan today</h1>
          {/* <div className="hero-content  lg:flex-row">
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
         </div> */}

            <PhotoAlbum layout="rows" photos={photos} />


            <h1 className="textLeft lg:text-2xl md:text-xl sm:text-xl font-bold pt-6 pl-6 pb-6">Trending now</h1>
          {/* <div className="hero-content  lg:flex-row">
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
         </div> */}

            <PhotoAlbum layout="rows" photos={photos} />


            <h1 className="textLeft lg:text-2xl md:text-xl sm:text-xl font-bold pt-6 pl-6 pb-6">Oscar, Grammy award winning movies</h1>
          {/* <div className="hero-content  lg:flex-row">
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
             <img src={family} height="300px" width="350px"/>
         </div> */}

            <PhotoAlbum layout="rows" photos={photos} />




      </div>



      


        {data.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </div>
      ))}
      
    </div>
  )
}

export default SignUpHome
