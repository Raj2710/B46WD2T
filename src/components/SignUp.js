import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import {toast} from 'react-toastify'
import {useNavigate} from 'react-router-dom'

function SignUp() {

    let navigate = useNavigate()
    let handleSignup = async(e)=>{
        e.preventDefault()

        let data = {
            name:e.target.name.value,
            email:e.target.email.value,
            mobile:e.target.mobile.value,
            password:e.target.password.value
        }
        
        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/user/signup`,data)
            if(res.status===200)
            {
                toast.success(res.data.message)
                navigate('/sign-in')
            }
        } catch (error) {
            toast.error(error.response.data.error || error.response.data.message)
        }
    }

  return <div className='container-fluid'>
    <h1 className='title'>Sign Up</h1>
    <div className='signup-wrapper'>
    <Form onSubmit={handleSignup}>
    <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" name="name"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Mobile</Form.Label>
        <Form.Control type="text" placeholder="Enter Mobile" name="mobile"/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password"/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  </div>
}

export default SignUp