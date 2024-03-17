import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';

function Subhome() {
  const navigater = useNavigate()
  const handleSubmit = () =>{
      const result = window.confirm("Are you sure want to logout....?")
      if(result){
        navigater('/')
      }
      else{
        alert("logout canceld....")
      }
  }
  return (
      <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#home">
      <img
        //src={logo} // Your logo image source
        //height="30"
        //className="d-inline-block align-top"
        //alt="Logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/Dashboard">Home</Nav.Link>
        <Nav.Link href="/home">Employee List</Nav.Link>
      </Nav>
      <Nav>
        <Button variant="outline-primary" onClick={handleSubmit}>
          Logout
        </Button>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

function Create() {
    const[values,setValues]=useState({
        gender: '',
        age: '',
        dob: '',
        place: '',
        passion: '',
        contact: '',
        alterContact: '',
        language:''
    })
    const navigate =useNavigate()
    const handleSubmit =(e) =>{
        e.preventDefault();
        axios.post('http://localhost:8080/users',values)
        .then(res => {
            console.log(res)
            navigate('/home')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='container'>
    <div className='w-100 h-75 d-flex bg-white mt-3 justify-content-end ml-2'>
        <Subhome/>
    </div>
      <div className='row justify-content-center align-items-center vh-100'>
        <div className='col-md-6'>
          <div className='bg-white p-3 rounded'>
            <h2>Add user</h2>
            <form action='' onSubmit={handleSubmit}>
              <div className='row mb-3'>
                <label htmlFor='Gender' className='col-sm-4 col-form-label'><strong>Gender:</strong></label>
                <div className='col-sm-8'>
                  <input type='text' placeholder='Enter your gender...' name='gender' className='form-control rounded-0' 
                  onChange={e => setValues({...values,gender:e.target.value})}/>
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='Age' className='col-sm-4 col-form-label'><strong>Age:</strong></label>
                <div className='col-sm-8'>
                  <input type='number' placeholder='Enter your age...' name='age' className='form-control rounded-0' 
                  onChange={e => setValues({...values,gender:e.target.value})}/>
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='DOB' className='col-sm-4 col-form-label'><strong>DOB:</strong></label>
                <div className='col-sm-8'>
                  <input type='Date' placeholder='Enter your date of birth...' name='dob' className='form-control rounded-0' 
                  onChange={e => setValues({...values,dob:e.target.value})}/>
                </div>
              </div>
              <div className='mb-3'>
                    <label htmlFor='place' className='col-sm-4 col-form-label'><strong>place:</strong></label>
                    <input type='text' placeholder='Enter your place...' name='palce'
                    className='form-control rounded-0' onChange={e => setValues({...values,age:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='passion'><strong>passion:</strong></label>
                    <input type='text' placeholder='Enter your passion...' name='passion'
                    className='form-control rounded-0' onChange={e => setValues({...values,passion:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='contact'><strong>contact:</strong></label>
                    <input type='number' placeholder='Enter your contact number...' name='contact'
                    className='form-control rounded-0' onChange={e => setValues({...values,contact:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Alter contact'><strong>Alter contact:</strong></label>
                    <input type='number' placeholder='Enter your another contact...' name='alter contact'
                    className='form-control rounded-0' onChange={e => setValues({...values,altercontact:e.target.value})}></input>
                </div>
                <div className='mb-3'>
                    <label htmlFor='Language'><strong>Language:</strong></label>
                    <input type='text' placeholder='Enter your language...' name='language'
                    className='form-control rounded-0' onChange={e => setValues({...values,language:e.target.value})}></input>
                </div>
              {/* Add more input groups here */}
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
