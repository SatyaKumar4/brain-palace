import { Navbar } from "./login";
import { useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import FormRow from '../components/FormRow'
import axios from 'axios';
import dummy from '../assets/dummy-profile.png';
import { useFormik } from 'formik'
import { Toaster } from 'react-hot-toast';

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    isMember: true,
}

const SignUp = () => {

    const [values, setValues] = useState(initialState)
    //global state and useNavigate

   
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }, validateOnBlur:false, validateOnChange: false, onSubmit: async values =>{
            console.log(values)
        }
    }
    )

    const handleChange = formik.handleChange;

    //get values from the form

    return (
        <div>
            <Navbar />

            <div className="login-signup-container">
                <form className="login-signup-form" onSubmit={formik.handleSubmit}>
                    {/*profile pic*/}
                    <div className="profile-pic-container">
                        <img src={dummy} alt={`${values.firstName}-profile-pic`} className="profile-pic" ></img>
                    </div>

                    {/*first name*/}
                    <FormRow
                        type="text"
                        name="First Name"
                        value={values.firstName}
                        onChange={handleChange} />

                    {/*last name*/}
                    <FormRow
                        type="text"
                        name="Last Name"
                        value={values.lastName}
                        onChange={handleChange} />

                    {/*email*/}
                    <FormRow
                        type="email"
                        name="E-Mail"
                        value={values.email}
                        onChange={handleChange} />

                    {/*password*/}
                    <FormRow
                        type="password"
                        name="Password"
                        value={values.password}
                        onChange={handleChange} />

                    <button type="submit" class="btn btn-dark login-signup-button">Sign up</button>
                    <div className='register-login-invite'>
                        <p>Already registered ?</p>
                        <Link to="/"><p className="register-login-link">Login</p></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
