import React from 'react';
import {Link} from 'react-router-dom';
import './signup.css'

function Signup() {
    return (
        <div className="container">
            <h1 className="heading">Create Account</h1>
            <form>
                <input type="text" className="input-text upper" placeholder="Your Name" />
                <br />
                <input type="text" className="input-text" placeholder="Email Address" />
                <br />
                <input type="password" className="input-text" placeholder="Password" />
                <br />
                <div>
                    <input type="checkbox" className="check-box" />
                    <span className="font-style remember">I have accept the <span className="font-style forgot">Terms & Conditions</span> </span>
                </div>
                <br />
                <input type="submit" className="button" value="Sign Up" />
                <br />
                <span className="font-style have-account">Already have an account? <Link to="../login" className="sign-up">Log In</Link></span>
            </form>
        </div>
    )
}

export default Signup
