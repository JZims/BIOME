import React from 'react'
import InventoryCard from './InventoryCard'
import Filter from './Filter'
import {useSelector} from 'react-redux'

function Inventory() {

    const userInfo = useSelector((state) => state.user)

    const inventoryMap = userInfo.beverages.map(beverage => {
        <InventoryCard beverage={beverage}/>
    })

    return (
        <div>
            <h1>Inventory Page</h1>
            {inventoryMap}
            <Filter/>
        </div>
    )
}
export default Inventory
