import React from 'react';
import '../../styles/login.scss';
import LoginForm from './LoginFrom/LoginForm'

function Login() {

    return (
        <div id='login'>
            <div className='from-box'>
                <LoginForm />
            </div>
        </div>
    );
}

export default Login;