import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
//import { useHistory } from "react-router-dom";
const AddUser = () => {
    let navigate = useNavigate();
   // const history = useHistory();
    const [user, setUser] =  useState({
        "name":"",
        "username":"",
        "email":""
    });
    const inputHandler = (event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setUser({...user,[name]:value});
    }

    const frmsbmt = async(event)=>{
       event.preventDefault();
       await axios.post("http://localhost:3003/users",user);
       navigate("/")
      // history.push("/")

     // console.log(user);                       
    }
  return (
    <div className="container">
        <h1>Add user</h1>
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
                <button className='btn btn-info'>Add user</button>
            </div>
        </form>
    </div>
  )
}

export default AddUser
