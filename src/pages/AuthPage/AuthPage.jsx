import './AuthPage.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'
import { useState } from 'react';

const AuthPage = ({user, setUser}) => {
    const [showSignUp, setShowSignUp] = useState(true)
    return (
        <>
            <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
            {showSignUp ? <SignUpForm setUser={setUser}/> : <LoginForm setUser={setUser}/>}
        </>
    )
}

export default AuthPage