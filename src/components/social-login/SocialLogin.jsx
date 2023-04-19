import React, { useState } from 'react';
import './SocialLogin.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase.config';
import { GithubAuthProvider } from "firebase/auth";



const SocialLogin = () => {

  const [user, setUser]= useState({})

  const gitHubProvider = new GithubAuthProvider();

  
const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);
const handleGoogleClick = () =>{
  signInWithPopup(auth, googleProvider)
  .then(result =>{
    const user = result.user;
    console.log(user)
    setUser(user)
  })
  .catch(error=>{
    const errorMessage = error.message;
    console.log(errorMessage)
  })
}

const handleGitHubClick = () => {
  signInWithPopup(auth, gitHubProvider)
  .then((result) =>{
    const gitUser = result.user;
    console.log(gitUser)
  
  })
  .catch(error=>{
    const errorMessage = error.message
    console.log(errorMessage)
  })
}

  return (
    <div className=" social-button-container w-50 mt-3">
      <div className="">
        <img
         onClick={handleGoogleClick}
          className=" social-button"
          src="https://i.ibb.co/gSTHXZJ/google-btn.png"
          alt=""
        />
      </div>
      <div className="">
        <img
        onClick={handleGitHubClick}
          className=" social-button"
          src="https://i.ibb.co/g9f4P0S/github-btn.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default SocialLogin;