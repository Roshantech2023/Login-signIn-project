import React, { useEffect, useState } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'



function Home() {
  const[data, setData] = useState([])
  useEffect(()=>{
       axios.get('http://localhost:8080/')
       .then(res => setData(res.data))
       .catch(err => console.log(err));
  }, [])

  
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-80 bg-white rounded p-3'>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>gender</th>
              <th>age</th>
              <th>dob</th>
              <th>place</th>
              <th>passion</th>
              <th>contact</th>
              <th>alternatecontact</th>
              <th>language</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((listofuser,index) => {
              return <tr key={index}>
                <td>{listofuser.ID}</td>
                <td>{listofuser.gender}</td>
                <td>{listofuser.age}</td>
                <td>{listofuser.dob}</td>
                <td>{listofuser.place}</td>
                <td>{listofuser.passion}</td>
                <td>{listofuser.contact}</td>
                <td>{listofuser.altercontact}</td>
                <td>{listofuser.language}</td>
                <td>
                  <button className='btn btn-sm btn-info'>Read</button>
                </td>
                <td>
                  <button className='btn btn-sm btn-primary mx-2'>Edit</button>
                </td>
                <td>
                  <button className='btn btn-sm btn-danger'>Delete</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
