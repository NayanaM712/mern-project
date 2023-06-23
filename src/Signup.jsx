import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
function Signup() {
    const nav=useNavigate()
    const [value, setValue] = useState({})
    const handlechange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
        console.log(e.target.value)
        console.log("val", value)
        console.log({ ...value })
    } 

    const onRegistration=async()=>
    {
        try{
            const config={
                headers:{
                    "Content-type":"application/json"
                },
            }
            const data=await axios.post("http://localhost:4005/signup",value,config)
            console.log(data)
            nav("/Book")
            return data
        }
        catch(error){
            console.log("couldm't signup",error)
        }
    }

  return (
      <div>
          <center>
              <div style={{ "border-radius": "3%", "background": "#2A2F4F", "height": "500px", "width": "450px", "margin": "50px" }}>
                  <h1 style={{ "color": "white", "paddingTop": "30px" }}>SIGNUP</h1>
                  <p style={{ "color": "#E3F2C1" }}>Please enter your details!</p>
                  <p>
                      <form>
                          <input type='text' name='FirstName' placeholder='FirstName' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                          <input type='text' name='LastName' placeholder='LastName' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                          <input type='email' name='Email' placeholder='Email' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                          <input type='Password' name='Password' placeholder='Password' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                      </form>
                      <Button onClick={onRegistration} style={{ "margin": "2px", "width": "83px", "height": "39px", "background": "none", "borderColor": "#E3F2C1", }}>Signup</Button>
                  </p>
              </div>
          </center>
      </div>
  )
}

export default Signup