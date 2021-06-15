import React from 'react'



function InventoryCard({proprietary_name, producer_name, vintage, category, image_url, bin}) {

  
    
    return (
        <div>
            <h1>{proprietary_name}</h1>
            <h4>{vintage}</h4>
        </div>
    )
}
export default InventoryCard