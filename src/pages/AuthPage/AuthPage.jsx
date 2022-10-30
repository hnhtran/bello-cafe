import './AuthPage.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react';
import Logo from '../../components/Logo/Logo'

const AuthPage = ({user, setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true)
    return (
        <main className='AuthPage'>
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
            {showSignUp ? <SignUpForm setUser={setUser}/> : <LoginForm setUser={setUser}/>}
        </main>
    )
}

export default AuthPage