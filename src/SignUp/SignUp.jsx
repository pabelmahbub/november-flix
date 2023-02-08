import React from 'react'
import { Link } from 'react-router-dom';
import check from '../../src/Assets/images/red-check.svg'
import { AiOutlineRight } from 'react-icons/ai';
import FooterSignUp from '../Footer/FooterSignUp';
import NavbarSignUp from '../Navbar/NavbarSignUp';


function SignUp() {
  return (
    <div>
       <NavbarSignUp />
    
      <div style={{paddingTop:'80px',paddingBottom:'90px',display:'flex', justifyContent:'center'}}>
         <div className="card w-96 bg-base-100">
              <figure className="px-10 pt-10">
                 <img height="45px" width="45px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxAGU_9hfA-rvv_lUVYkanoEPPp3FHaqmpFwTWTda_VximaB8_-jSOpJcpD9A2H9ob9Mk&usqp=CAU" />
              </figure>
          <div className="card-body items-center text-center">
              <p>STEP 1 OF 3</p>
              <h2 className="card-title text-3xl">Choose your plan.</h2>


              <ul className="menu bg-base-100 w-456 p-2 rounded-box">
                <li>
                  <a>
                    <img src={check} width="23px" height="23px" alt="check-image"/>
                    <p className='text-md font-bold text-left'>No commitments, cancel any time.</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={check} width="23px" height="23px" alt="check-image"/>
                    <p className='text-md font-bold text-left'>Endless entertainment for one low price.</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={check} width="23px" height="23px" alt="check-image"/>
                    <p className='text-md font-bold text-left'>Unlimited viewing on all your devices</p>
                  </a>
                </li>
              </ul>

          </div>

            <Link to='/signup/planform'>
              <button style={{width:'80%',borderRadius:'4px',fontSize:'22px'}}className="btn button text-transform: capitalize">Next</button>
            </Link>
       </div>
      </div>

            <FooterSignUp />

  </div>
  )
}

export default SignUp
