import React from 'react';
import AuthForm from './AuthForm';


function Login() {
  return (
    <div>
        <AuthForm isLogin={true} />
        Login
    </div>
  );
}

export default Login;
