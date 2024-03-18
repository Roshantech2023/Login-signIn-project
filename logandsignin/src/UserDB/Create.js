import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LogoutButton from '../LogoutButton';



function Subhome() {
  const navigater = useNavigate()
  return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
       <img
          src={"https://png.pngtree.com/png-vector/20190316/ourlarge/pngtree-employee-icon-design-template-vector-isolated-png-image_856368.jpg"} 
          height="60"
          className="d-inline-block align-top"
          alt="Logo"
        />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto ml-auto mt-3 mr-2 justify-content-start">
        <Nav.Link href="/Dashboard">Home</Nav.Link>
        <Nav.Link href="/home">Employee List</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

function Create() {
    const[values,setValues]=useState({
        NAME: '',
        EMAIL: '',
        MOBILE: '',
        DESIGNATION: '',
        GENDER: '',
        COURSE: ''
    })
    const navigate =useNavigate()
    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/employes',values)
        .then(res => {
            console.log(res)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='container'>
    <div className='w-100 h-50 d-flex'>
        <Subhome/>
    </div>
    <div className='w-100 h-50 d-flex mt-1 justify-content-end ml-2'>
      <LogoutButton/>
    </div>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-6'>
          <div className='bg-white p-3 rounded'>
            <h2>Add user</h2>
            <form action='' onSubmit={handleSubmit}>
              <div className='row mb-3'>
                <label htmlFor='name' className='col-sm-4 col-form-label'><strong>Name:</strong></label>
                <div className='col-sm-8'>
                  <input type='text' placeholder='Enter the Name...' name='name' className='form-control rounded-0' 
                  onChange={e => setValues({...values,NAME:e.target.value})}/>
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='email' className='col-sm-4 col-form-label'><strong>Email:</strong></label>
                <div className='col-sm-8'>
                  <input type='email' placeholder='Enter the email...' name='email' className='form-control rounded-0' 
                  onChange={e => setValues({...values,EMAIL:e.target.value})}/>
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='mobile' className='col-sm-4 col-form-label'><strong>Mobile:</strong></label>
                <div className='col-sm-8'>
                  <input type='number' placeholder='Enter the Mobile number here...' name='mobile' className='form-control rounded-0' 
                  onChange={e => setValues({...values,MOBILE:e.target.value})}/>
                </div>
              </div>
              <div className='mb-3'>
                    <label htmlFor='designation' className='col-sm-4 col-form-label'><strong>Designation:</strong></label>
                    <input type='text' placeholder='Enter the designation...' name='designation'
                    className='form-control rounded-0' onChange={e => setValues({...values,DESIGNATION:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='gender'><strong>Gender:</strong></label>
                    <input type='text' placeholder='Enter the gender...' name='gender'
                    className='form-control rounded-0' onChange={e => setValues({...values,GENDER:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='course'><strong>Course:</strong></label>
                    <input type='course' placeholder='Enter the course...' name='contact'
                    className='form-control rounded-0' onChange={e => setValues({...values,COURSE:e.target.value})}></input>
                </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <button type='submit' className='btn btn-success w-100 rounded-0'>Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
