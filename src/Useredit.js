import axios from 'axios'
import { controllers } from 'chart.js'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Useredit() {
    let params = useParams()
    const [isLoading, setLoading] = useState(false)
    const Navigate = useNavigate()
    useEffect(()=>{
        getUserdata()
    },[]
    )
    let getUserdata= async(value)=>{
        const users=await axios.get(`https://63bbcd74cf99234bfa64854d.mockapi.io/userdata/${params.id}`,value)
    myFormik.setValues(users.data)
    }
    const myFormik = useFormik({
        
        initialValues: {
            name: "Name",
            email: " Email",
            country: "country",
            state: "chooice",
            city: "chooice"
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
        onSubmit: async (value) => {
            try {
                setLoading(true)
                await axios.put(`https://63bbcd74cf99234bfa64854d.mockapi.io/userdata/${params.id}`, value)
                setLoading(false)
                alert("update sucess")
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
                        <span style={{ color: "red" }}>{myFormik.errors.username}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label>Email</label>
                        <input name="email" type={"email"} value={myFormik.values.email} onChange={myFormik.handleChange} className="form-control" />
                        <span style={{ color: "red" }}>{myFormik.errors.email}</span>
                    </div>
                    <div className='col-lg-4'>
                        <label>Coundery</label>
                        <input name="country" type={"text"} value={myFormik.values.country} onChange={myFormik.handleChange} className="form-control" />
                        <span style={{ color: "red" }}>{myFormik.errors.country}</span>
                    </div>
                    <div className='col-lg-4'>
                        <label>State</label>
                        <input name="state" type={"text"} value={myFormik.values.state} onChange={myFormik.handleChange} className="form-control" />
                        <span style={{ color: "red" }}>{myFormik.errors.state}</span>
                    </div> <div className='col-lg-4'>
                        <label>City</label>
                        <input name="city" type={"text"} value={myFormik.values.city} onChange={myFormik.handleChange} className="form-control" />
                        <span style={{ color: "red" }}>{myFormik.errors.city}</span>
                    </div>
                    <div className='clo-lg-3 mt-2'>
                        <input disabled={isLoading} type={"submit"} value={isLoading ? "Done" : "Update"} className='btn btn-primary'></input>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Useredit