import './App.css'
import SignIn from './components/SignIn'
import Chat from './components/Chat'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './app_init'

function App() {
    // if user is true that means he is signed in
    const [user] = useAuthState(auth)
    return <>{user ? <Chat /> : <SignIn />}</>
}

export default App
