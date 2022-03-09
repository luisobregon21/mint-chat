import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: 'AIzaSyA_T8ym2BuVJEloOjK8z4VW1GI6NB5xxak',
    authDomain: 'mint-chat-b5379.firebaseapp.com',
    projectId: 'mint-chat-b5379',
    storageBucket: 'mint-chat-b5379.appspot.com',
    messagingSenderId: '1085700505077',
    appId: '1:1085700505077:web:5161f06a9298c36b42f4bc',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }
