import React, { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  // auth
  const auth = getAuth(app);

  // login email and password
  const loginWithEmailPass = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  const googleProvider = new GoogleAuthProvider()

  //login with google popup
  const loginWithGooglePopup = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  
  
  // register with email pass
  const registerWithEmailPass = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  //update profile
  const updateRegister = (name, imgUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imgUrl
    })
  }
  
  //observer
  useEffect(() => {
    const unsubscribe = () => onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)

      // loading false 
      setLoading(false)
      console.log(currentUser);  
    }) 
    
    return unsubscribe()
  },[])
  
  //logout
  const logoutUser = () => {
    setLoading(true)
    signOut(auth)
  }
  
  const authInfo = {
    user,
    loading,
    loginWithEmailPass,
    registerWithEmailPass,
    loginWithGooglePopup,
    logoutUser,
    updateRegister,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
