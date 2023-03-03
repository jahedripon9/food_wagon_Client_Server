import { useEffect, useState } from "react";

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../Pages/Login/Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const auth = getAuth();
  const [admin, setAdmin] = useState(false);

  
  const googleProvider = new GoogleAuthProvider();
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);

  }

  useEffect(() => {
    fetch(`https://dji-server.vercel.app/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });

  }, [auth])
  return {
    user,
    signInUsingGoogle,
    logOut,
    admin

  }
}
export default useFirebase;