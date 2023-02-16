import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    let year = new Date().getFullYear() 
  return (
    <div>
      <footer className="footer p-10 bg-neutral text-neutral-content">
       
        <div>
            <span className="footer-title">FAQ</span> 
            <a className="link link-hover">Investor Relations</a>
            <a className="link link-hover">Ways to watch</a>
            <a className="link link-hover">Legal Notices</a>
            <a className="link link-hover">Advertisement</a>
        </div> 
        <div>
            <span className="footer-title">Help center</span> 
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
        </div> 
        <div>
            <span className="footer-title">Legal</span> 
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
           <p style={{color:'#fff',fontFamily:'raleway'}}>Questions? Call 012-345-6789</p>
           <Link to='/postMovies'>
           <p style={{color:'#fff',fontFamily:'raleway'}}>Post movies</p>
           </Link>
           <Link to='/deleteMovie'>
           <p style={{color:'#fff',fontFamily:'raleway'}}>Delete movies</p>
           </Link>
           <p style={{color:'#fff',fontFamily:'raleway', fontSize:12}}>© {year}; pabelmahbub@gmail.com</p>
        </div>

      </footer>



      
    </div>
  )
}

export default Footer
