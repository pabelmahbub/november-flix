import React from 'react'
import { Link } from 'react-router-dom';
import FooterSignUp from '../Footer/FooterSignUp';
import NavbarSignUp from '../Navbar/NavbarSignUp';


function SignUpStep4() {
  return (
    <div>
       <NavbarSignUp />
    
      <div style={{paddingTop:'5%',paddingBottom:'7%',display:'flex', justifyContent:'center'}}>
         <div className="card bg-base-100">
             
          <div className="card-body text-left">
              <p className="text-sm text-left">STEP 2 OF 3</p>
              <h2 className="card-title text-3xl">Create a password to start<br/>your membership</h2>
              <p className="text-xl pb-3">Just a few more steps and you're done!<br/>We hate paperwork too.</p>

                 <input type="text" placeholder="Email" style={{borderRadius:'0px'}} className="input input-bordered  w-full" />
                 <input type="password" placeholder="Add a password" style={{borderRadius:'0px'}} className="input input-bordered  w-full" />
                 {/* <p style={{fontSize:'12px', color:'red'}}>Password is required</p> */}

             <div style={{display:'flex',marginTop:'10px'}}>
               <input type="checkbox" style={{borderRadius:'0px',backgroundColor:'#fff'}} className="checkbox checkbox-md mr-3" />
               <p className="text- pb-3">Please do not email me Nenflix special offers.</p>
             </div>

          </div>

            <Link to='/signup/paymentPicker'>
              <button style={{width:'86%',borderRadius:'4px',fontSize:'22px'}}className="btn button text-transform: capitalize">Next</button>
            </Link>
       </div>
      </div>

            <FooterSignUp />

  </div>
  )
}

export default SignUpStep4
