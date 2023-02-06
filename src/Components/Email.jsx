import React from 'react';
import './Email.css';
import { AiOutlineRight } from 'react-icons/ai';
import { Link } from 'react-router-dom';


function Email() {
  return (
        <div>
           <input className='email-placeholder' type="text" id="email" required placeholder='Email address' name="email" />
           <Link to="/signup">
                <button className="btn button">Get Started<AiOutlineRight  className='icon'/></button>
           </Link>
        </div>
  )
}

export default Email