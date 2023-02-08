import React from 'react'
import check from '../../src/Assets/images/red-check.svg';
import line from '../../src/Assets/images/line.svg';
import basic from '../../src/Assets/images/basic.png';
import standard from '../../src/Assets/images/standard.png';
import premium from '../../src/Assets/images/premium.png';
import lock from '../../src/Assets/images/lock.svg';
import { Link } from 'react-router-dom'
import NavbarSignUp from '../Navbar/NavbarSignUp';
import FooterSignUp from '../Footer/FooterSignUp';

const novFlixJSON =  [
  {
  "id": 1,
  "main": "Monthly price",
  "plan1": "JPY¥200",
  "plan2": "JPY¥400",
  "plan3": "JPY¥1000",
  },
  {
    "id": 2,
    "main": "Video Quality",
    "plan1": "Good",
    "plan2": "Better",
    "plan3": "Best",
  },
  {
    "id": 3,
    "main": "Resolution",
    "plan1": "720p",
    "plan2": "1080p",
    "plan3": "4K + HDR",
  },
  {
    "id": 4,
    "main": "Watch on your TV, computer, mobile phone and tablet",
    "planImg1": check,
    "planImg2": check,
    "planImg3": check,
  },
  {
    "id": 5,
    "main": "Downloads",
    "planImg1": line,
    "planImg2": check,
    "planImg3": check,
  },


]

function SignUpStep2() {
  return (
    <div>
        <NavbarSignUp />

            <div style={{display:'flex', justifyContent:'center',paddingLeft:"15%",paddingRight:"15%",paddingBottom:'10%'}}>
               <div className="card  bg-base-100">
              {/* <figure className="px-10 pt-10">
                <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
              </figure> */}
              <div className="card-body text-left">
              <p className="text-left">STEP 2 OF 3</p>
                <h2 className="card-title text-2xl text-left">Choose the plan that's right for you</h2>

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


              {/* table section: */}

              <div className="overflow-x-auto table-normal pt-16">
                <table className="">
                  <thead>
                    <tr style={{marginLeft:'-50px'}}>
                      <th></th>
                      <th><img src={basic} alt="basic" width="123px" height="133px"  style={{marginLeft:'-15px'}}/></th>
                      <th><img src={standard} alt="basic" width="123px" height="133px" style={{marginLeft:'-15px'}}/></th>
                      <th><img src={premium} alt="basic" width="123px" height="133px" style={{marginLeft:'-15px'}}/></th>
                    </tr>
                  </thead>
                  <tbody>

                  {novFlixJSON.map((content) => (
                    <tr>
                      <th>{content.main}</th>
                      <td className='font-bold'>{content?.plan1} {content?.planImg1 && <img src={content?.planImg1} width="23px" height="23px"/>}</td>
                      <td className='font-bold'>{content?.plan2} {content?.planImg2 && <img src={content.planImg2} width="23px" height="23px"/> }</td>
                      <td className='font-bold'>{content?.plan3} {content?.planImg3 && <img src={content.planImg3} width="23px" height="23px" />}</td>
                  
                    </tr>
                  ))}
                    
                  </tbody>
                </table>
              </div>

             {/* description text */}

                <div  className="mt-12 py-3 xl:mr-24" style={{display:'flex', flexDirection:'row',backgroundColor:'#f9f8f8', borderRadius:'3px'}}>
                  <img className="mx-5" src={lock} width="23px" height="23px" alt="check-image"/>
                   <p>Basic with ads has a limited number of movies and TV shows unavailable due to licensing restrictions. Some location and device restrictions also apply. <span style={{color:'blue'}}>Learn more.</span></p>
                 </div>


                {/* <div className="card-actions">
                      
                </div> */}

               <div>
                    <p className='pt-3' style={{fontSize:'15px'}}>Want more options? <span style={{color:'blue'}}>See all plans.</span></p>
                    <p className='pt-3' style={{fontSize:'15px'}}>If you select Basic with ads, you will be required to provide your date of birth for ads personalization and other purposes consistent with the Nov-Flix <span style={{color:'blue'}}>Privacy Statement.</span></p>
                    <p className='pt-3'style={{fontSize:'15px'}}>HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <span style={{color:'blue'}}>Terms of Use </span>for more details.</p>
                    <p className='pt-3' style={{fontSize:'15px'}}>Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard and 1 with Basic or Basic with ads.</p>
                </div>


              </div>
                      <Link to='/signup/registration'>
                      <button style={{width:'40%',borderRadius:'4px',fontSize:'22px'}}className="btn button text-transform: capitalize">Next</button>
                        </Link>
            </div>

            </div>


            <FooterSignUp />

    </div>

  )
}

export default SignUpStep2
