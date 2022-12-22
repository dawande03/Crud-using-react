import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect } from 'react';
const EditUser = () => {
    let navigate = useNavigate();
    const {id} = useParams(); //{id} -- means destracturing

    const [user, setUser] =  useState({
        "name":"",
        "username":"",
        "email":""
    });
    const inputHandler = (event)=>{
      // const {value,name} = event.target // destracturing
        const name = event.target.name;
        const value = event.target.value;
        setUser({...user,[name]:value});
    }
    
    useEffect(()=>{
      loadUser();
    },[]);  

    const loadUser = async ()=>{
      const result = await axios.get(`http://localhost:3003/users/${id}`,user);
      setUser(result.data);
    }
    const frmsbmt = async(event)=>{
       event.preventDefault(); 
       await axios.put(`http://localhost:3003/users/${id}`,user);
       navigate("/")
      // history.push("/")

     // console.log(user);                       
    }
  return (
    <div classNa me="container">
        <h1>Edit user</h1>
        <form action="" method='post' className='col-sm-8' onSubmit={frmsbmt}>
            <div>
           <input type ="text" className='form-control' placeholder='Enter your name' name='name' onChange={inputHandler} value={user.name}/>
           </div>
           <br />
            <div>
            <input type="text" className='form-control' placeholder='Enter your Username' name='username' onChange={inputHandler} value={user.username}/>
            </div>
            <br />
            <div>
            <input type="email" className='form-control' placeholder='Enter your Email' name='email' onChange={inputHandler} value={user.email} />
            </div>
            <br />
            <div>
                <button className='btn btn-info'>Edit user</button>
            </div>
        </form>
    </div>
  )
}

export default EditUser
