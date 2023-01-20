import { Alert, Button } from 'bootstrap'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
function Userlist() {
  const [userList,setUserlist]=useState([])
  const[isLoading,setLoading]=useState(true)
  const Navigate= useNavigate

 
try {
  useEffect(()=>{
    getUsers()
    
      },[]);
  let getUsers=async()=>{
    const users=await axios.get("https://63bbcd74cf99234bfa64854d.mockapi.io/userdata");
    setUserlist(users.data)
    setLoading(false)
   }
  
} catch (error) {
  console.log(error)
}

useEffect(()=>{

    },[]);
let handleDelete= async(id)=>{
  try {
    const conformation=window.confirm("Are Sure You Want to Delete the data ")
    if(conformation){
    await axios.delete(`https://63bbcd74cf99234bfa64854d.mockapi.io/userdata/${id}`
    
    );
    alert("Data Deleted")
  

    }
  
    
  } 
  catch (error) 
  {
    alert("something wend wrong")
    console.log(error)
  }
}
  
  return (
    <div>
     <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users-List</h1>
        <Link to="/portal/createusers" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
          className="fas fa-download fa-sm text-white-50"></i> Create Users</Link>
      </div>
        
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
          </div>
          <div className="card-body">
          {
                    isLoading ? <h1>Please wait page Loading.......</h1>:
                    <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="150%" cellspacing="0">
                      <thead>
                      
                        <tr>
                        <th>ID</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Coundry</th>
                          <th>State</th>
                          <th>City</th>
                        </tr>
                      </thead>
                      <tfoot>
                        <tr>
                        <th>ID</th>
                          <th>Username</th>
                          <th>Email</th>
                          <th>Coundry</th>
                          <th>State</th>
                          <th>City</th>
      
                        </tr>
                      </tfoot>
                      <tbody>
                      
                      {
                        userList.map((user)=>{
                          return(
                            <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.country}</td>
                            <td>{user.state}</td>
                            <td>{user.city}</td>
                            <th>
                              <Link to={`/portal/user-view/${user.id}`} className="btn btn-primary mr-1">view</Link>
                              <Link to={`/portal/useredit/${user.id}`}className="btn btn-info mr-1">Edit</Link>
                              <button onClick={()=>handleDelete(user.id)} className="btn btn-danger mr-1">Delete</button>
                            </th>
                          </tr>
                          )
                        })
                      }
                       
                      </tbody>
                    </table>
                  </div>
                  }
        
          </div>.
        </div>

      </div>


   




  )
}

export default Userlist