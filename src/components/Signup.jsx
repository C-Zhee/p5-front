import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
  const navigate = useNavigate()
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
        <input placeholder="enter first name" name="first name" type="first name" />
        <input placeholder="enter last name" name="last name" type="last name" />
        <input placeholder="enter age" name="age" type="age" />
        <input placeholder="enter username" name="username" type="text" />
        <input placeholder="enter email" name="email" type="email" />
        <input placeholder="enter password" name="password" type="password" />
        <button>Sign Up</button>
        <button onClick={() => navigate("/login")}>Return to Login</button>
      </form>
    </div>
  );
}

export default Signup;