import React from 'react'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { useSelector } from 'react-redux'

import Manifest from './Manifest'

function Navbar({handleLogOut}) {

    const isLoggedIn = useSelector((state) => state.navigationReducer.isLoggedIn)
    

    return (
        <div>
            { isLoggedIn ? 
                <div>
                <h1>Navbar Showing</h1>
                <button type="button" onClick={handleLogOut}> Log Out </button> 
                </div>
                : null 
                }
            
            <Manifest/>
        </div>
    )
}
export default Navbar 