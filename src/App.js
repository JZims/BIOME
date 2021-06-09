import React, { useState } from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';
import { useSelector, useDispatch } from 'redux'

function App () {

const { isLoggedIn, setIsLoggedIn } = useState(false)

    return ( 
    <div>
      { isLoggedIn === true ? <Navbar/> : ( 
        <div>
          <h1> Welcome to B.I.O.M.E.</h1>
          <h3> Please Log In </h3>
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
      </Switch>
    </div>
    )
  }


export default App;
