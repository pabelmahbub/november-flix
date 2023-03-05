import React, { useContext } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

function Navbar() {
  const {user, logOut} = useContext(AuthContext);
  console.log('My user', user);

const handleLogOut = ()=>{
  logOut()
  .then( ()=>{

  })
  .catch(err => console.error(err));
}


  return (
    <div className="navbar">
       <div className="flex-1">
         <Link to='/'>
           <a className="logoText btn btn-ghost normal-case text-3xl">Nenflix</a>
         </Link>
       </div>
       <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
      
              <div className="navbar-end pr-6">
                  <select className="selectStyle select select-bordered w-full max-w-xs">
                      <option>English</option>
                      <option>日本語</option>
                  </select>
              </div>
            
              <div className="navbar-end">
             
                {!user ? 
                
                  <Link to='/signup'>
                     <a className="signInText btn">Sign Up</a> 
                  </Link>
                :

                 <div style={{display:'flex',marginLeft:'35px', marginTop:'10px'}}className="navbar-end">
                    {(user?.photoURL) ? <img  style={{height:'26px',borderRadius:'13px',marginRight:'10px'}} roundedCircle src={user?.photoURL} /> : <FaUserCircle style={{height:'30',marginRight:'10px'}}/> }
 
                     {/* <p style={{fontFamily:'raleway'}}>Welcome {user?.displayName || user?.email }</p> */}
                    <a to='/home' onClick={handleLogOut} className="text-sm font-bold" style={{color:'#fff'}}>LogOut</a>
                </div>
                  
                }

               
              </div>
          
          </ul>
       </div>
     </div>
  )
}

export default Navbar

