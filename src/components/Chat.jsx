import React, { useEffect, useRef, useState } from 'react'
import SignOut from './SignOut'
import { collection, getDocs, query, orderBy } from 'firebase/firestore/lite'
import { db } from '../app_init'
import { limit } from 'firebase/firestore'
import SendMessage from './SendMessage'
import { auth } from '../app_init'

function Chat() {
    // const [messages, setMessages] = useState()
    // useEffect(() => {
    //     try {
    //         const docRef = collection(db, 'messages')
    //         const q = query(docRef, orderBy('createdAt'), limit(50))
    //         const unsubcribe = onSnapshot(q, (snapshot) => {
    //             // snapchat inside data of messages collection
    //             console.log(snapshot)
    //             setMessages(snapshot.docs.map((doc) => doc.data()))
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }, [])

    const scroll = useRef()
    const [messages, setMessages] = useState([])
    useEffect(() => {
        try {
            const FetchedPosts = async () => {
                const querySnapshot = await getDocs(
                    collection(db, 'messages'),
                    orderBy('createdAt', 'desc'),
                    limit(50)
                )
                querySnapshot.forEach((doc) => {
                    // setMessages([doc.data()])
                    setMessages((prevState) => [...prevState, doc.data()])
                })
            }
            FetchedPosts()
        } catch (err) {
            console.error(err)
        }
    }, [])

    return (
        <div>
            <SignOut />
            <React.StrictMode>
                <div className="msg">
                    {messages.map((person, id) => (
                        <div>
                            <div
                                key={id}
                                className={`msg ${
                                    person.uid === auth.currentUser.uid
                                        ? 'sent'
                                        : 'received'
                                }`}
                            >
                                {/* image and paragraph text a person sends */}
                                <img src={person.photoURL} alt="avatar" />
                                <p> {person.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </React.StrictMode>

            <SendMessage scroll={scroll} />
            <div ref={scroll}></div>
        </div>
    )
}

export default Chat
