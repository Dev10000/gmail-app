import React from 'react'
import "./css/Login.css"
import gmailLogo from "../assets/logo_gmail_lockup_default_1x_r2.png"
import { Button } from '@mui/material'
import { auth, provider } from '../utils/firebase';
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
    const dispatch = useDispatch();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then(({ user }) => {
            dispatch(
                login({
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL,
                })
            );
        })
        .catch(error => alert(error.message))
    };

  return (
    <div className="login">
        <div className="login__container">
            <img src={gmailLogo} alt="" />
            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>

            
        </div>
    </div>
  )
}

export default Login