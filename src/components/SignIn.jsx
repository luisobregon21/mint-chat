import React from 'react'
import { Button } from '@mui/material'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
const { auth } = require('../app_init')

function signIn() {
    function signInWithGoogle() {
        const provider = new GoogleAuthProvider()
        console.log(auth, provider)
        signInWithPopup(auth, provider)
            .then((result) => {
                // Gives access token to acccess google API
                const credential =
                    GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                // Sign-In user info
                const user = result.user
                console.log({ token, user })
            })
            .catch((error) => {
                //Handle errors
                const errorCode = error.errorCode
                const message = error.message
                const credential = GoogleAuthProvider.credentialFromError(error)
                console.error({ errorCode, message, credential })
            })
    }
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                height: '100vh',
                alignItems: 'center',
            }}
        >
            <Button
                style={{
                    padding: '30px',
                    fontSize: '20px',
                    borderRadius: '0',
                    fontWeight: '600',
                }}
                onClick={signInWithGoogle}
            >
                {' '}
                SignIn With Goole{' '}
            </Button>
        </div>
    )
}

export default signIn
