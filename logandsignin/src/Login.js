import React from 'react'
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import validation from './Loginvalidation'
import axios from 'axios'

function Login() {
    const [values, setValues]=useState({
        email:'',
        password:''
    })
    const Navigate = useNavigate();

    const[errors,setErrors] = useState({})
    const handleInput=(event) => {
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        setErrors(validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post('http://localhost:8081/login', values)
            .then((res) => {
               if(res.data === "success"){
                Navigate('/home');
               }else{
                alert("No record existed")
               }
            })
            .catch(err => console.log(err));
       }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
        <h2>Sign-In</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='email'><strong>Email:</strong></label>
                    <input type='email' placeholder='Enter your email...' name='email'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.email && <span className='text-danger'>{errors.email}</span>}
                </div>
                <div className='mb-3'>
                    <label htmlFor='password'><strong>Password:</strong></label>
                    <input type='password' placeholder='Enter your password...' name='password'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.password && <span className='text-danger'>{errors.password}</span>}
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                <p>You are agree to our terms and policies </p>
                <Link to="/signup" className='btn btn-default border w-100 bg-light rounded-0'>create account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login