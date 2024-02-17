import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/Firebase'
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [show, setShow] = useState(false)

  const hideShowHandler = () => {
    setShow(!show)
  }


  const navigate = useNavigate()


  const signupHandle = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      toast.error("Please Fill in your email and password")
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/login')
      toast.success('Your account has been created')
    } catch (error) {
      console.log(error);
      toast.success('This email and password all have been here')

    }
  }
  return (
    <div className="contact_container">
      <form onSubmit={signupHandle}>
        <h2>Register</h2>

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

          />
          <label style={{ cursor: "pointer" }} onClick={hideShowHandler}>{show ? <FaEye /> : <IoEyeOffSharp />}</label>
        </div>

        <div className="form-group">
          <button type='submit'>Register</button>
          <span>Already have an account? <Link to="/login">Login</Link></span>
        </div>
      </form>
    </div>
  )
}

export default Register