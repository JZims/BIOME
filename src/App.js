import React, { useState, useEffect } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Inventory from './components/Inventory'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'


function App () {

const [isLoggedIn, setIsLoggedIn] = useState(false)
const [loggingIn, setLoggingIn] = useState(false)

const userInfo = useSelector((state) => state.user)

const dispatch = useDispatch()

useEffect(() => {

  if(localStorage.token && localStorage.user) {

    fetch(`http://localhost:3001/auto_login`, {
      headers:{
          "Authorization": `Bearer ${localStorage.token}`
      } 
    })
    .then(res=> res.json())
    .then(res => { console.log(res)
        if (res){
          dispatch({type: "user_login", payload: res.user})
        } 
      })
    } else {
      alert("Please Log In!")
      
    }
  }, [])

  
let handleLoginClick = () => {
  setLoggingIn(state => !state)
}


    return ( 
    <div>
      { isLoggedIn ? <Navbar/> : ( 
        <div>
          <h1> Welcome to B.I.O.M.E.</h1>
          {loggingIn === true ? null : <Link to="/login" onClick={handleLoginClick}> Log In Here </Link>}
          
        </div>
       )
      }

      <Switch>
        <Route exact path="/login">
          <Login setIsLoggedIn= { setIsLoggedIn }/>
        </Route>
        <Route exact path="/signup">
        <Signup/>
        </Route>
        <Route exact path="/inventory">
          <Inventory/>
        </Route>
      </Switch>
    </div>
    )
  }


export default App;
