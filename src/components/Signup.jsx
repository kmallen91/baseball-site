import React, { useState } from 'react'

export default function Signup () {
    const [errors, setErrors] = useState({})
    const [values, setValues] = useState({})
    const passwordRegex = /^(?=.*[a-z].*)(?=.*[A-Z].*)(?=.*\d.*)[a-zA-Z\d]{8,}$/
    const emailRegex = /\S+@\S+\.\S+/

    const handleChange = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
      }

    const handleSubmit = e => {
        e.preventDefault();

        // email validation
        if (!values.email) {
            errors.email = 'Please provide an email address'
        }
        else if (!emailRegex.test(values.email)) {
            errors.email = 'Email address is invalid'
        }

        // password validation
        if (!values.password) {
            errors.password = 'Please provide a password'
        } else if (!passwordRegex.test(values.password)) {
            errors.password = 'Password requires 1 uppercase letter, 1 number and must be 8 characters long'
        }
    }

    return (
        <div className='form-container'>
            <h2 className='form-header'>Signup</h2>
            <form className='signup-form'>
                <label htmlFor='email'>
                    Email Address
                    <input
                        type='email'
                        name='email'
                        onChange={handleChange}
                        value={values.email}
                        required
                    />
                </label>
                <label htmlFor='email'>
                    Password
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={values.email}
                        required
                    />
                </label>
            </form>
        </div>
    )
}