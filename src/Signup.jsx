import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validation from './SignupValidation';
import axios from 'axios';

function Signup() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [errorMessage, setErrorMessage] = useState(''); // For displaying server error messages

    const handleInput = (event) => {
        setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
    };

    const navigate = useNavigate(); 
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const validationErrors = validation(values);
        setErrors(validationErrors);
    
        // Check for validation errors based on the current values
        if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
            try {
                const res = await axios.post("http://localhost:8000/signup", values);
                if (res.status === 200) {
                    navigate('/login');
                }
            } catch (err) {
                // Log the error and set the error message
                console.error(err);
                setErrorMessage(err.response ? err.response.data.error : 'An error occurred. Please try again.');
            }
        }
    };

    return (
        <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
            <div className='bg-white rounded w-25 p-3'>
                <form onSubmit={handleSubmit}>
                    {errorMessage && <div className='alert alert-danger'>{errorMessage}</div>} {/* Display error message */}
                    <div className='mb-3'>
                        <label htmlFor="name">Name</label>
                        <input 
                            type="text" 
                            placeholder='Enter name' 
                            onChange={handleInput}
                            name="name" 
                            className='form-control rounded-0' 
                        />
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            placeholder='Enter email'
                            name="email" 
                            onChange={handleInput} 
                            className='form-control rounded-0' 
                        />
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                    </div>
                    <div className='mb-3'>
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password"
                            name="password" 
                            onChange={handleInput} 
                            placeholder='Enter password' 
                            className='form-control rounded-0' 
                        />
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                    </div>
                    <button className='btn btn-success w-100'>Signup</button>
                    <p>You agree to the terms and conditions</p>
                    <Link to="/login" className='btn btn-danger border w-100'>Login</Link>
                </form>
            </div>
        </div>
    );
}

export default Signup;
