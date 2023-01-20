import axios from 'axios'
import { useFormik, validateYupSchema } from 'formik'
import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Createusers() {
    const[isLoading,setLoading]=useState(false)
    const Navigate=useNavigate()
    const myFormik = useFormik({
        initialValues:{
            name:"Name",
            email:" Email",
            country:"country",
            state:"chooice",
            city:"chooice"
        },
        validate:(value) =>{
       let errors={}
      if(!value.name){
        errors.username="pleace enter username  "
      }
      if(!value.email){
        errors.email="pleace enter email"
      }
      if(!value.country){
        errors.country="pleace enter country"
      }
      if(!value.state){
        errors.state="pleace enter name state"
      }
      if(!value.city){
        errors.city="pleace enter city"
      }
      

       return errors
        },
       onSubmit:async (value) =>{
       
        try {
            setLoading(true)
            await axios.post("https://63bbcd74cf99234bfa64854d.mockapi.io/userdata",value)
            Navigate("/portal/userlist")
        } catch (error) {
            console.log(error)
            setLoading(false)
            alert("loading error")
        }
       }
    })
    return (
       <form onSubmit={myFormik.handleSubmit}>
         <div className='container'>
            <div className='row'>
                <div className='col-lg-6'>
                    <label>Name</label>
                    <input name="name" type={"text"} value={myFormik.values.name} 
                    onChange={myFormik.handleChange} className="form-control" />
                    <span style={{color:"red"}}>{myFormik.errors.username}</span>
                </div>
                <div className='col-lg-6'>
                    <label>Email</label>
                    <input name="email" type={"email"} value={myFormik.values.email} onChange={myFormik.handleChange} className="form-control" />
                    <span style={{color:"red"}}>{myFormik.errors.email}</span>
                </div>
                <div className='col-lg-4'>
                    <label>Coundery</label>
                    <input name="country" type={"text"} value={myFormik.values.country} onChange={myFormik.handleChange} className="form-control" />
                    <span style={{color:"red"}}>{myFormik.errors.country}</span>
                </div> 
                <div className='col-lg-4'>
                    <label>State</label>
                    <input  name="state" type={"text"} value={myFormik.values.state}  onChange={myFormik.handleChange} className="form-control" />
                    <span style={{color:"red"}}>{myFormik.errors.state}</span>
                </div> <div className='col-lg-4'>
                    <label>City</label>
                    <input name="city" type={"text"} value={myFormik.values.city} onChange={myFormik.handleChange} className="form-control" />
                    <span style={{color:"red"}}>{myFormik.errors.city}</span>
                </div>
                <div className='clo-lg-3 mt-2'>
                    <input  disabled={isLoading} type={"submit"} value={isLoading ? "loading":"create"}className='btn btn-primary'></input>
                </div>

            </div>
        </div>
       </form>



    )
}

export default Createusers