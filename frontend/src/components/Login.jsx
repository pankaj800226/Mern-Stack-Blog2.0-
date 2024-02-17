import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react'
import toast from "react-hot-toast"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../firebase/Firebase"
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false)

  const showHideHandler = () => {
    setShow(!show)
  }

  const navigate = useNavigate()

  const signupHandle = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      toast.error("Please Fill in your email and password")
    }

    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      await localStorage.setItem('user', JSON.stringify(user))
      navigate('/')
      toast.success('Your account has been successfully')
    } catch (error) {
      console.log(error);
      toast.error("Register Not Match ")
      // toast.success('This email and password all have been here')

    }
  }

  return (
    <div className="contact_container">
      <form onSubmit={signupHandle}>
        <h2>Login</h2>
        <div className="form-group">
          <input type="text" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            name='email'
          />
        </div>

        <div className="form-group">
          <input type={show ? "text" : "password"} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            name='password'
          />
          <label style={{cursor:"pointer"}} onClick={showHideHandler}>{show ? <FaEye /> : <IoEyeOffSharp />}</label>
        </div>

        <div className="form-group">
          <button type='submit'>Login</button>
          <span><Link to="/register">SignUp</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Login