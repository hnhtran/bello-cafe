import './AuthPage.css'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

const AuthPage = ({user, setUser}) => {
    return (
        <>
            <h1>Auth Page</h1>
            <SignUpForm user={user} setUser={setUser}/>
        </>
    )
}

export default AuthPage