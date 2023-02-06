import React from 'react'

function Navbar() {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a style={{color:'red', fontFamily:'Raleway', fontWeight:900}} className="btn btn-ghost normal-case text-4xl">NOVEMBER-FLIX</a>
  </div>
  <div className="flex-none mr-16">
    <ul className="menu menu-horizontal px-1">
      
        <div className="navbar-end pr-10">
         <select  style={{width: '150%', backgroundColor:'black', color:'#fff'}} className="select select-bordered w-full max-w-xs">
            <option>日本語</option>
            <option>English</option>
          </select>
        </div>
        
        <div className="navbar-end">
            <a style={{backgroundColor:'red', color:'#fff'}} className="btn">Sign In</a>
        </div>
        
    </ul>
  </div>
</div>
  )
}

export default Navbar