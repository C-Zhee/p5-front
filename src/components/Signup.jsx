import { useState, useRef } from 'react';

function Signup({ onSignup }) {
    const [user, setUser] = useState(null);
    const form = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData(form.current);
        let req = await fetch("http://127.0.0.1:3000/signup", {
            method: "POST",
            body: formData
        });
        let res = await req.json();
        setUser(res.user);
        onSignup(res.user);
    };

    return (
        <div>
            {user && <p>You have signed up as {user.username}</p>}
            <form onSubmit={handleSubmit} ref={form}>
                <input placeholder="enter username" name="username" type="text" />
                <input placeholder="enter email" name="email" type="email" />
                <input placeholder="enter password" name="password" type="password" />
                <button>SIGN UP</button>
            </form>
        </div>
    );
}

export default Signup;