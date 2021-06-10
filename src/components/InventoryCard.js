import React from 'react'

function InventoryCard({beverage}) {



    return (
        <div>
            <h1>{beverage.proprietary_name}</h1>
            <h4>{beverage.vitage}</h4>
        </div>
    )
}
export default InventoryCard