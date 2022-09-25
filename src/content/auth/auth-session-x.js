// auth - session x
//import { auth } from '../../services/firebase'
import { getAuth, signOut } from "firebase/auth";

import WebbLoader from "../webx/webb-loader";

import { AuthUserSessionX } from "../../services/srvc-auth-realm";
import { AuthClearStore } from "../../services/srvc-auth-user";

const auth = getAuth();

export default function AuthSessionXModule () {

  AuthUserSessionX();
  AuthClearStore();
  setTimeout(() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log ('signout: ', 'success')
      //window.location.href='/';
    }).catch((error) => {
      // An error happened.
      console.log ('signout: ', error.code)
    });
  }, 2000);


  return (
  <>
    <WebbLoader />

  </>

  )
}