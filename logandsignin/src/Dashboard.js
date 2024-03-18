import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import LogoutButton from './LogoutButton';
import axios from 'axios';

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
function Dashboard() {
  const [totalCount, setTotalCount] = useState(0);

  useEffect(() => {
      axios.get('http://localhost:8080/count')
          .then(res => setTotalCount(res.data.totalCount))
          .catch(err => console.error("Error fetching total count: ", err));
  }, []);


  return (
    <div>
     <div className='w-100 h-75 d-flex bg-white mt-3'>
        <Subhome/>
    </div>
    <div className='w-100 h-50 d-flex mt-1 justify-content-end ml-2'>
      <LogoutButton/>
    </div >
    <div  className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='h-30 bg-white w-50'>
    <div>
     <div>welcome to Employees list dashboard</div>
    </div>
            Total Employees counts: {totalCount}
    </div>
    </div>
    </div>
  )
}

export default Dashboard