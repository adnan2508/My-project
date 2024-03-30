import React from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase.init';

const Login = () => {
    const auth = getAuth(app);
    return (
        <div>
            <button>Login</button>
        </div>
    );
};

export default Login;