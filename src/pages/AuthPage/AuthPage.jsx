import './AuthPage.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'
import LoginForm from '../../components/LoginForm/LoginForm'

const AuthPage = ({user, setUser}) => {
    return (
        <>
            <h1>Auth Page</h1>
            <SignUpForm user={user} setUser={setUser}/>
            <LoginForm user={user} setUser={setUser}/>
        </>
    )
}

export default AuthPage