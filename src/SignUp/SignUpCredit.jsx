import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import check from '../../src/Assets/images/red-check.svg'
import { AiOutlineRight } from 'react-icons/ai';
import FooterSignUp from '../Footer/FooterSignUp';
import NavbarSignUp from '../Navbar/NavbarSignUp';
import visa from '../../src/Assets/images/visa.svg';
import paypay from '../../src/Assets/images/paypay.svg';
import netflix from '../../src/Assets/images/netflix.svg';
import mastercard from '../../src/Assets/images/mastercard.svg';
import jcb from '../../src/Assets/images/jcb.svg';
import dinners from '../../src/Assets/images/dinners.svg';
import au from '../../src/Assets/images/au.svg';
import american from '../../src/Assets/images/american.svg';
import axios from "axios";




function SignUpCredit() {
 
  const price = 200;


      
  return (
       
    <div>
    <NavbarSignUp />
 
   <div style={{paddingTop:'5%',paddingBottom:'7%',display:'flex', justifyContent:'center'}}>
      <div className="card bg-base-100">
          
       <div className="card-body text-left">
           <p className="text-sm text-left">STEP 3 OF 3</p>
           <h2 className="card-title text-4xl">Set up your credit or debit card</h2>

           {/* card section */}
           <div style={{display:'flex'}}>
              <img src={visa} width="40px" className='mr-4' alt=""/>
              <img src={mastercard} width="33px" className='mr-4' alt=""/>
              <img src={american} width="23px" className='mr-4' alt=""/>
              <img src={jcb} width="23px" className='mr-4 mt-2' alt=""/>
              <img src={dinners} width="53px" className='mr-4' alt=""/>
           </div>

              <input type="text" placeholder="First Name" style={{borderRadius:'0px'}} className="input input-bordered  w-full" />
              <input type="text" placeholder="Last Name" style={{borderRadius:'0px'}} className="input input-bordered  w-full" />
              <input type="text" placeholder="Card Number" style={{borderRadius:'0px'}} className="input input-bordered  w-full" />
              <input type="text" placeholder="Expiration date(MM/YY)" style={{borderRadius:'0px'}} className="input input-bordered  w-full" />
              <input type="text" placeholder="Security code(CVV)" style={{borderRadius:'0px'}} className="input input-bordered  w-full" />



             {/* description text */}

         <div style={{display:'flex',marginTop:'10px',backgroundColor:'#f9f8f8',flexDirection: 'row',padding:'10px',borderRadius:'4px'}}>
            <div style={{width:'50%'}}>
              <p className='text-xl font-bold'>JPY{price}/month</p>
              <p className='text-xl'>Standard Plan</p>
            </div>
            <div style={{width:'50%'}}>
              <Link to="/signup/planform">
                 <p style={{textAlign:'right',color:'#0096FF',paddingTop:'8%'}} className='text-md font-bold'>Change</p>
               </Link>
             </div>
          </div>

          <div>
            <p className="">By checking the checkbox below, you agree to our <span style={{color:'#0096FF'}}>Terms of conditions.</span> </p>
          </div>



          <div style={{display:'flex',marginTop:'10px'}}>
            <input type="checkbox" style={{borderRadius:'0px',backgroundColor:'#fff'}} className="checkbox checkbox-md mr-3" />
            <p className="text- pb-3">I agree.</p>
          </div>

       </div>

         

     
         
         <Link to='/homepage'>
           <button style={{width:'90%',borderRadius:'4px',fontSize:'22px'}}className="btn button text-transform: capitalize">Start Membership</button>
         </Link>
        
        
    </div>
   </div>

         <FooterSignUp />

</div>
       

  )
}

export default SignUpCredit
