import React, { createContext, useState } from 'react'
import { getAuth} from "firebase/auth";
import app from '../../Firebase/firebase.config';

const AuthContext = createContext();
const Auth = getAuth(app);

function AuthProvider() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authInfo = {
         user,
         loading
    }

  return (
    <AuthContext.Provider value={authInfo}>
    </AuthContext.Provider>
  )
}

export default AuthProvider
