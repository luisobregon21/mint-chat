import { Button } from '@mui/material'
import React from 'react'
import { auth } from '../app_init'

function SignOut() {
  return (
    <div>
        <Button onClick={() => auth.signOut()}> Sign Out</Button>
    </div>
  )
}

export default SignOut