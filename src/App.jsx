import './App.css'
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './components/Homepage'
import Albums from './components/Albums'
import Bio from './components/Bio'
import Merchandise from './components/Merchandise'
import Cart from './components/Cart'
import Celebrate from './components/Celebrate';
import LandingPage from './LandingPage';
import Cookies from 'js-cookie'


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUser = async () => {
      let req = await fetch("http://127.0.0.1:3000/me", {
        headers: { 'Authorization': Cookies.get('token') }
      })
      let res = await req.json()
      if (res.user) setUser(res.user)
    }
    if (Cookies.get('token'))
      loadUser()
  }, [])

    const logout = () => {
    Cookies.remove('token')
    setUser(null)
  }

  <button onClick={logout}>logout</button>

  const router = createBrowserRouter([
     {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/login',
      element: < Login user={user} setUser={setUser} />
    },
    {
      path: '/signup',
      element: < Signup />
    },
    {
      path: '/homepage',
      element: <Homepage user={user}/>
    },
    {
      path: '/albums',
      element: < Albums />
    },
    {
      path: '/bio',
      element: <Bio />
    },
    {
      path: '/merch',
      element: <Merchandise />
    },
    {
      path: 'cart',
      element: < Cart />
    },
    {
      path: '/celebrate',
      element: <Celebrate/>
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App


// import { useState, useRef, useEffect } from 'react'
// import Cookies from 'js-cookie'
// // import './App.css'
// function Profile({ user }) {
//   return (
//     <>
//       <h3>{user.username}</h3>
//     </>
//   )
// }
// function Login() {
//   const [user, setUser] = useState(null)
//   const form = useRef()
//   useEffect(() => {
//     const loadUser = async () => {
//       let req = await fetch("http://127.0.0.1:3000/me", {
//         headers: { 'Authorization': Cookies.get('token') }
//       })
//       let res = await req.json()
//       if (res.user) setUser(res.user)
//     }
//     if (Cookies.get('token'))
//       loadUser()
//   }, [])
//   const logout = () => {
//     Cookies.remove('token')
//     setUser(null)
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     let formData = new FormData(form.current)
//     let req = await fetch("http://127.0.0.1:3000/login", {
//       method: "POST",
//       body: formData
//     }
//     )
//     let res = await req.json()
//     Cookies.set('token', res.token)
//     setUser(res.user)
//   }
//   return (
//     <div className="App">
//       {
//         user && <Profile user={user} />
//       }
//       <form onSubmit={handleSubmit} ref={form}>
//         <input placeholder="enter email" name='email' type='email'></input>
//         <input placeholder="enter password" name='password' type='password'></input>
//         <button>LOGIN</button>
//       </form>
//       <br />
//       <button onClick={logout}>
//         logout
//       </button>
//     </div>
//   )
// }
// export default Login
