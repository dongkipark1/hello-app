import React from 'react';
import { useSelector } from "react-redux"

function LoginComplete(props) {

    const isLogin = useSelector((state) => )
    
    return (
        <div>
            <h1>Login 완료</h1>
            <h2>store isLogin : true</h2>
        </div>
    );
}

export default LoginComplete;
