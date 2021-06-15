import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import Inventory from './components/Inventory'
import NewItem from './components/NewItem'
import { Switch, Route, useHistory, Redirect} from 'react-router-dom'
import './App.css';
import { useSelector, useDispatch } from 'react-redux'


function App () {

  


const isLoggingIn = useSelector(state => state.navigationReducer.isLoggingIn)
const isLoggedIn = useSelector((state) => state.navigationReducer.isLoggedIn)

const history = useHistory()

const dispatch = useDispatch()

useEffect(() => {

  if(localStorage.token && localStorage.user) {

    fetch(`http://localhost:3000/auto_login`, {
      headers:{
          "Authorization": `Bearer ${localStorage.token}`
      } 
    })
    .then(res=> res.json())
    .then(res => { console.log(res)
        if (res){
          dispatch({type: "user_login", payload: res.user})
          dispatch({type: "login", payload: true})
          return null
        } 
      })
    } else {
      return (<Redirect to="/login"/> )
      
    }
    
  }, [])

  const handleLogOut= () => {
    dispatch({type: "logout", payload: false})
    dispatch({type: 'persist', payload: false})
    localStorage.clear()
    history.push('./login')
    }
  
const handleLoginClick = () => {
  dispatch({type: 'persist', payload: true})
}


    return ( 
    <div className="App">
      { isLoggedIn ? <Navbar handleLogOut={ handleLogOut }/> : ( 
        <div>
          <h1 className="heading" > Welcome to B.I.O.M.E.</h1>
          {isLoggingIn === true ? null : <Redirect to="/login" onClick={handleLoginClick}> Log In Here </Redirect>}
          
        </div>
       )
      }

      <Switch>
        <Route exact path="/login">
          <Login/>
        </Route>
        <Route exact path="/signup">
        <Signup/>
        </Route>
        <Route exact path="/inventory">
          <Inventory />
        </Route>
      </Switch>
    </div>
    )
  }


export default App;
