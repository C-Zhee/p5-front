import { useState, useRef } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Login({user, setUser}) {
const navigate = useNavigate()
    const form = useRef();

  

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(form.current);
        let req = await fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            body: formData
        });
        let res = await req.json();
        Cookies.set('token', res.token);
        setUser(res.user);
        navigate("./homepage")
        // onLogin(res.user);
    };

    return (
        <div>
            {user && <p>You are logged in as {user.username}</p>}
            <form onSubmit={handleSubmit} ref={form}>
                <input placeholder="enter email" name="email" type="email" />
                <input placeholder="enter password" name="password" type="password" />
                <button>LOGIN</button>
            </form>
        </div>
    );
}

export default Login;