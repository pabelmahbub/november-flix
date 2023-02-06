import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Email() {
  return (
    <div style={{marginLeft:'40px'}}>
        <div style={{display:'flex', flexDirection:'row'}}>
           <input style={{  width: '70%', height: '52px', paddingLeft: '10px' }} type="text" id="name" required placeholder='Email address' name="email" value="email" />
           <Link to="/signup">
                <button style={{backgroundColor:'red', color:'#fff', border:'none',borderRadius:0,height: '52px'}}　className="btn">Get Started<AiOutlineRight  style={{paddingLeft:'4px', height:'20px'}}/></button>
           </Link>
        </div>
    </div>
  )
}

export default Email