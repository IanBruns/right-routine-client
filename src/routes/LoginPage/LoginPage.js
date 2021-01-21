import React from 'react';
import './LoginPage.css'

export default function LoginPage(props) {
    return (
        <div className='sign-in'>
            <h2>Sign in</h2>
            <form className='sign-in-form'>
                <div className='form-options'>
                    <label htmlFor='uname'>Username</label>
                    <br />
                    <input type='text' placeholder='enter Username' name='uname' required />
                </div>
                <div className='form-options'>
                    <label htmlFor="psw">Password</label>
                    <br />
                    <input type="password" placeholder="Enter Password" name="psw" required />
                </div>
                <br />
                <button type="submit" className='myButton'>Log in</button>
                <br />
            </form>
            <p>
                Don't have an account?
                    <a href='#'>Sign up</a>
            </p>
        </div>
    )
}