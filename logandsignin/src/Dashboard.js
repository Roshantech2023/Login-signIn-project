import React from 'react'
import { useNavigate } from 'react-router-dom'
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
function Dashboard() {
  return (
    <div>
    <div className='w-100 h-75 d-flex bg-white mt-3 justify-content-end ml-2'>
        <Subhome/>
    </div>
        Welcome To Dasboard
    </div>
  )
}

export default Dashboard