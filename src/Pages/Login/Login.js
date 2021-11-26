import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

function Login() {
    const HandleSignUp = () => {

    }
    return (
        <div className="main-container">
            <h1 className="heading">Log In</h1>
            <form>
                <input type="text" className="input-text upper" placeholder="Email Address" />
                <br />
                <input type="password" className="input-text" placeholder="Password" />
                <br />
                <div className="remember-me-container">
                    <span>
                        <input type="checkbox" className="check-box" />
                        <span className="font-style remember">Remember Me</span>
                    </span>
                    <span className="font-style forgot">Forgot Password</span>
                </div>
                <br />
                <input type="submit" className="button" value="Log in" />
                <br />
                <span className="font-style have-account">Don't have an account? <Link to="../signup" onClick={HandleSignUp} className="sign-up">Sign Up</Link></span>
            </form>
        </div>
    )
}

export default Login
