import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Home = () => { 
  const [user, setUsers] = useState([]);

  const loadUser = async () => {   
  const result = await axios.get("http://localhost:3003/users")
 //"https://jsonplaceholder.typicode.com/users"
 setUsers(result.data.reverse());
  }
  useEffect(() => {
    loadUser()
  }, []);

  //delete user

  const deleteUser = async id =>{
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUser()
  }

  return (
    <div className='container'>
      <h1>Home Page</h1>
      <table className="table border shadow">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
        {
            user.map((item,index)=>{
              return(
                <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>
                  <Link className='btn btn-warning' to={`/view/${item.id}`}>View</Link>
                  <Link className='btn btn-outline-info' to={`/users/edit/${item.id}`}>Edit</Link>
                  <Link className='btn btn-danger' to="" onClick={()=>deleteUser(item.id)}>Delete</Link>
                  </td> 
              </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Home
