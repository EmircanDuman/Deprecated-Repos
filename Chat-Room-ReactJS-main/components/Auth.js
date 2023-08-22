import { auth, provider } from '../firebase-config.js';
import { signInWithPopup } from 'firebase/auth';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const Auth = (props) =>{

  const { setIsAuth } = props;
  //firebase is generally done with async functions
  //this part handles the google auth
  const signInWithGoogle = async () => {
    try{
    const result = await signInWithPopup(auth, provider)
    cookies.set("auth-token", result.user.refreshToken)
    setIsAuth(true)
    } catch(err){
      console.log(err)
    }
  }

  return (
    <div className="auth">
    <p> Sign in with Google to continue </p>
    <button onClick={signInWithGoogle}> Sign in with Google </button>
  </div>
  )
}