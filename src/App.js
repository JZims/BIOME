import React from 'react'
import Login from './components/Login'
import Signup from './components/Signup'
import { Link, Switch, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component{

  render(){

    return( 
    <div>
      <h1> Welcome to BIOME </h1>
      <Link to="/inventory">Your Inventory </Link>
      <Switch>
        <Route path exact="/">
          <Login/>
        </Route>
        <Route path exact="/signup">
          <Signup/>
        </Route>
      </Switch>
    </div>
    )
  }
}

export default App;
