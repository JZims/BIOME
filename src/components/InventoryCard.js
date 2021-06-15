import React from 'react'
import Button from 'react-bootstrap/Button'
import { useSelector, useDispatch } from 'react-redux'



function InventoryCard({beverageId, proprietary_name, producer_name, vintage, category, image_url, bin}) {


    const beverageArray = useSelector(state => state.userReducer.beverages)
    const dispatch = useDispatch()

    function handleDelete(){
        fetch(`http://localhost:3000/beverages/${beverageId}`, {
            method: "DELETE", 
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(res => {
            const bevAfterDelete = beverageArray.filter(beverage => {
                return beverage.id !== beverageId
              })

              dispatch({type: "delete_item", payload: bevAfterDelete})
              
        })
    }

    
    return (
        <div className="beverage_card">
            <img src={image_url} alt={proprietary_name} className="beverage_image"/>
            <h3>{proprietary_name}</h3>
            <h4>{producer_name}</h4>
            <p>Vintage: {vintage}</p>
            <p>BIN #: {bin}</p>
            <Button onClick={handleDelete}> Delete Item </Button>
        </div>
    )
}
export default InventoryCard