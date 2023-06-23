import React from 'react'
import {Button} from 'react-bootstrap'
import { Form } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
function Home() {
  const nav = useNavigate()
  const [value, setValue] = useState({})
  const handlechange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
    console.log(e.target.value)
    console.log("val", value)
    console.log({ ...value })
  } 


  const onLogin = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json"
        },
      }
      const data = await axios.post("http://localhost:4005/login", value, config)
      console.log(data)
      nav("/book")
      return data
    }
    catch (error) {
      console.log("couldn't login", error)
    }
  }

  return (
    <div>
        <center>
              <div style={{ "border-radius": "3%", "background":"#2A2F4F", "height":"500px", "width":"450px", "margin":"50px"}}>
                  <h1 style={{ "color": "white","paddingTop":"30px" }}>LOGIN</h1>
                  <p style={{ "color":"#E3F2C1"}}>Please enter your login and password!</p>
                  <p>
                    <form>
                        <input type='Email' placeholder='Email' onChange={handlechange} style={{"borderRadius":"5%","width":"60%","margin":"30px"}}></input>
                          <input type='Password' placeholder='Password' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%" }}></input>
                    </form>
                      <p style={{"margin":"20px","color":"white"}}>Forgot password?</p>
                      <Button onClick={onLogin} style={{ "margin": "2px", "width": "83px", "height": "39px", "background": "none", "borderColor": "#E3F2C1",}}>Login</Button>
                  </p>
                  <p style={{ "color": "white" }}>Don't have an account? <Link to="/Signup" style={{"textDecoration":"none"}}>Sign Up </Link></p>
                 </div>
          </center>
    </div>
  )
}

export default Home