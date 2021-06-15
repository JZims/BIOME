import React from 'react'
import Button from 'react-bootstrap/Button'



function InventoryCard({beverageId, proprietary_name, producer_name, vintage, category, image_url, bin}) {

  console.log(beverageId)

    function handleDelete(){
        fetch(`http://localhost:3000/beverages/${beverageId}`, {
            method: "DELETE", 
            headers: {
                "Authorization": `Bearer ${localStorage.token}`
            }
        })
        .then(res => res.json())
        .then(res => console.log(res))
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