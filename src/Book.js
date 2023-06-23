import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Book() {
const nav = useNavigate()
const [value, setValue] = useState({})
const handlechange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value })
    console.log(e.target.value)
    console.log("val", value)
    console.log({ ...value })
} 
    const onAddBook= async () => {
        try {
            const config = {
                headers: {
                    "Content-type": "application/json"
                },
            }
            const data = await axios.post("http://localhost:4005/addbook", value, config)
            console.log(data)
            nav("/Signup")
            return data
        }
        catch (error) {
            console.log("couldm't add book", error)
        }
    }
  return (
      <div>
          <center>
              <div style={{ "border-radius": "3%", "background": "#2A2F4F", "height": "590px", "width": "450px", "margin": "50px" }}>
                  <h1 style={{ "color": "white", "paddingTop": "30px" }}>Add Book</h1>
                  <p style={{ "color": "#E3F2C1" }}>Please enter book details!</p>
                  <p>
                      <form>
                          <input type='text' name='Name' placeholder='Name' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                          <input type='text' name='Author' placeholder='Author' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                          <input type='text' name='Description' placeholder='Description' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                          <input type='text' name='Year' placeholder='Year' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                          <input type='text' name='Price' placeholder='Price' onChange={handlechange} style={{ "borderRadius": "5%", "width": "60%", "margin": "20px" }}></input>
                      </form>
                      <Button onClick={onAddBook} style={{ "margin": "2px", "width": "83px", "height": "39px", "background": "none", "borderColor": "#E3F2C1", }}>Signup</Button>
                  </p>
              </div>
          </center>
      </div>
  )
}

export default Book