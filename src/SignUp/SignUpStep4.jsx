import { createUserWithEmailAndPassword } from '@firebase/auth';
import { Result } from 'postcss';
import {toast } from 'react-toastify';
import React, { useContext, useState, useEffect} from 'react';
import elvis from '../../src/Assets/movieImage/m11.webp'
import { Form, Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import FooterSignUp from '../Footer/FooterSignUp';
import NavbarSignUp from '../Navbar/NavbarSignUp';
import { GoogleAuthProvider } from 'firebase/auth';


function SignUpStep4() {
  const {user, createUser, providerLogin} = useContext(AuthContext);
   const navigate = useNavigate();
   const { state } = useLocation();
   const from = state?.from?.pathname || "/signup/paymentPicker";

 
   const handleSignUp=(e)=>{
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
    .then(result => {
      const user = result.user;
      form.reset();
      console.log(user);
      toast.success('Nenflix account created successfully!');
      //navigate('/home');

    })
    .catch(err=> console.log(err));
    form.reset();
    
  }

   //for redirection to the route after authenticated[using RequiredAuth for private route ]:

  useEffect( () =>{
    if(user){
      navigate(from, { replace:true });
    }
  },[user, from, navigate])


  //google sign in:

  const googleProvider = new GoogleAuthProvider;

  const handleGoogleSignIn = ()=>{
       providerLogin(googleProvider)
       .then(result =>{
        const user = result.user;
        console.log(user);
        toast.success('Nenflix account created successfully!');
        navigate('/signup/paymentPicker');
       })
       .catch(err => console.error('Error',err))
  }






 

    // const handleSignUp=(e)=>{
    //   e.preventDefault();
    //   const form = e.target;
    //   const name = form.name.value;
    //   const email = form.email.value;
    //   const password = form.password.value;

    //   createUser(email, password)
    //   .then(result => {
    //     const user = result.user;
    //     form.reset();
    //     console.log(user);
    //     navigate('/signup/paymentPicker');
    //     toast.success('Nenflix account created successfully!');

    //   })
    //   .catch(err=> console.log(err));
    //   form.reset();
      
    // }


  return (
    <div>

<NavbarSignUp />


<div className="hero w-full my-20">
  <div className="hero-content grid md:grid-cols-2 flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <img src={elvis} width="400px" className='mr-4' alt=""/>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    <h1 className="text-5xl text-center font-bold mt-10">SignUp</h1>

      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Name</span>
          </label> 
           <input type="text" name="name" placeholder="Your name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Email</span>
          </label>
          <input type="text" name="email" placeholder="email address" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span  className="label-text">Password</span>
          </label>
          <input type="text" name="password" placeholder="password" className="input input-bordered" />
          {/* <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label> */}
        </div>

        <div onClick={handleGoogleSignIn} className="btn  text-transform:capitalize mt-6" style={{display: 'flex',backgroundColor:'#fff',borderRadius:'4px',paddingLeft:'15%',flexDirection:'row'}}>
           <img   src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1" style={{maxWidth: "100%",height: "30px",}} alt="Google"/>
           <p style={{color:'#000',fontFamily:'raleway'}}>Continue with Google</p>
        </div>


        <div className="form-control mt-1">
          <input  style={{borderRadius:'4px'}} className="btn button text-transform:capitalize" type="submit" value="signup" />
        </div>
      </form>
      <p className='pt-2 pb-4'>Already have an account. <Link to='/login' className='text-orange-600 font-bold'>Login</Link></p>
    </div>
  </div>
</div>



            <FooterSignUp />

  </div>
  )
}

export default SignUpStep4
