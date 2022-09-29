import { Component } from "react";
import './SignUpForm.css';

class SignUpForm extends Component {
    state = {
            name: '',
            email: '',
            password: '',
            passwordConf: '',
            error: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ''
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        alert(JSON.stringify(this.state, null, 2))
    }

    render() {
        const disable = this.state.password !== this.state.passwordConf;
        return (
            <div>
                <h1>Sign Up</h1>
                <div className="form-container">
                    <form onSubmit={this.handleSubmit} autoComplete='off'>
                        <label>Name</label>
                        <input type='text' value={this.state.name} onChange={this.handleChange} name='name' required/>
                        <label>Email</label>
                        <input type='email' value={this.state.email} onChange={this.handleChange} name='email' required/>
                        <label>Password</label>
                        <input type='password' value={this.state.password} onChange={this.handleChange} name='password' required/>
                        <label>Confirm Password</label>
                        <input type='password' value={this.state.passwordConf} onChange={this.handleChange} name='passwordConf' required/>
                        <button type='submit' disabled={disable}>Sign Up</button>    
                    </form>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        )
    }
}

export default SignUpForm;