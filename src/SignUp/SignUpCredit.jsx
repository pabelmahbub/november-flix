import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import check from '../../src/Assets/images/red-check.svg'
import { AiOutlineRight } from 'react-icons/ai';
import FooterSignUp from '../Footer/FooterSignUp';
import NavbarSignUp from '../Navbar/NavbarSignUp';
import axios from "axios";



function SignUpCredit() {
    
 

      
  return (
       
      <div>
      <NavbarSignUp />
    
    <h2 className='text-4xl py-72'> Credit card section.</h2>
    <FooterSignUp />


      
    </div>
       

  )
}

export default SignUpCredit
