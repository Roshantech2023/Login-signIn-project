import React, { useEffect, useState } from 'react'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutButton from '../LogoutButton';

function Subhome() {
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

function Home() {
  const[data, setData] = useState([])

  useEffect(()=>{
       axios.get('http://localhost:8080/')
       .then(res => setData(res.data))
       .catch(err => console.log(err));
  }, [])

  const [totalCount, setTotalCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:8080/count')
          .then(res => setTotalCount(res.data.totalCount))
          .catch(err => console.error("Error fetching total count: ", err));
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    const filtered = data.filter(employelist =>
      employelist.NAME.toLowerCase().includes(term.toLowerCase()) ||
      employelist.EMAIL.toLowerCase().includes(term.toLowerCase()) ||
      employelist.DESIGNATION.toLowerCase().includes(term.toLowerCase()) ||
      employelist.GENDER.toLowerCase().includes(term.toLowerCase()) ||
      employelist.COURSE.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(filtered);
  };
  return (
    <div>
    <div className='w-100 h-75 d-flex bg-white mt-3 '>
        <Subhome/>
    </div>
    <div className='w-100 h-50 d-flex mt-1 justify-content-end ml-2'>
      <LogoutButton/>
    </div>
    
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded p-3'>
        <Link to='/create' className='btn btn-success mb-2 jutify-content-right'>create</Link>
        <div className='h-30 bg-white w-50'>
            Total Count: {totalCount}
      </div>
      <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="form-control mb-2"
          />
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>Course</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((employelist,index) => {
              return <tr key={index}>
                <td>{employelist.UNIC_ID}</td>
                <td>{employelist.NAME}</td>
                <td>{employelist.EMAIL}</td>
                <td>{employelist.MOBILE}</td>
                <td>{employelist.DESIGNATION}</td>
                <td>{employelist.GENDER}</td>
                <td>{employelist.COURSE}</td>
                <td>
                  <button className='btn btn-sm btn-danger' >Delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}

export default Home
