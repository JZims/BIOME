import React, { useEffect } from 'react'
import { useHistory, Redirect, Link} from 'react-router-dom'
import InventoryCard from './InventoryCard'
import Filter from './Filter'
import { useSelector, useDispatch } from 'react-redux'

function Inventory() {
    const history = useHistory()

const user = useSelector(state => state.userReducer.user)

    useEffect(() => {
        if(user === undefined){
            return 
        } else {
            fetch(`http://localhost:3000/inventory`, {
                headers: {
                    "Content-Type": "application/json", 
                    "Authorization": `Bearer ${localStorage.token}`
                }
            })
            .then(res => res.json())
            .then(res => console.log(res))
        }
    },[])

    // fetch(`http://localhost:3000/inventory/${}`)

        return (
            <div>
                <h1>Inventory Page</h1>
                {/* <Link to='/login'>Please Log In to see your inventory</Link> */}
            </div>
        )
    }


export default Inventory
