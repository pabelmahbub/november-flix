import React, { Children, createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth";
import app from '../../Firebase/firebase.config';
import { childContextTypes } from 'react-spinkit';
import { createRoutesFromChildren } from 'react-router';

export const AuthContext = createContext();
const auth = getAuth(app);

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
      return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log(currentUser);
        setUser(currentUser)
      });
      return ()=>{
         return unsubscribe();
      }
    
     
    }, [])
    

    const authInfo = {
         user,
         loading,
         createUser
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
