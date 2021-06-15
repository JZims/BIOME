import React, { useState } from 'react'
import NewItem from './NewItem';
import Button from 'react-bootstrap/Button'


function Filter() {

    const [modalShow, setModalShow] = useState(false);

    return (
        <div> 
        <h3>Filter</h3>
          <Button variant="primary" onClick={() => setModalShow(true)}>
               Add New Item
           </Button>
   
               <NewItem
               show={modalShow}
               onHide={() => setModalShow(false)}
               
               />
        </div>
    )
}
export default Filter