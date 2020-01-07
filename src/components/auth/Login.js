import React from 'react';
import AuthForm from './AuthForm';
import { connect } from 'react-redux'


function Login() {
  return (
    <div>
        <AuthForm isLogin={true} />
    </div>
  );
}


export default connect()(Login);
