import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
function UserView() {
  const [isLoading,setLoading]=useState(true)
  let params = useParams();

  useEffect(() => {
getUserdata()
  }, [])

  let getUserdata= async(value)=>{
    const users=await axios.get(`https://63bbcd74cf99234bfa64854d.mockapi.io/userdata/${params.id}`,value)
myFormik.setValues(users.data)
}
  let myFormik = useFormik({
    initialValues: {
      name: "Name",
      email: " Email",
      country: "country",
      state: "chooice",
      city: "chooice"
    }
  })


return (
  <form >
    <div className='container'>
      <div className='row'>
        <div className='col-lg-10'>
          <label>Name</label>
          <input name="name" type={"text"} value={myFormik.values.name}
            onChange={myFormik.handleChange} className="form-control" />
          <span style={{ color: "red" }}>{myFormik.errors.username}</span>
        </div>
        <div className='col-lg-10'>
          <label>Email</label>
          <input name="email" type={"email"} value={myFormik.values.email} onChange={myFormik.handleChange} className="form-control" />
          <span style={{ color: "red" }}>{myFormik.errors.email}</span>
        </div>
        <div className='col-lg-10'>
          <label>Coundery</label>
          <input name="country" type={"text"} value={myFormik.values.country} onChange={myFormik.handleChange} className="form-control" />
          <span style={{ color: "red" }}>{myFormik.errors.country}</span>
        </div>
        <div className='col-lg-5'>
          <label>State</label>
          <input name="state" type={"text"} value={myFormik.values.state} onChange={myFormik.handleChange} className="form-control" />
          <span style={{ color: "red" }}>{myFormik.errors.state}</span>
        </div> <div className='col-lg-5'>
          <label>City</label>
          <input name="city" type={"text"} value={myFormik.values.city} onChange={myFormik.handleChange} className="form-control" />
          <span style={{ color: "red" }}>{myFormik.errors.city}</span>
        </div>
        <br/>
        <div className='col-lg-3 mr-2'>
        <Link to={"/portal/userlist"} style={{
          margin:10,
          marginLeft:420
        }} className="btn btn-primary">GO BACK</Link>
        </div>
        

      </div>
    </div>
  </form>
)
};

export default UserView