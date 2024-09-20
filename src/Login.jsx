// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import validation from './LoginValidation';
// import axios from 'axios';

// function Login() {
//     const [values, setValues] = useState({ email: '', password: '' });
//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate();

//     const handleInput = (event) => {
//         setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const validationErrors = validation(values);
//         setErrors(validationErrors);

//         if (!validationErrors.email && !validationErrors.password) {
//             axios.post("http://localhost:8000/login", values)
//                 .then(res => {
//                     if (res.data === 'success') {
//                         navigate('/'); // Navigate to home on successful login
//                     } else {
//                         alert('Login failed. Please check your credentials.'); // Alert for failed login
//                     }
//                 })
//                 .catch(err => {
//                     console.error(err); // Log the error for debugging
//                     alert('An error occurred during login.');
//                 });
//         }
//     };

//     return (
//         <div className='d-flex vh-100 vw-100 bg-primary justify-content-center align-items-center'>
//             <div className='bg-white rounded w-25 p-3'>
//                 <form onSubmit={handleSubmit}>
//                     <div className='mb-3'>
//                         <label htmlFor="email">Email</label>
//                         <input 
//                             type="email" 
//                             placeholder='Enter email' 
//                             name='email'
//                             onChange={handleInput} 
//                             className='form-control rounded-0' 
//                         />
//                         {errors.email && <span className='text-danger'>{errors.email}</span>}
//                     </div>
//                     <div className='mb-3'>
//                         <label htmlFor="password">Password</label>
//                         <input 
//                             type="password" 
//                             name='password'
//                             onChange={handleInput} 
//                             placeholder='Enter password' 
//                             className='form-control rounded-0' 
//                         />
//                         {errors.password && <span className='text-danger'>{errors.password}</span>}
//                     </div>
//                     <button className='btn btn-success w-100'>Login</button>
//                     <p>You agree to the terms and conditions</p>
//                     <Link to="/signup" className='btn btn-danger border w-100'>Create account</Link>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Login;
