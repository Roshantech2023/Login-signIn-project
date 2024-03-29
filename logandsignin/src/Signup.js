import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignupValidation'
import axios from 'axios'

function Signup() {

    const [values, setValues]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate = useNavigate()
    const[errors,setErrors] = useState({})
    const handleInput=(event) => {
        setValues((prev) => ({...prev, [event.target.name]: [event.target.value]}))
    }

      
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validation(values));
        if(errors.name === "" && errors.email === ""){
            axios.post('http://localhost:8000/userssign',values)
            .then(res => {
                alert("registered successfully...")
                navigate('/')
            })
            .catch(err => console.log(err))
        }
    }    
  return (
    <div>
        <img
          src={"https://png.pngtree.com/png-vector/20190316/ourlarge/pngtree-employee-icon-design-template-vector-isolated-png-image_856368.jpg"} 
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2>Sign-Up</h2>
            <form action='' onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor='name'><strong>Name:</strong></label>
                    <input type='text' placeholder='Enter your name...' name='name'
                    onChange={handleInput} className='form-control rounded-0'></input>
                    {errors.name && <span className='text-danger'>{errors.name}</span>}
                </div>
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
                <button type='submit' className='btn btn-success w-100 rounded-0'>Signup</button>
                <p>You are agree to our terms and policies </p>
                <Link to="/" className='btn btn-default border w-100 bg-light rounded-0'>Login</Link>
            </form>
        </div>
    </div>
    </div>
  )
}

export default Signup