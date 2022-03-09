import { Button } from '@mui/material'
import React, { useState } from 'react'
import { db, auth } from '../app_init'
import { collection, addDoc, Timestamp } from 'firebase/firestore/lite'
import { serverTimestamp } from 'firebase/firestore'

function SendMessage({ scroll }) {
    const [msg, setMsg] = useState('')

    async function sendMessage(e) {
        e.preventDefault()
        const { photoURL, uid } = auth.currentUser
        console.log(photoURL, uid)
        try {
            await addDoc(collection(db, 'messages'), {
                text: msg,
                photoURL,
                uid,
                createdAt: Timestamp.now(),
            })
        } catch (err) {
            console.error(err)
        }
        setMsg('')
        scroll.current.scrollIntoView({ behavior: 'smooth' })
    }
    return (
        <div>
            <form onSubmit={sendMessage}>
                <div className="sendMsg">
                    <input
                        style={{
                            width: '78%',
                            fontSize: '15px',
                            fontWeight: '550',
                            marginLeft: '5px',
                            marginBottom: '-3px',
                        }}
                        value={msg}
                        onChange={(event) => {
                            setMsg(event.target.value)
                        }}
                        placeholder="Message..."
                    />
                    <Button
                        style={{
                            width: '18%',
                            fontSize: '15px',
                            fontWeight: '550',
                            margin: '4px 5% -13px 5%',
                            maxWidth: '200px',
                        }}
                        type="submit"
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default SendMessage
