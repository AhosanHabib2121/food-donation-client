import { createContext, useEffect, useState} from "react";
import app from "../firebaseConfig/Firebase.config";
import PropTypes from "prop-types";
import {getAuth,createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create account
  const createAccount = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile
  const profileUpdate = (name, photo_url) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo_url,
    });
  };

  // account login
  const accountLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login out
  const loginOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // login with google
  const loginGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  // onAuthStateChanged
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // const userEmail = currentUser?.email || user?.email;
      //   const loggedUser = {email: userEmail};
      setUser(currentUser);
      setLoading(false);
      // if (currentUser) {
      //     axios
      //       .post(
      //         "http://localhost:5000/jwt",
      //         loggedUser,
      //         {
      //           withCredentials: true,
      //         }
      //       )
      //       .then((res) => {
      //         console.log("token response", res.data);
      //       });
      //   } else {
      //     axios
      //       .post(
      //         "http://localhost:5000/logout",
      //         loggedUser,
      //         {
      //           withCredentials: true,
      //         }
      //       )
      //       .then(() => {});
      //   }
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const userInfo = {
    user,
    loading,
    createAccount,
    profileUpdate,
    accountLogin,
    loginOut,
    loginGoogle,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
