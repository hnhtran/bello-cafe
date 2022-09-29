import { Component } from "react";
import './SignUpForm.css';

class SignUpForm extends Component {
    constructor() {
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConf: '',
            error: ''
        }
    }
    render() {
        return (
            <div>
                <h1>Sign Up</h1>
            </div>
        )
    }
}

export default SignUpForm;