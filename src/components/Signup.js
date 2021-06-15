import React, { useState } from 'react'
import { Redirect, useHistory } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux'



function Signup() {
    return (
        <div>
            <h1>Signup Page</h1>
            {/* <Form className="signup_form" onSubmit={handleSignupSubmit}>
                <Form.Group controlId="loginUserName.ControlInput1" className="username_field">
                    <Form.Label> User Name </Form.Label>
                    <br/>
                    <Form.Control type="username" onChange={event => setNewUserName(event.target.value)}/> 
                </Form.Group>
                   
                <Form.Group controlId="loginPassword.ControlInput1" className="password_field">
                    <Form.Label> Password </Form.Label>
                    <br/>
                    <Form.Control type="password" onChange={event => setNewPassword(event.target.value)} /> 
                </Form.Group>

                <Form.Group controlId="loginPassword.ControlInput1" className="admin_radio">
                    <Form.Label> Password </Form.Label>
                    <br/>
                    <Form.Control type="admin" onChange={event => setIsAdmin(event.target.value)} /> 
                </Form.Group>

                <Button variant="primary" type="submit">
                 Submit
                </Button>
            </Form > */}
        </div>
    )
}
export default Signup