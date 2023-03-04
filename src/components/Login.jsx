import { useState, useRef } from 'react'
import Cookies from 'js-cookie'

function Login({ onLogin }) {
    const form = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)
        const req = await fetch("http://127.0.0.1:3000/login", {
            method: "POST",
            body: formData
        })
        const res = await req.json()
        Cookies.set('token', res.token)
        onLogin(res.user)
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <h2>Login</h2>
            <input placeholder="enter email" name='email' type='email'></input>
            <input placeholder="enter password" name='password' type='password'></input>
            <button>LOGIN</button>
        </form>
    )
}

export default Login;