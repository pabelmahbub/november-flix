import React,{useState} from 'react';
import './Components.css';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


function Email() {
  const [value, setValue] = useState("")
  const { t, i18n } = useTranslation();

  const handleChange =(e)=>{ 
    setValue(e.target.value);
  }
  return (
        <div>
           <input style={{color:'#000',borderRadius:'0px'}}className='email-placeholder' required type="text" id="email" placeholder='Email address' name="email" onChange={handleChange} />
           {!value || value.length === 0? 
              <Link to="/">
                  <button  className="btn button">{t('Welcome')}<AiOutlineRight  className='icon text-white-700 text-2xl'/></button>
              </Link>
                 : 
             <Link to="/signup">
                  <button  className="btn button">{t('Welcome')}<AiOutlineRight  className='icon text-white-700 text-2xl'/></button>
             </Link>
             }
        </div>
  )
}

export default Email