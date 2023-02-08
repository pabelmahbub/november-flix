import React from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';
import pc from '../../src/Assets/images/pc.jpeg';
import basic from '../../src/Assets/images/basic.png';
import standard from '../../src/Assets/images/standard.png';
import premium from '../../src/Assets/images/premium.png';
import { AiOutlineRight } from 'react-icons/ai';
import { AiFillUnlock } from 'react-icons/ai';
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


import check from '../../src/Assets/images/red-check.svg';
import line from '../../src/Assets/images/line.svg';


const novFlixJSON =  [
  {
    "id": 1,
    "credit": "Credit or Debit Card",
    "planImg1": visa,
    "planImg2": mastercard,
    "planImg3": american,
    "planImg4": jcb,
    "planImg5": dinners,
    "icon": "AiOutlineRight"
    
    },
    {
      "id": 2,
      "wallet": "Digital Wallet",
      "planImg6": paypay,
    },
    {
      "id": 3,
      "mobile": "Add to mobile bill",
      "planImg7": au,
    },
    {
      "id": 4,
      "gift": "Gift Code",
      "planImg8":netflix,
    },


]


function SignUpPayment() {
  return (
    <div>
       <NavbarSignUp />
    
          <div className='paymentBox'>
            <div className="card bg-base-100">
                  <figure className="px-10 pt-10">
                  <AiFillUnlock className='icon text-white-700 text-4xl text-rose-600'/>
                  </figure>
              <div className="card-body items-center text-center px-12">
                  <p>STEP 2 OF 3</p>
                  <h2 className="card-title text-3xl">Choose how to pay</h2>
                  <p className="text-xl"> Your payment is encrypted and you can change how<br/> you pay anytime.</p>
                  <p className="text-md font-bold">Secure for peace of mind.<br/> Cancel easily online.</p>
              
              <div className='encryptionBox xl:pl-72'>
                  <p>End-to-end encrypted</p> <AiFillUnlock className='icon text-white-700 text-2xl text-yellow-500'/>
              </div>


            {/* card mapping items */}

              <div className="card w-full mb-6">
                {novFlixJSON.map((content) => (
                  <div className='collapseBox'>
                     <div  className="cardStyle collapse collapse-plus border border-base-300 bg-base-100 py-4 text-left">
          
                       <div style={{display:'flex'}}>
                          <div className='px-4 text-md font-bold mt-1'> {content?.credit}{content?.wallet}{content?.mobile}{content?.gift}</div>

                              <div className='imageStyle'>
                                  {content?.planImg1 && <img src={content?.planImg1} width="33px" className='mr-4' />}
                                  {content?.planImg2 &&<img src={content?.planImg2} width="25px" className='mr-4' />}
                                  {content?.planImg3 && <img src={content?.planImg3} width="20px" className='mr-4'  />}
                                  {content?.planImg4 &&<img src={content?.planImg4} width="20px" className='mr-4 mt-2' />}
                                  {content?.planImg5 && <img src={content?.planImg5} width="50px" className='mr-4'  />}
                                  {content?.planImg6 &&<img src={content?.planImg6} width="60px" className='mr-4' />}
                                  {content?.planImg7 && <img src={content?.planImg7} width="30px" className='mr-4' />}
                                  {content?.planImg8 &&<img src={content?.planImg8} width="35px" className='mr-4' />}
                              </div>

                        <div ><AiOutlineRight   className='iconStyle icon text-white-700 text-2xl '/></div></div>

                      </div>
                    </div>
                   ))}

                  </div>
               </div>

               <Link to='/signup'>
                  <button className="buttonStyle btn button text-transform: capitalize">Next</button>
               </Link>
          </div>
        </div>

       <FooterSignUp />

  </div>
  )
}

export default SignUpPayment;
