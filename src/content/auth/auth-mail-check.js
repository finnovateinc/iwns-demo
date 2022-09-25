// auth - firebase mail link
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { auth } from '../../services/firebase'
import { signInWithEmailLink } from "firebase/auth";

import { Result } from 'antd';

import WebbDividerSmall from "../webx/webb-divider-sm";
import WebbDividerMedium from "../webx/webb-divider-md";
import WebbLoader from "../webx/webb-loader";

import { SetAuthUser } from "../../services/srvc-auth-user";

export default function AuthMailCheckModule () {

  const [username, setUsername] = useState(window.localStorage.getItem('authmail'));

  const [loading, setLoading] = useState(true);  
  const [done, setDone] = useState(true);
  const history = useHistory();

  useEffect(() => { 

    if (username) {
      signInWithEmailLink(auth, username, window.location.href)
      .then((result) => {
        setDone(true)
        window.localStorage.removeItem('authmail');
        // console.log(result.user);
        SetAuthUser({user: result.user.email})
        history.push('/auth/next')
      })
      .catch((error) => {
        console.log(error);
        setDone(false)
        // Some error occurred, you can inspect the code: error.code
        // Common errors could be invalid email and invalid or expired OTPs.
      });
      
      setLoading(false)

    }
    else {
      // alert('X')
      setLoading(false)
    }

  },[])


  if (loading && username) return <WebbLoader/>


  return (
  <>

    <div className={!loading && username ? 'back-color-wite p-3 text-center mb-3' : 'd-none'}>
      <WebbDividerSmall />
      
      <Result
        status="success"
        title="Success!"
        subTitle="Please wait..."
        className={done ? '' : 'd-none'}
      />
      
      <Result
        status="warning"
        title="We Caught a Bug!"
        subTitle="Please try again."
        className={done ? 'd-none' : ''}
      />

      <div className="text-center p-1 d-none" 
        // onClick={() => {setSubmit(false); setDone(false)}}
        style={{cursor:'pointer'}}
        >
        <p className="text-color-tone">Try Again / Use Different Email</p>
      </div>

    </div>

  </>

  )
}