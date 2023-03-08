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
        navigate("/homepage")
        // onLogin(res.user);
        console.log(res)
    };

    return (
        <div>
            {user && <p></p>}
            <form onSubmit={handleSubmit} ref={form}>
                <input placeholder="enter email" name="email" type="email" />
                <input placeholder="enter password" name="password" type="password" />
                <button>LOGIN</button>
                <button onClick={() => navigate("/signup")}>SIGNUP</button>
            </form>
        </div>
    );
}

export default Login;