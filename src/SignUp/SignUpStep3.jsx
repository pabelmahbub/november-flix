import React from 'react'
import { Link } from 'react-router-dom';
import pc from '../../src/Assets/images/pc.jpeg'
import { AiOutlineRight } from 'react-icons/ai';
import FooterSignUp from '../Footer/FooterSignUp';
import NavbarSignUp from '../Navbar/NavbarSignUp';


function SignUpStep3() {
  return (
    <div>
       <NavbarSignUp />
    
      <div style={{paddingTop:'5%',paddingBottom:'7%',display:'flex', justifyContent:'center'}}>
         <div className="card bg-base-100">
              <figure className="px-10 pt-10">
              <img src={pc} width="400px" height="400px"  alt="check-image"/>
              </figure>
          <div className="card-body items-center text-center px-12">
              <p>STEP 2 OF 3</p>
              <h2 className="card-title text-3xl">Finish setting up your <br/>account</h2>
              <p className="text-xl">Nov-flix is personalized for you.<br/>Create a password to watch on any<br/> device at any time</p>



              {/* <ul className="menu bg-base-100 w-456 p-2 rounded-box">
                <li>
                  <a>
                    <img src={check} width="23px" height="23px" alt="check-image"/>
                    <p style={{textAlign:'left'}}>No commitments, cancel any time.</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={check} width="23px" height="23px" alt="check-image"/>
                    <p style={{textAlign:'left'}}>Endless entertainment for one low price.</p>
                  </a>
                </li>
                <li>
                  <a>
                    <img src={check} width="23px" height="23px" alt="check-image"/>
                    <p style={{textAlign:'left'}}>Unlimited viewing on all your devices</p>
                  </a>
                </li>
              </ul> */}

          </div>

            <Link to='/signup/regform'>
              <button style={{width:'80%',borderRadius:'4px',fontSize:'22px'}}className="btn button text-transform: capitalize">Next</button>
            </Link>
       </div>
      </div>

            <FooterSignUp />

  </div>
  )
}

export default SignUpStep3
