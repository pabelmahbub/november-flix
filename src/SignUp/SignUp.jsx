import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import FooterSignUp from '../Footer/FooterSignUp';
import NavbarSignUp from '../Navbar/NavbarSignUp';


function SignUp() {
  return (
    <div>
       <NavbarSignUp />
    
      <div style={{paddingTop:'80px',paddingBottom:'90px',display:'flex', justifyContent:'center'}}>
         <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                 <img height="45px" width="45px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAGU_9hfA-rvv_lUVYkanoEPPp3FHaqmpFwTWTda_VximaB8_-jSOpJcpD9A2H9ob9Mk&usqp=CAU" />
              </figure>
          <div className="card-body items-center text-center">
              <p>STEP 1 OF 3</p>
              <h2 className="card-title text-3xl">Choose your plan.</h2>


              <ul className="menu bg-base-100 w-456 p-2 rounded-box">
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                    <p style={{textAlign:'left'}}>No commitments, cancel any time.</p>
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p style={{textAlign:'left'}}>Endless entertainment for one low price.</p>
                  </a>
                </li>
                <li>
                  <a>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                    <p style={{textAlign:'left'}}>Unlimited viewing on all your devices</p>
                  </a>
                </li>
              </ul>

          </div>

            <Link to='/signup/planform'>
              <button style={{width:'100%'}}className="btn button">Next</button>
            </Link>
       </div>
      </div>

            <FooterSignUp />

  </div>
  )
}

export default SignUp
