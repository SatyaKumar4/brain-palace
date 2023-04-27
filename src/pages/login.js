import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';
import FormRow from '../components/FormRow'
import logo from '../assets/brain2.png'
const Login = () => {
    return (
        <div>
            <Navbar />
            <LoginSection />
        </div>
    )
}

export default Login



export const Navbar = () => {
    return (
        <div className = "navbar">
            <img src={logo} alt="brain-palace" className="nav-brand"></img>
        </div>
    )
}

const initialState = {
    email: "",
    password: "",
    isMember: true,
}

export const LoginSection = () => {
    const [values, setValues] = useState(initialState)

    const handleChange = (e) => { console.log(e.target) }
    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e.target)
    }


    return (
        <div className="login-signup-container">
            <form className="login-signup-form" onSubmit={onSubmit}>
                <FormRow
                    type="email"
                    name="E-Mail"
                    value={values.email}
                    handleChange={handleChange}
                />
                <FormRow
                    type="password"
                    name="Password"
                    value={values.password}
                    handleChange={handleChange}
                />

                <button type="submit" class="btn btn-dark login-signup-button">Login</button>
                <div className='register-login-invite'>
                    <p>Don't have an account ?</p>
                    <Link to="/signup"><p className="register-login-link">Register here</p></Link>
                </div>
                <Link to = '/forgot'><p className = 'forgot-password'>Forgot password ?</p></Link>
            </form>
        </div>
    )
}