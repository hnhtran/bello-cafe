import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('');

    function handleChange(e) {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value;
        })
        setError('')
    }

    async function handleSubmit(e) {
        e.preventDefault;
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    } 

    return (
        <div>
            <div className="form-container" onSubmit={handleSubmit}>
                <form autoComplete='off'>
                    <label>Email</label>
                    <input type='email' value={credentials.email} onChange={handleChange} name='email' required/>
                    <label>Password</label>
                    <input type='password' value={credentials.password} onChange={handleChange} name='password' required/>
                    <button type='submit'>Log In</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    )
}