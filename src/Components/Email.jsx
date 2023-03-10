import React, { useContext, useState } from 'react';
import './Components.css';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';


function Email() {
  const {user} = useContext(AuthContext);
  const [value, setValue] = useState("")
  const [isOpened, setIsOpened] = useState(false);
  const { t, i18n } = useTranslation();

  const handleChange =(e)=>{ 
    setValue(e.target.value);
  }


  const toggle= ()=> {
    setIsOpened(isOpened => !isOpened);
  }

  return (
    <> 
    {!user   ? 
   
        <div>
       
           <input style={{color:'#000',borderRadius:'0px'}} className='email-placeholder' required type="text" id="email" placeholder='Email address' name="email" onChange={handleChange} />
          
           <Link to="/login">
                <button  className="btn button">{t('Welcome')}<AiOutlineRight  className='icon text-white-700 text-2xl'/></button>
           </Link>
               
             
             

            {/* {isOpened && ( <p style={{fontSize:'18px',fontWeight:'bold', color:'red',paddingTop:'10px'}}>Please fill out your correct <span style={{color:'#fff'}}>email address.</span></p>)}
         */}
        </div>


        :
        <Link to='/homepage'>
            <button onClick={toggle} className="btn button">{t('Welcome1')}<AiOutlineRight  className='icon text-white-700 text-2xl'/></button>
        </Link>

        }
        </>
  )
}

export default Email