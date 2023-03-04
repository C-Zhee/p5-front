import { useRef } from "react"

function Signup({ onSignup }) {
    const form = useRef()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(form.current)
        const req = await fetch("http://127.0.0.1:3000/signup", {
            method: "POST",
            body: formData
        })
        const res = await req.json()
        Cookies.set('token', res.token)
        onSignup(res.user)
    }

    return (
        <form onSubmit={handleSubmit} ref={form}>
            <h2>Signup</h2>
            <input placeholder="enter email" name='email' type='email'></input>
            <input placeholder="enter password" name='password' type='password'></input>
            <button>SIGNUP</button>
        </form>
    )
}

export default Signup;