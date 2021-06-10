import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
import { useDispatch } from 'react-redux'


function Login({ setIsLoggedIn }) {

    const[userNameInput, setUserNameInput] = useState("")
    const[passwordInput, setPasswordInput] = useState("")

    
    const dispatch = useDispatch()

    const history = useHistory()

    // const user = useSelector(state => state.user)

    const loginObj = {
        username: userNameInput, 
        password: passwordInput
    }

    function handleLoginSubmit(e){
        e.preventDefault()

        fetch('http://localhost:3001/login', {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            }, 
            body: JSON.stringify(loginObj)
        })
        .then(res => res.json())
        .then(res => {
            if(res.user) {
                localStorage.token=res.token
                localStorage.user= res.user
                dispatch({type: "user_login", payload: res.user})
                setIsLoggedIn(true)
                
                history.push('/inventory')
            } else {
                alert("Username or Password is invalid. Please try again.")
            }
        })
    }
    

    return (
        <div className="login-wrapper">
            <Form className="login_form" onSubmit={handleLoginSubmit}>
                <Form.Group controlId="loginUserName.ControlInput1" className="username_field">
                    <Form.Label> User Name </Form.Label>
                    <br/>
                    <Form.Control type="username" onChange={event => setUserNameInput(event.target.value)}/> 
                </Form.Group>
                   
                <Form.Group controlId="loginPassword.ControlInput1" className="password_field">
                    <Form.Label> Password </Form.Label>
                    <br/>
                    <Form.Control type="password" onChange={event => setPasswordInput(event.target.value)} /> 
                </Form.Group>
                <Button variant="primary" type="submit">
                 Submit
                </Button>
            </Form >
        </div>
    )
}
export default Login