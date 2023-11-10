import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])
  useEffect(()=>{
       axios.get('http://localhost:8081/')
       .then(res => setData(res.data))
       .catch(err => console.log(err));
  }, [])
  return (
    
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div class="align-self-start mr-auto"> 
                <Link to="/" type="button" class="btn btn-danger"> 
                  Click Me! 
                </Link> </div>
      <div className='w-50 bg-white rounded p-3'>
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Age</th>
              <th>place</th>
              <th>Mobile</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((listofuser, index) => {
                return <tr key={index}>
                  <td>{listofuser.ID}</td>
                  <td>{listofuser.Age}</td>
                  <td>{listofuser.place}</td>
                  <td>{listofuser.Mobile}</td>
                  <td>
                    <button className='btn btn-sm btn-info'>Read</button>
                    <button className='btn btn-sm btn-primary mx-2'>Read</button>
                    <button className='btn btn-sm btn-danger'>Read</button>
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