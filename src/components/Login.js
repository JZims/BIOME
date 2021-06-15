import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import Modal from 'react-bootstrap/Modal'
import { useDispatch, useSelector } from 'react-redux'


function Login() {

    const[userNameInput, setUserNameInput] = useState("")
    const[passwordInput, setPasswordInput] = useState("")
    
    const dispatch = useDispatch() 

    const history = useHistory()

   const isLoggedIn = useSelector(state => state.navigationReducer.isLoggedIn)

    const loginObj = {
        username: userNameInput, 
        password: passwordInput
    }

    function handleLoginSubmit(e){
        e.preventDefault()

        fetch('http://localhost:3000/login', {
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
                localStorage.setItem('user', JSON.stringify(res.user))
                dispatch({type: "user_login", payload: res.user})
                dispatch({type: "login", payload: true})
                history.push('/inventory')
            } else {
                alert("Username or Password is invalid. Please try again.")
            }
        })

    }
    
    
    return (
        <div className="container-login100">
            <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
            {isLoggedIn ? <Redirect to="/inventory"/> : null}
                <Form className="login_form validate-form" onSubmit={handleLoginSubmit}>
                <div className="login100-form-title p-b-49">
                            Login
                        </div>
                    <Form.Group controlId="loginUserName.ControlInput1">
                        <div className="wrap-input100 validate-input m-b-23">
                            <Form.Label> User Name </Form.Label>
                            <div className="input100">
                            <Form.Control type="username" onChange={event => setUserNameInput(event.target.value)}/> 
                        </div>
                        </div>
    
                    </Form.Group>
                    
                    <Form.Group controlId="loginPassword.ControlInput1" className="password_field">
                        <div className="wrap-input100 validate-input">
                            <Form.Label> Password </Form.Label>
                            <div className="input100">
                            <Form.Control type="password" onChange={event => setPasswordInput(event.target.value)} /> 
                        </div>
                        </div>
                
                
                    </Form.Group>
                    <div className="text-right p-t-8 p-b-31">
                        <a href="#">Forgot password?</a>
                    </div>
                    <div className="container-login100-form-btn">
                        <Button variant="primary" type="submit">
                        Login
                        </Button>
                    </div>
                    <div className="txt1 text-center p-t-54 p-b-20">
                        <a href="#">Or Sign Up Here</a>
                    </div>
                    <div className="flex-col-c"></div>
                </Form >
            </div>
            </div>
    )
}
export default Login